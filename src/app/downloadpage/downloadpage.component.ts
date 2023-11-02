import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService, freeResource } from '../services/All.service';

@Component({
  selector: 'app-downloadpage',
  templateUrl: './downloadpage.component.html',
  styleUrls: ['./downloadpage.component.css']
})
export class DownloadpageComponent implements OnInit {

  freeResources: freeResource[] = [];

  constructor(private allService: AllService, private router: Router) { }
  
  ngOnInit(): void {
    const category = 'All'; // Replace with the desired category
    this.loadCourses(category);
  }

  // 
   openImageDetail(id: number): void {
    // Use the route name and parameter to navigate to the image detail page
    this.router.navigate(['image-detail', id]);
  }

  loadCourses(category: string): void {
    this.allService.getRelatedResourcesByCategory(category).subscribe(
      freeResources => {
        this.freeResources = freeResources;
        this.loadCourseImages();
      },
      error => {
        console.error('Error fetching resources:', error);
      }
    );
  }

  loadCourseImages(): void {
    for (const freeResource of this.freeResources) {
      const imageBlob = this.allService.getDecodedImage(freeResource.thumbnail);
      const imageUrl = URL.createObjectURL(imageBlob);
      freeResource.thumbnail = imageUrl;
    }
  }
}

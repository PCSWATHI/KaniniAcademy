import { Component } from '@angular/core';
import { AllService ,freeResource} from '../services/All.service';

@Component({
  selector: 'app-download-page',
  templateUrl: './download-page.component.html',
  styleUrls: ['./download-page.component.css']
})
export class DownloadPageComponent {

   freeResources: freeResource[] = [];

  constructor(private AllService: AllService) { }
  
ngOnInit(): void {
  const category = 'Books'; // Replace with the desired category
  this.loadCourses(category);
}


  loadCourses(category: string): void {
  this.AllService.getRelatedResourcesByCategory(category).subscribe(
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
      const imageBlob = this.AllService.getDecodedImage(freeResource.thumbnail);
      const imageUrl = URL.createObjectURL(imageBlob);
      freeResource.thumbnail = imageUrl;
    }
  }

}

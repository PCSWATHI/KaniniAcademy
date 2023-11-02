import { Component } from '@angular/core';
import { AllService , freeResource } from '../services/All.service';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.css']
})
export class PluginsComponent {
      freeResources: freeResource[] = [];
  p: number = 1;
  itemsPerPage: number = 9;
  totalProduct: any;
  filteredResources: freeResource[] = [];

  constructor(private allService: AllService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.allService.getFreeResource().subscribe(freeResources => {
      this.freeResources = freeResources;
      this.loadCourseImages();

      // Filter the resources based on the category 'Books'
      this.filteredResources = this.freeResources.filter(resource => resource.category === 'Plugins');
      
      this.totalProduct = this.filteredResources.length;
    });
  }

  loadCourseImages(): void {
    for (const freeResource of this.freeResources) {
      const imageBlob = this.allService.getDecodedImage(freeResource.thumbnail);
      const imageUrl = URL.createObjectURL(imageBlob);
      freeResource.thumbnail = imageUrl;
    }
  }

}
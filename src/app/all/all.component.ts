import { Component } from '@angular/core';
import { AllService, freeResource } from '../services/All.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  freeResources: freeResource[] = [];
  filteredResources: freeResource[] = [];
  p: number = 1;
  itemsPerPage: number = 9;
  totalProduct: any;
  selectedImage: string | null = null;
  selectedResource: freeResource | null = null;

constructor(private allService: AllService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.allService.getFreeResource().subscribe(freeResources => {
      this.freeResources = freeResources;
      this.loadCourseImages();

      // Filter the resources based on the category 'All'
      this.filteredResources = this.freeResources.filter(resource => resource.category === 'All');
      this.totalProduct = this.filteredResources.length;


     this.route.paramMap.subscribe(params => {
  const freeRidParam = params.get('freeRid');
  if (freeRidParam) {
    const imageId = +freeRidParam;
    this.selectedResource = this.freeResources.find(resource => resource.freeRid === imageId) || null;
  } else {
    this.selectedResource = null;
  }
});



    });

  }

  downloadImage(imageId: number): void {
    const selectedResource = this.freeResources.find(resource => resource.freeRid === imageId);

    if (selectedResource) {
      const imageBlob = this.allService.getDecodedImage(selectedResource.thumbnail);
      const imageUrl = URL.createObjectURL(imageBlob);
      this.selectedImage = imageUrl;
    } else {
      console.log("Selected image not found.");
    }
  }

  loadCourseImages(): void {
    for (const freeResource of this.freeResources) {
      const imageBlob = this.allService.getDecodedImage(freeResource.thumbnail);
      const imageUrl = URL.createObjectURL(imageBlob);
      freeResource.thumbnail = imageUrl;
    }
  }
}

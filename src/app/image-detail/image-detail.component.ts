import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllService, freeResource } from '../services/All.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  thumbnail?: string; // Make it possibly undefined

  constructor(
    private route: ActivatedRoute,
    private allService: AllService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const resourceId = Number(params.get('id'));
      if (!isNaN(resourceId)) {
        this.loadResourceThumbnail(resourceId);
      }
    });
  }

  loadResourceThumbnail(resourceId: number): void {
    // Assuming you have a method in your service to get the resource by ID
    this.allService.getFreeResourceById(resourceId).subscribe(
      (resource: freeResource) => {
        this.thumbnail = resource.thumbnail;
      },
      error => {
        console.error('Error fetching resource:', error);
      }
    );
  }
}

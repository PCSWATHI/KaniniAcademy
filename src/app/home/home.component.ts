import { Component, OnInit } from '@angular/core';
import { AllService,blog,Course } from '../services/All.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  blogs:blog[]=[];
  courses: Course[] = [];

  constructor(private AllService:AllService){}
  ngOnInit(): void {
    this.loadblog();
    this.loadCourses();

  }
  loadblog(): void {
    this.AllService.getAllblogs().subscribe((blogs: blog[]) => {
      this.blogs = blogs; 
      this.loadblogsImages(); 

    });
  }

  loadCourses(): void {
    
    this.AllService.getAllCourses().subscribe(courses => {
      this.courses = courses;
      
    });
  }
  loadblogsImages(): void {
    for (const blog of this.blogs) {
      const imageBlob = this.AllService.getDecodedImage(blog.image);
      const imageUrl = URL.createObjectURL(imageBlob);
      blog.image = imageUrl;
    }
  }

}

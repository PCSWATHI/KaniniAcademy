
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CertificateComponent } from './certificate/certificate.component';
import { SkillquizComponent } from './skillquiz/skillquiz.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { BlogComponent } from './blog/blog.component';
import { DownloadpageComponent } from './downloadpage/downloadpage.component';
import { BooksandPdfsComponent } from './booksand-pdfs/booksand-pdfs.component';
import { TemplatesComponent } from './templates/templates.component';
import { PluginsComponent } from './plugins/plugins.component';
import { ResourceNavbarComponent } from './resource-navbar/resource-navbar.component';
//import { FreeresourceNavbarComponent } from './freeresource-navbar/freeresource-navbar.component';
import { Component1Component } from './component1/component1.component';
import { FaqComponent } from './faq/faq.component';
import { Continue1Component } from './continue1/continue1.component';
import { TrainingComponent } from './training/training.component';
import { AllService } from './services/All.service';
import { FreeresourceNavbarComponent } from './freeresource-navbar/freeresource-navbar.component';
import { DownloadPageComponent } from './download-page/download-page.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
const routes: Routes = [
  {
    path: '', component: NavbarComponent, children: [
      { path: 'Home', component: HomeComponent },
      { path: 'Certificate', component: CertificateComponent },
      { path: 'Courses', component: Component1Component },
      { path: 'Blogs', component: BlogComponent },
      { path: 'freeresource-navbar', component: FreeresourceNavbarComponent },
      { path: 'Quiz', component: SkillquizComponent },
      { path: 'Faq', component: FaqComponent },
      {
        path: 'all', component: AllComponent, children: [
          { path: 'templates', component: TemplatesComponent },
          { path: 'plugins', component: PluginsComponent },
          { path: 'booksand-pdfs', component: BooksandPdfsComponent },
          { path: 'templates', component: TemplatesComponent },
        ]
      },
      { path: 'continue1', component: Continue1Component },

      { path: 'Training', component: TrainingComponent },

      { path: 'downloadpage/:freeRid', component: DownloadpageComponent },
            { path: 'download-page/:freeRid', component:DownloadPageComponent},
             { path: 'image-detail/:id', component: ImageDetailComponent  }



    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

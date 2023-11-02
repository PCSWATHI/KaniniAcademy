import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllService } from './services/All.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContinuelearningComponent } from './continuelearning/continuelearning.component';
import { MostpopularComponent } from './mostpopular/mostpopular.component';
import { FeaturedblogsComponent } from './featuredblogs/featuredblogs.component';
import { SkillquizComponent } from './skillquiz/skillquiz.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CertificateComponent } from './certificate/certificate.component';
import { DetailsComponent } from './details/details.component';
import { WorksComponent } from './works/works.component';
import { PluginsComponent } from './plugins/plugins.component';
import { TemplatesComponent } from './templates/templates.component';
import { AllComponent } from './all/all.component';
import { BooksandPdfsComponent } from './booksand-pdfs/booksand-pdfs.component';
import { Component1Component } from './component1/component1.component';
import { Continue1Component } from './continue1/continue1.component';
import { ContinuenavbarComponent } from './continuenavbar/continuenavbar.component';
import { ResourceNavbarComponent } from './resource-navbar/resource-navbar.component';
import { DownloadpageComponent } from './downloadpage/downloadpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlogComponent } from './blog/blog.component';
import { CardComponent } from './card/card.component';
import { PopupComponent } from './popup/popup.component';
import { SecondcardComponent } from './secondcard/secondcard.component';
import { FaqComponent } from './faq/faq.component';
import { TrainingComponent } from './training/training.component';
import { HttpClientModule } from '@angular/common/http';
import { FreeresourceNavbarComponent } from './freeresource-navbar/freeresource-navbar.component';
import { DownloadPageComponent } from './download-page/download-page.component';
import { ImagedetailComponent } from './imagedetail/imagedetail.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContinuelearningComponent,
    MostpopularComponent,
    FeaturedblogsComponent,
    SkillquizComponent,
    MainNavbarComponent,
    NavbarComponent,
    CertificateComponent,
    DetailsComponent,
    WorksComponent,
    PluginsComponent,
    TemplatesComponent,
    AllComponent,
    BooksandPdfsComponent,
    Component1Component,
    Continue1Component,
    ContinuenavbarComponent,
    ResourceNavbarComponent,
    DownloadpageComponent,
    SidebarComponent,
    BlogComponent,
    CardComponent,
    PopupComponent,
    SecondcardComponent,
    FaqComponent,
    TrainingComponent,
    FreeresourceNavbarComponent,
    DownloadPageComponent,
    ImagedetailComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

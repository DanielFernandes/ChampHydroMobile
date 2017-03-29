import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';


import { MyApp } from './app.component';
import { DistrictMasterPage } from '../pages/district-master/district-master';
import { DistrictDetailPage } from '../pages/district-detail/district-detail';
import { ProjectDetailPage } from '../pages/project-detail/project-detail';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ViewPdf } from '../pages/view-pdf/view-pdf';

import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { DistrictService }  from '../providers/district.service';
import { ReportService }  from '../providers/report-service';


@NgModule({
  declarations: [
    MyApp,
    DistrictMasterPage,
    DistrictDetailPage,
    ProjectDetailPage,
    ItemCreatePage,
    ViewPdf,
    PdfViewerComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DistrictMasterPage,
    DistrictDetailPage,
    ProjectDetailPage,
    ItemCreatePage,
    ViewPdf
  ],
  providers: [ DistrictService, ReportService, SocialSharing, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

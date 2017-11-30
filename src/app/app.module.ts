import { NewcomerDashboardService } from './dashboard/newcomer-dashboard/newcomer-dashboard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthGuard } from './shared/guards/auth.guard';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/translations/');
}


@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ProgressbarModule.forRoot(),
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    )

  ],
  providers: [NewcomerDashboardService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}

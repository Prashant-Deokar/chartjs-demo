import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppointmentsChartsComponent } from './appointments-charts/appointments-charts.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { PdfGenerationComponent } from './pdf-generation/pdf-generation.component';
import { WhatsAppNotificationComponent } from './whats-app-notification/whats-app-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppointmentsChartsComponent,
    QrCodeComponent,
    PdfGenerationComponent,
    WhatsAppNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsChartsComponent } from './appointments-charts/appointments-charts.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { PdfGenerationComponent } from './pdf-generation/pdf-generation.component';
import { WhatsAppNotificationComponent } from './whats-app-notification/whats-app-notification.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'charts', component: AppointmentsChartsComponent },
  { path: 'qrCode', component: QrCodeComponent },
  { path: 'pdf', component: PdfGenerationComponent },
  { path: 'whatsAppNotify', component: WhatsAppNotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

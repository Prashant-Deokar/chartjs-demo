import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf-generation',
  templateUrl: './pdf-generation.component.html',
  styleUrls: ['./pdf-generation.component.css']
})
export class PdfGenerationComponent implements OnInit {
  doctor = {
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    clinic: 'CardioCare Clinic',
    address: '123 Main Street, City',
    phone: '+1 123-456-7890',
    email: 'drjohndoe@example.com'
  };
  constructor() { }

  ngOnInit(): void {
  }
  downloadManagePDF(){
    const docDefinition = {
      content: [
        { text: 'Doctor Details', style: 'header' },
        { text: '\n' },
        { text: `Name: ${this.doctor.name}`,style: 'header' },
        { text: '\n' },
        { text: `Specialization: ${this.doctor.specialization}`,style: 'header' },
        { text: '\n' },
        { text: `Clinic: ${this.doctor.clinic}`,style: 'header' },
        { text: '\n' },
        { text: `Address: ${this.doctor.address}`,style: 'header' },
        { text: '\n' },
        { text: `Phone: ${this.doctor.phone}`,style: 'header' },
        { text: '\n' },
        { text: `Email: ${this.doctor.email}`,style: 'header' }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        }
      }
    };
    
    pdfMake.createPdf(docDefinition).download("doctorDetails");
    
    
    }
}

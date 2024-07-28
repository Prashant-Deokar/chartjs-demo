import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  title = 'webApp_15';
  elementType = 'url';
  value = 'Techiediaries';
  constructor() { }

  ngOnInit(): void {
  }

}

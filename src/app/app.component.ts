import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('appTitle') title: ElementRef;

  ngOnInit(): void {
    this.title.nativeElement.innerHTML = 'Onlin Shop';
  }
}

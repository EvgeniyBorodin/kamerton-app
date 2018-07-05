import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: number;

  constructor() {
    let currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
   }

  ngOnInit() {
  }

  vkHref(){
    window.open('https://vk.com/kamerton.hall', '_blank');
  }

  instHref(){
    window.open('https://www.instagram.com/kamerton.hall', '_blank');
  }

}

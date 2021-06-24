import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Swiper} from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

  mySwiper!: Swiper;
  constructor() { }
  
  ngAfterContentInit() {
    this.mySwiper= new Swiper('.swiper-container');
  }

  ngOnInit(): void {
  }

}

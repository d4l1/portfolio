import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class BackgroundComponent {


}

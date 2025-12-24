import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-benefits',
  imports: [NgOptimizedImage],
  templateUrl: './card-benefits.html',
  styleUrl: './card-benefits.scss',
})
export class CardBenefits {
  @Input("img-path") imgPath: string = '';
  @Input("card-title") cardTitle: string = '';
  @Input("card-description") cardDescription: string = '';
}

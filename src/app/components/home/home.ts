import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { Forms } from '../forms/forms';
import { CardBenefits } from '../card-benefits/card-benefits';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    NgOptimizedImage,
    BtnPrimary,
    Forms,
    CardBenefits,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}

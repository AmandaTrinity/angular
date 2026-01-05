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
  benefits = [
    {
      title: 'Equipe capacitada',
      image: './assets/team.png',
      description: 'Contamos com especialistas em arquitetura de software, performance e cloud para garantir que seu projeto atinja os mais altos padrões de qualidade e eficiência.'
    },
    {
      title: 'Seus projetos guiados do zero',
      image: './assets/project-guide.png',
      description: 'Acompanhamos seu projeto desde a concepção até a implementação, garantindo as melhores práticas de mercado e uma solução robusta que atenda suas necessidades.'
    }
  ];
}

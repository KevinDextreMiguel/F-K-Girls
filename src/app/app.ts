import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Banner } from './shared/banner/banner';
import { NgxSonnerToaster } from 'ngx-sonner';
import { WhatsappFloat } from './shared/whatsapp-float/whatsapp-float';

@Component({
  //componenet principal
  selector: 'app-root',
  //importar los pies de pàgina
  imports: [RouterOutlet,Header,Footer,Banner,NgxSonnerToaster,WhatsappFloat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miapp');
}

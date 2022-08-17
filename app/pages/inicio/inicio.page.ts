import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;

}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [


  ]

  constructor(private menuController: MenuController, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  mostrarMenu() {
    this.menuController.open('first');
  }

  logout() {
    localStorage.setItem('authenticated', '0');
    this.router.navigateByUrl('/');
  }
}

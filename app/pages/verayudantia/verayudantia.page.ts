import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { PublicacionesService, Datos } from 'src/app/services/publicaciones.service';
import { FormBuilder, FormControl, FormGroup, Validators}  from "@angular/forms";


interface Componente {
  icon: string;
  name: string;
  redirecTo: string;

}

@Component({
  selector: 'app-verayudantia',
  templateUrl: './verayudantia.page.html',
  styleUrls: ['./verayudantia.page.scss'],
})

export class VerayudantiaPage implements OnInit {



  componentes: Componente[] = [
  ]

  dat: Datos [] = [];
  newForm : Datos = <Datos>{};
  ionicForm: FormGroup;
  isSubmitted = false;
  datos : Datos [] = [];
  newDato : Datos = <Datos>{};

  @ViewChild('myList')myList : IonList;

  form: FormGroup

  constructor(
    private menuController: MenuController, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private storageService: PublicacionesService,
    private plt: Platform, 
    private toastcontroller: ToastController) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      }); { }
    }

  ngOnInit() {
  }
  mostrarMenu() {
    this.menuController.open('first');
  }

  logout() {
    localStorage.setItem('authenticated', '0');
    this.router.navigateByUrl('/');
  }

  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

  addDatos(){
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });
  }

  //update
  updateDatos(dat: Datos ){
    dat.categoria = `UPDATED: ${dat.categoria}`;
    dat.modified = Date.now();
    this.storageService.updateDatos(dat).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  //delete
  deleteDatos(dato: Datos){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }


  async showToast(msg){
    const toast = await this.toastcontroller.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }

  
}


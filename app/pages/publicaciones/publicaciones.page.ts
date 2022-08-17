import { Component, OnInit, ViewChild } from '@angular/core';
import { PublicacionesService, Datos } from 'src/app/services/publicaciones.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators}  from "@angular/forms";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  datos : Datos [] = [];
  newDato : Datos = <Datos>{};

  @ViewChild('myList')myList : IonList;

  form: FormGroup

  constructor(private storageService: PublicacionesService, private menuController: MenuController,
    private plt: Platform, private toastcontroller: ToastController) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
    }
  


  ngOnInit() {


  }

  mostrarMenu() {
    this.menuController.open('first');
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
      this.showToast('Publicacíon efectuada');
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

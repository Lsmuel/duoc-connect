import { Component, OnInit, ViewChild } from '@angular/core';
import { CitaserviceService, Form } from 'src/app/services/citaservice.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {

  form: Form [] = [];
  newForm : Form = <Form>{};

  @ViewChild('myList')myList : IonList;

  constructor(private storageService: CitaserviceService, private menuController: MenuController,
    private plt: Platform, private toastcontroller: ToastController ) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
    }

  ngOnInit() {
  }

  loadDatos(){
    this.storageService.getDatos().then(formu=>{
      this.form=formu;
    });
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  addDatos(){
    this.newForm.modified = Date.now();
    this.newForm.id = Date.now();
    this.storageService.addDatos(this.newForm).then(form=>{
      this.newForm = <Form>{};
      this.showToast('Cita Agregada');
      this.loadDatos();
    });
  }

  updateDatos(form: Form ){
    form.nombre = `UPDATED: ${form.nombre}`;
    form.modified = Date.now();
    this.storageService.updateDatos(form).then(item=>{
      this.showToast('Cita actualizada!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }
  
  deleteDatos(form: Form){
    this.storageService.deleteDatos(form.id).then(item=>{
      this.showToast('Cita eliminada');
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

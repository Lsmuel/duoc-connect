import { Component, OnInit, ViewChild } from '@angular/core';
import { DatosService, Datos } from 'src/app/services/datos.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators}  from "@angular/forms";
import { AlertController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Button } from 'protractor';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})


export class DatosPage implements OnInit {
  public regForm: FormGroup;

  isSubmitted = false;
  datos : Datos [] = [];
  newDato : Datos = <Datos>{};

  @ViewChild('myList')myList : IonList;

  valEmail: any = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i


  get rut () {
    return this.regForm.get('rut')
  }
  get nombre () {
    return this.regForm.get('nombre')
  }
  get apellido () {
    return this.regForm.get('apellido')
  }
  get direccion () {
    return this.regForm.get('direcciont')
  }
  get email () {
    return this.regForm.get('email')
  }
  get password () {
    return this.regForm.get('password')
  }
  get telefono () {
    return this.regForm.get('telefono')
  }
  get edad () {
    return this.regForm.get('edad')
  }

  public errorMessage = {
    rut:[
      {type: 'required', message: 'Rut es requerido' },
      {type: 'maxLenght', message: 'Maximo 10 caracteres' },
    ],
    nombre:[
      {type: 'required', message: 'Nombre es requerido' },
      {type: 'minLenght', message: 'Minimo 5 caracteres' },
    ],
    apellido:[
      {type: 'required', message: 'Apellido es requerido' },
      {type: 'minLenght', message: 'Minimo 5 caracteres' },
    ],
    direccion:[
      {type: 'required', message: 'Direccion es requerido' },
      {type: 'minLenght', message: 'Minimo 10 caracteres' },
    ],
    email:[
      {type: 'required', message: 'Email es requerido' },
      {type: 'pattern', message: 'No cumple con las condiciones' },
    ],
    password:[
      {type: 'required', message: 'Contraseña es requerido' },
      {type: 'minLenght', message: 'Minimo 5 caracteres' },
    ],
    telefono:[
      {type: 'required', message: 'Telefono es requerido' },
      {type: 'minLenght', message: 'Minimo 9 caracteres' },
    ],
    edad:[
      {type: 'required', message: 'Edad es requerido' },
      {type: 'minLenght', message: 'Tienes que ser mayor de edad' },
    ]
  }

  constructor(private formBuilder: FormBuilder, private storageService: DatosService, public alertController: AlertController,
    private plt: Platform, private toastcontroller: ToastController) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      });

      this.regForm = this.formBuilder.group({
        rut: ['', [Validators.required, Validators.maxLength(10)]] ,
        nombre: ['', [Validators.required, Validators.minLength(3)]] ,
        apellido: ['',[ Validators.required, Validators.minLength(3)]],
        direccion: ['', [Validators.required, Validators.minLength(10)]] ,
        email: ['', [Validators.required, Validators.pattern(this.valEmail)]] ,
        password: ['', [Validators.required, Validators.minLength(5)]] ,
        telefono: ['', [Validators.required, Validators.minLength(9)]] ,
        edad: ['', [Validators.required, Validators.minLength(18)]] ,
      })

    }
  
    

  submitForm(){
    console.log(this.regForm.value)
  }
  onReset(){
    this.regForm.reset();
  }

  ngOnInit() {

  }



  


  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

//  async validaciones(){
//      if(this.newDato.rut == null && this.newDato.nombre){
//       const alert = await this.alertController.create({
//         header: 'Datos incorrectos',
//         message: 'Los datos que ingresaste son incorrectos.',
//         buttons: ['Aceptar']
//       });

//       await alert.present();
//   } else{
//     const alert = await this.alertController.create({
//       header: 'Datos Ingresados',
//       message: 'Los datos se ingresaron correctamente.',
//       buttons: ['Aceptar']
//     });

//     await alert.present();

//   }
//  }

  async addDatos(){
    
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();

    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });
  }

  updateDatos(dato: Datos ){
    dato.nombre = `UPDATED: ${dato.nombre}`;
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }
  
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

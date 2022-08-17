import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService, Datos } from 'src/app/services/datos.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  

  var : Datos[] = [];
  loginUrl =' ' ;
  user = {
    email : '',
    password: ''
  }
  
  constructor(public alertController: AlertController, private router: Router, private activatedRoute: ActivatedRoute, private toastController: ToastController, private datoss: DatosService) { 


  }



  ngOnInit() {
    this.loginUrl = this.activatedRoute.snapshot.queryParamMap.get('returnto') || 'inicio';
    console.log(this.loginUrl);
  }

   signIn(){

    this.datoss.getDatos().then(
      async (Datos) => {
        this.var = Datos;
        // validate email and password
        let valida = this.var.find(datoss => datoss.email === this.user.email && datoss.password === this.user.password);
        if(valida){
          console.log(valida.nombre, valida.apellido);
          localStorage.setItem('authenticated','1');
          this.router.navigateByUrl(this.loginUrl);
        }
        else{
          const alert = await this.alertController.create({
            header: 'Datos incorrectos',
            message: 'Los datos que ingresaste son incorrectos.',
            buttons: ['Aceptar']
          });
      
          await alert.present();
        }
      }
    );

  }





}

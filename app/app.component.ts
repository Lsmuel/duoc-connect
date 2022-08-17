import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;
  
 

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[] = [ 

      {
        icon: 'megaphone', 
        name: 'Hacer Publicacion',
        redirecTo: 'publicaciones'
      }, 
      {
        icon: 'pencil-outline', 
        name: 'Citas',
        redirecTo: 'citas'
      },
      {
        icon: 'help', 
        name: 'Ver ayudantías',
        redirecTo: 'verayudantia'
      },
      {
      
        icon: 'globe', 
        name: 'Noticias Duoc',
        redirecTo: 'medicina'
      },
      {
        icon: 'chatbubbles-outline',
        name: 'Chat',
        redirecTo: 'chatt'
      }
   

  ]



  constructor() {}
}

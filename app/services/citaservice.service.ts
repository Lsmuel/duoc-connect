import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Form {
  id: number;
  nombre: string;
  fechaN: Date;
  telefono: number;
  hora: string;
  mensaje: string;
  modified: number;
}
const ITEMS_KEY = 'my-datos';

@Injectable({
  providedIn: 'root'
})
export class CitaserviceService {

  private _storage: Storage;

  constructor(private storage: Storage) {
    this.init();
   }

   async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  addDatos(dato: Form): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((datos: Form[]) => {
      if (datos) {
        datos.push(dato);
        return this.storage.set(ITEMS_KEY, datos);
      } else {
        return this.storage.set(ITEMS_KEY, [dato]);
      }
    });
  }


  getDatos(): Promise<Form[]> {
    return this.storage.get(ITEMS_KEY);
  }

  updateDatos(dato: Form): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((datos: Form[]) => {
      if (!datos || datos.length == 0) {
        return null;
      }
      let newDato: Form[] = [];
      for (let i of datos) {
        if (i.id === dato.id) {
          newDato.push(dato);
        }
        else {
          newDato.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newDato);
    });
  }


  deleteDatos(id: number): Promise<Form> {
    return this.storage.get(ITEMS_KEY).then((datos: Form[]) => {
      if (!datos || datos.length === 0) {
        return null;
      }
      let toKeep: Form[] = [];
      for (let i of datos) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}


import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Meta } from '../models/meta.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MetaServiceService {

  constructor(private firestore: AngularFirestore) { }

  obtenerMetas() {
    return this.firestore
      .collection<Meta>('metas')
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data()
          }))
        )
      );
  }

  agregarMeta(meta: string) {
    return this.firestore.collection('metas').add({
      meta: meta
    });
  }

  eliminarMeta(id: string) {
    return this.firestore.collection('metas').doc(id).delete();
  }
}

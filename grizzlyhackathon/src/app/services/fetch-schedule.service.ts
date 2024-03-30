import { Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, QueryDocumentSnapshot, QuerySnapshot, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { doc, getDoc, getFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FetchScheduleService {
  constructor() { }
}

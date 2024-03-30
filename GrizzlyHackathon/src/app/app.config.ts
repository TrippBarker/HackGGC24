import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"grizzlyhackathon","appId":"1:251106817884:web:12573b2b36ceb0a2a57399","storageBucket":"grizzlyhackathon.appspot.com","apiKey":"AIzaSyCgnBVuBJb3P9uF0KFTt0e1CaV8031uDeQ","authDomain":"grizzlyhackathon.firebaseapp.com","messagingSenderId":"251106817884","measurementId":"G-146EDTRMCV"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};

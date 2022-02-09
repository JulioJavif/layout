import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactComponent } from './contact/contact.component';

// import { FirebaseAppModule } from '@angular/fire/app';
// import { AuthModule } from '@angular/fire/auth';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyAzxXisFRBe24B_aRVxOaB_KKfQT8zvPvU",
//   authDomain: "formcontact-585b0.firebaseapp.com",
//   projectId: "formcontact-585b0",
//   storageBucket: "formcontact-585b0.appspot.com",
//   messagingSenderId: "172730145915",
//   appId: "1:172730145915:web:7e7c8c5cd05989ba2ed6de",
//   measurementId: "G-PZTS0SGJL0"
// };

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    SkeletonComponent,
    ProductosComponent,
    NosotrosComponent,
    LoginComponent,
    RegistroComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
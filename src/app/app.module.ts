import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaComponent } from './componentes/alta/alta.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NetCoreService } from 'src/app/net-core.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NetCoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

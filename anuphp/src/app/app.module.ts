import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FileuploderComponent } from './fileuploder/fileuploder.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './component/list/list.component';
import { EditComponent } from './component/edit/edit.component';
import { CreateComponent } from './component/create/create.component';

const routes:Routes=[
  {path:'create',component:CreateComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'list',component:ListComponent},
  {path:'',redirectTo:'list',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    FileuploderComponent,
    GallaryComponent,
    HeaderComponent,
    ListComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

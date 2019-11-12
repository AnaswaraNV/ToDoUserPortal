import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule
} from "@angular/material";
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LogoutComponent } from './logout/logout.component';
import {HttpInterceptorService} from "./service/http/http-interceptor.service";
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    AddTodoComponent,
    DeleteTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass : HttpInterceptorService , multi : true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

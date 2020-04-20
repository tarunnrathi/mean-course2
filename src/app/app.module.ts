import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { PostCreateComponent} from './posts/post-create/post-create.component';
import { HelloComponent } from './hello.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatCardModule ],
  declarations: [ AppComponent, HelloComponent,PostCreateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

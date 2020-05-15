import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { usercomponent } from './user/user.component';
import { commentscomponent } from './comments/comments.component';
import { postcomponent } from './post/post.comonent';
import { RouterModule } from '@angular/router';
import { rout} from './router.module';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { usereditcomponent } from './useredit/useredit.comonent';
import { userviewcomponent } from './userview/userview.component';
import { pagenavcomponent } from './pagenav/pagenav.component';
import { postviewcomonent } from './postview/postview.component';


@NgModule({
  declarations: [
    AppComponent,usercomponent,commentscomponent,postcomponent,usereditcomponent,userviewcomponent,pagenavcomponent,
    postviewcomonent
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule ,RouterModule.forRoot(rout,{useHash:true})
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

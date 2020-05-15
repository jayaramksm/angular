import { Routes,RouterModule } from "@angular/router";
import { usercomponent } from './user/user.component';
import { postcomponent } from './post/post.comonent';
import { commentscomponent } from './comments/comments.component';
import { NgModule } from '@angular/core';
import { usereditcomponent } from './useredit/useredit.comonent';
import { userviewcomponent } from './userview/userview.component';
import { pagenavcomponent } from './pagenav/pagenav.component';
import { postviewcomonent } from './postview/postview.component';

 export const rout:Routes =[{
    path:"user",
    component:usercomponent,
    
},
{
    path:"",
    redirectTo:"user",
    pathMatch:"full"
},
{
    path:"post",
    component:postcomponent
},
{
    path:"useredit/:userid",
    component:usereditcomponent
},
{
    path:"usereview/:userid",
    component:userviewcomponent
},
{
    path:"comments",
    component:commentscomponent
},
{
    path:"pagenav/:userid",
    component:pagenavcomponent
},
{
    path:"postview/:userid",
    component:postviewcomonent
}]

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss']
})
export class AdvertiseComponent implements OnInit {
  
  isMenuOpen = true;
  contentMargin = 180;
  txtInfo = 13;
  adContentMain= true;
  textadd=false;
  imgadd=false;
  videoadd=false;
  add=false;
  discription:any;
  header:any;
  budget=false;
  input:any;
  textaddpreview:string;
  payment = false;
  imglogo = true;
  imgbudget = false;
  btnbackImg = false;
  btnpreviewImg = false;
  btnnextImg = false;
  imgpayment = false;
  btnnextImgpayment = false;
  videosepcs=true;
  videobudget=false;
  btnnextvideo=false;
  btnbackvideo=false;
  videopayment=false;
  btnpayvideo=false;
  textcontent=true;
  imageadd=false
  adddvideo=false
  previewimg=false
  videopreview=false
  textpreview=false;
  onToolbarMenuToggle(){
    this.isMenuOpen = !this.isMenuOpen;


    if(!this.isMenuOpen){
      this.contentMargin = 55;
      this.txtInfo = 0;

    }
    else {
      this.contentMargin = 180;
      this.txtInfo = 13;
    }
  }
  addtext(){
    this.adContentMain = false;
    this.textadd=true;
    this.add=false
    this.adddvideo=false
    this.textcontent=true;
   this.imageadd=false
  
  }

  addimg(){
    this.textcontent=false;
   this.imageadd=true
   this.adddvideo=false;
  }

  singleimgnextbudget(){
    this.imglogo=false;
    this.imgbudget=true
  }
  singleimgnextback(){
    this.imgbudget=false
    this.imglogo=true;
  }
  singleimgnextpay(){
    this.imgbudget=false
    this.imgpayment=true
  }
  singleimgnextpayback(){
    this.imgbudget=true
    this.imgpayment=false
  }
  singleimgnextpaynext(){
    this.previewimg=true;
    this.imgbudget=false
  }
  singleimgnextpreviewback(){
    this.previewimg=false;
    this.imgbudget=true
  }
  addvideo(){
    this.textcontent=false;
    this.imageadd=false
    this.adddvideo=true;
  }

  videofirstnext(){
    this.videosepcs=false;
    this.videobudget=true
  }
  videofirstback(){
    this.videosepcs=true;
    this.videobudget=false
  }
  videonextpay(){
    this.videobudget=false;
    this.videopayment=true;
  }
  videosecondback(){
    this.videobudget=true;
    this.videopayment=false;
  }
  videopreviewone(){
    this.videobudget=false;
    this.videopreview=true 
  }
  videonextpreviewback(){
    this.videobudget=true;
    this.videopreview=false   
  }
  backimg(){
    this.videoadd=false;
    this.imglogo = true;
    this.btnnextImg=true;
    this.imgbudget=false;
    this.btnbackImg = true;
    this.imgpayment = false;
    this.btnnextImgpayment = false;
  }

  

  nextimg(){
    this.videoadd=false;
    this.imglogo = false;
    this.btnnextImg=false;
    this.imgbudget=true;
    this.btnbackImg = true;
    this.btnnextImgpayment = true;
  }

  nextimgpay(){
    this.videoadd=false;
    this.imglogo = false;
    this.btnnextImg=false;
    this.imgbudget=false;
    this.btnbackImg = false;
    this.btnnextImgpayment = false;
    this.imgpayment = true;
  }

 

  nextvideo(){
    this.videosepcs=false;
    this.videoadd=true;
    this.videobudget=true;
    this.btnnextvideo=false;
    this.btnbackvideo=true;
    this.btnpayvideo=true;
  }

  nextvideopay(){
    this.videosepcs=false;
    this.videoadd=true;
    this.videobudget=false;
    this.btnnextvideo=false;
    this.btnbackvideo=false;
    this.videopayment=true;
    this.btnpayvideo=false;
  }

  backvideo(){
    this.videosepcs=true;
    this.videoadd=true;
    this.videobudget=false;
    this.btnnextvideo=true;
    this.btnbackvideo=false;
    this.videopayment=false;
  }

  preview(){
    this.header=this.input.addheader
    this.discription=this.input.discription
    this.textaddpreview="Preview"
   this.textpreview=true;
   this.budget=false;
  }

  previewback(){
    this.textpreview=false;
   this.budget=true;
  }

  next(input){
    this.input=input
    this.budget=true;
    this.textadd=false;
    this.payment=false;
  }
  back(){
    this.budget=false;
    this.textadd=true
    this.payment=false;
    this.header='';
    this.discription='';
    this.textaddpreview = '';
  }
  paymentShow(){
    this.payment=true;
    this.header='';
    this.discription='';
    this.textaddpreview = '';
  }
  
   

  constructor() { }

  ngOnInit(): void {
  }


}

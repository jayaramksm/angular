import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpen = true;
  contentMargin = 185;
  txtInfo = 13;
  imgSize = 100;
  imgLeft = 36;
  navTop = 118;


  onToolbarMenuToggle(){
    //console.log('toolbar toggle', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen){
      this.contentMargin = 55;
      this.txtInfo = 0;
      this.imgSize = 40;
      this.imgLeft = 8;
      this.navTop = 0;
    }
    else {
      this.contentMargin = 185;
      this.txtInfo = 13;
      this.imgSize = 100;
      this.imgLeft = 36;
      this.navTop = 118;
    }
  }
 
  constructor() { }

   

  ngOnInit(): void {
  }

}

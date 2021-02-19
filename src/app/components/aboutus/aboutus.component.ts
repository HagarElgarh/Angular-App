import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/ngx-owl-carousel-o';
// For MDB Angular Free
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  slidesStore = [
    {
      src:'../../../assets/erw.jpg',
    }, 
    {
      src:'../../../assets/levi.png',
    }, 
    {
      src:'../../../assets/hen.png',
    }, 
    {
      src:'../../../assets/ere.jpg',
    },
    {
      src:'../../../assets/mika.jpg',
    },
    {
      src:'../../../assets/rm.png',
    },
    {
      src:'../../../assets/re.jpg',
    },
    {
      src:'../../../assets/sas.jpg',
      
    }
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 7
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  constructor() { 

    
  }

  ngOnInit(): void {
  }

}

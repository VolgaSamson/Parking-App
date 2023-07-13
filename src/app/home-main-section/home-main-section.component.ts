import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-main-section',
  templateUrl: './home-main-section.component.html',
  styleUrls: ['./home-main-section.component.css']
})
export class HomeMainSectionComponent implements OnInit {

  constructor(private router : Router) { }


  datas=[{
    title:"Economical",
    imgUrl:"assets/Images/image_1.jpg",
    },
    {
      title:"Fast",
      imgUrl:"assets/Images/image_2.jpg",
  },
  {
    title:"Easy Booking",
    imgUrl:"assets/Images/image_3.jpg",
    
},
{
  title:"24/7",
  imgUrl:"assets/Images/image_4.jpg",
  
}
];

  ngOnInit(): void {
  }

  checkSession(){
    if (sessionStorage.length == 0){
      
      this.router.navigate(['/login'])
    }
    else{
      this.router.navigate(['/dashboard'])
    }
  }
}

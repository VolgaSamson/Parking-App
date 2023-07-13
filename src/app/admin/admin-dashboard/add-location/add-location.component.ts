import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocationsService } from 'src/app/services/locations.service';
import { Locations } from 'src/app/models/locations.model';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  form = new FormGroup({
    location_name : new FormControl('', Validators.required),
    area : new FormControl('', Validators.required)
  })
  
  constructor(private locationService: LocationsService) { }

  locations$:any = [];

  ngOnInit(): void {
    this.loadLocations();
  }

   onSubmit(){
    this.locationService.addLocation(JSON.stringify(this.form.value))
    .subscribe((result => {
      if(result !== null){
        alert("Location Added")
      }
      else{
        alert('Something went wrong')
      }
    }))
   }

   loadLocations(){
    return this.locationService.getLocations()
    .subscribe((resultdata:any)=> {
      this.locations$ = resultdata.data;
    }
      )
    
  }
}

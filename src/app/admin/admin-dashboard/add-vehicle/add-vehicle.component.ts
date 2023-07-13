import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicles$? :any = [];
  form = new FormGroup({
    vehicle_type : new FormControl('', Validators.required),
    cost : new FormControl('', Validators.required)
  })
  constructor(private vehicleservice : VehicleService) { }

  ngOnInit(): void {
    this.loadVehicle();
  }

  loadVehicle(){
    this.vehicleservice.getVehicles()
    .subscribe((resdata:any) => {
      this.vehicles$ = resdata.data
    }) 
  }

  onSubmit(){
    this.vehicleservice.addVehicle(JSON.stringify(this.form.value))
    .subscribe((result => {
      if(result!=null){
        alert('Vehicle Added');
        location.reload();
      }
      else{
        alert('Error occurred'); 
      }
    }))
      
    
    
  }
}

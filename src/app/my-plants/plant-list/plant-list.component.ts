import { Component, OnInit, Input, TemplateRef} from '@angular/core';
import { Plant } from '../plant';
import { PLANTS } from '../plants';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {
  plantList = PLANTS;
  @Input() plants: Plant[];

  selectedPlant: Plant;
  newName: string;
  newLocation: string;
  newLight: string;
  newWater: string;
  newDate: string;

  modalRef: BsModalRef;

  rooms = [
    "Kitchen", "Living Room", "Bedroom", "Bathroom", "Office"
  ];

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  addPlant(){
    let plant = new Plant(this.newName, this.newLocation, this.newLight, this.newWater, this.newDate)
    this.plantList.push(plant);
  }

  onSelect(plant: Plant) : void {
    this.selectedPlant = plant;
  }

}

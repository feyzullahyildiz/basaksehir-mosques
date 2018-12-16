import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { DataService } from '../data.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, DoCheck {
  // @Input() mosques;
  selectedMosques: any[]
  unSelectedMosques: any[]
  isSelectedUp = false
  // set isSelectedUpSetter(val: boolean){
  //   this.isSelectedUp = val
  //   console.log('HREE')
  //   if(val){
  //     this.selectedMosques = this.dataService.mosques.filter(x => x.selected)
  //     this.unSelectedMosques = this.dataService.mosques.filter(x => !x.selected)
  //   }
  // }
  constructor(private appComponent: AppComponent, private dataService: DataService) {
  }

  ngOnInit() {
    // console.log('LIST', this.dataService)
  }

  isSelectedUpChange(val){
    let value = val.target.checked
    this.isSelectedUp = value
    this.updateMosqueList()

  }

  updateMosqueList(){
    if(this.isSelectedUp){
      this.selectedMosques = this.dataService.mosques.filter(x => x.selected)
      this.unSelectedMosques = this.dataService.mosques.filter(x => !x.selected)
    }

  }
  ngDoCheck(){
    this.updateMosqueList()
  }
}

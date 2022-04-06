import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  public show:boolean=false;

  public color="accent";

  constructor(public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.switch.subscribe( event => this.show = event)
  }

}

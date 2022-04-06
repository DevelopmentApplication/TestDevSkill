import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  @Output() switch: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public open():void{
    this.switch.emit(true);
  }

  public close():void{
    this.switch.emit(false);
  }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IRover } from '../models/rover.model';
import { RoverService } from '../services/rover.service';

@Injectable({
  providedIn: 'root'
})
export class RoverResolver implements Resolve<IRover[]> {

  constructor(private roverService: RoverService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRover[]> {
    return this.roverService.getRovers();
  }
}

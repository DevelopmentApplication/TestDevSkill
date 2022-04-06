import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhotos, IRover } from '../models/rover.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoverService {

  constructor(private http: HttpClient) { }

  public getRovers(): Observable<IRover[]> {
    const url = `${environment.API_ROVERS}${environment.API_KEY}`;
    return this.http.get<IRover[]>(url).pipe(map(response => response));
  }

  public getPhotos(data$: any): Observable<IPhotos[]> {
    const url = `${environment.API_ROVERS_PHOTOS}${data$.nameControl}/photos?earth_date=${data$.dateControl.toISOString().split('T')[0]}&api_key=${environment.API_KEY}`;
    return this.http.get<IPhotos[]>(url).pipe(map(response => response));
  }

}

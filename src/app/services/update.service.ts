import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private valueSubject = new BehaviorSubject<string>("");

  updateValue(newValue: string) {
    console.log(newValue);
    this.valueSubject.next(newValue);
  }

  getValue() {
    return this.valueSubject.asObservable();
  }
}

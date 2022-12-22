import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable, map, of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LessThanZeroValidator implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.value < 0).pipe(
      map((result) => (result ? { lessThanZero: true } : null)),
      catchError(() => of(null))
    );
  }
}

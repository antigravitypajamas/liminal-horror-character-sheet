import { NotificationService } from './notification.service';
import {
  AbstractControl,
  ValidationErrors,
  AsyncValidator,
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable, map, of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZeroHpValidator implements AsyncValidator {
  constructor(private notificationService: NotificationService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.value === 0).pipe(
      map((result) => {
        if (result) {
          this.notificationService.showWarning(
            'Roll for Fallout!',
            "You've been reduced to 0 HP!"
          );
          return { zeroHp: true };
        } else {
          return null;
        }
      }),
      catchError(() => of(null))
    );
  }
}

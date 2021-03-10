import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { DataActions } from '../actions/data.actions';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(DataActions.loadData),
    mergeMap(() => this.dataService.getData()
      .pipe(
        map(data => ({ type: DataActions.loadDataSuccess, data })),
        catchError(() => EMPTY)
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private dataService: DataService,
  ) {}
}

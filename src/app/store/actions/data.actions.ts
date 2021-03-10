import { createAction, props } from '@ngrx/store';
import { IData } from '../../types/idata';

export enum DataActions {
  loadData = '[Data] Load Data',
  loadDataSuccess = '[Data] Load Data Success',
  loadDataFailure = '[Data] Load Data Failure',
}

export const loadData = createAction(
  DataActions.loadData
);

export const loadDataSuccess = createAction(
  DataActions.loadDataSuccess,
  props<{ data: IData[] }>()
);

export const loadDataFailure = createAction(
  DataActions.loadDataFailure,
  props<{ error: any }>()
);

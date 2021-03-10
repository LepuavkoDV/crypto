import { createAction, props } from '@ngrx/store';

export const loadDatas = createAction(
  '[Data] Load Datas'
);

export const loadDatasSuccess = createAction(
  '[Data] Load Datas Success',
  props<{ data: any }>()
);

export const loadDatasFailure = createAction(
  '[Data] Load Datas Failure',
  props<{ error: any }>()
);

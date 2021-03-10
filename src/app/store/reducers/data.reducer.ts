import { createReducer, on } from '@ngrx/store';
import { IData } from '../../types/idata';
import { loadDataSuccess } from '../actions/data.actions';

export const dataFeatureKey = 'data';

export interface DataState {
  data: IData[];
}

export const initialState: DataState = {
  data: [],
};

export const reducer = createReducer(
  initialState,
  on(loadDataSuccess, (state, { data }) => ({ ...state, data }))
);


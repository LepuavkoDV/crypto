import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataState, dataFeatureKey } from '../reducers/data.reducer';

export const selectData = createSelector(
  createFeatureSelector<DataState>(dataFeatureKey),
  state => state.data,
);

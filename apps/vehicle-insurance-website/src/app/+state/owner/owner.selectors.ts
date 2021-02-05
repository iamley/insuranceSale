import { createFeatureSelector, createSelector } from '@ngrx/store';

import { communesAdapter } from './communes/communes.reducer';
import { State, OwnerPartialState, OWNER_FEATURE_KEY } from './owner.reducer';

export const getOwnerState = createFeatureSelector<
  OwnerPartialState,
  State
  >(OWNER_FEATURE_KEY);

const communesEntitySelector = communesAdapter.getSelectors();

export const getAllCommunes = createSelector(
  getOwnerState,
  (state: State) => communesEntitySelector.selectAll(state.communes)
);

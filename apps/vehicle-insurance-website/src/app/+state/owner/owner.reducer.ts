import { ActionReducerMap } from "@ngrx/store";

import * as fromCommunes from './communes/communes.reducer';
import { LicensePlatePartialState } from '../license-plate/license-plate.reducer';

export const OWNER_FEATURE_KEY = 'owner';

export interface State {
  communes: fromCommunes.State;
}

export interface OwnerPartialState extends LicensePlatePartialState {
  readonly [OWNER_FEATURE_KEY]: State
}

export const reducers: ActionReducerMap<State> = {
  communes: fromCommunes.reducer
}

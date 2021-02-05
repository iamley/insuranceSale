import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  WIZARD_FEATURE_KEY,
  State,
  WizardPartialState,
  wizardAdapter,
} from './wizard.reducer';

// Lookup the 'Wizard' feature state managed by NgRx
export const getWizardState = createFeatureSelector<WizardPartialState, State>(
  WIZARD_FEATURE_KEY
);

const { selectAll } = wizardAdapter.getSelectors();

export const getAllWizard = createSelector(getWizardState, (state: State) =>
  selectAll(state)
);

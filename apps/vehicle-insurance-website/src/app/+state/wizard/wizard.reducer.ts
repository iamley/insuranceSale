import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as WizardActions from './wizard.actions';
import { WizardEntity } from './wizard.models';

export const WIZARD_FEATURE_KEY = 'wizard';

export interface State extends EntityState<WizardEntity> {}

export interface WizardPartialState {
  readonly [WIZARD_FEATURE_KEY]: State;
}

export const wizardAdapter: EntityAdapter<WizardEntity> = createEntityAdapter<WizardEntity>();

export const initialState: State = wizardAdapter.getInitialState({
  ids: [0, 1, 2],
  entities: {
    0: {
      title: 'Ingreso Patente',
      isActivate: true
    },
    1: {
      title: 'Datos',
      isActivate: false
    },
    2: {
      title: 'Pago',
      isActivate: false
    }
  }
});

const wizardReducer = createReducer(
  initialState,
  on(WizardActions.onActivateStep, (state, {step}) => {
    return wizardAdapter.updateOne(step, state)
  }),
  on(WizardActions.onInactivateStep, (state, {step}) => {
    return wizardAdapter.updateOne(step, state)
  }),
  on(WizardActions.resetSteps, (state, {steps}) => {
    return wizardAdapter.updateMany(steps, state)
  })
);

export function reducer(state: State | undefined, action: Action) {
  return wizardReducer(state, action);
}

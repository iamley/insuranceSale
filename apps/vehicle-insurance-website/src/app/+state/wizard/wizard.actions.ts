import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { WizardEntity } from './wizard.models';

export const onActivateStep = createAction(
  '[Wizard] Activate Step',
  props<{ step: Update<WizardEntity> }>()
);

export const onInactivateStep = createAction(
  '[Wizard] Inactivate Step',
  props<{ step: Update<WizardEntity> }>()
);

export const resetSteps = createAction(
  '[Wizard] Reset Steps',
  props<{ steps: Update<WizardEntity>[] }>()
);

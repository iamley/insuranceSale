import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as CommunesActions from './communes.actions';
import { CommuneService } from '../../../core/services/commune.service';

@Injectable()
export class CommunesEffects {
  loadCommunes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommunesActions.loadCommunesByName),
      switchMap(({ search }) => this._communeService.getCommunes(`communes/${search}`)
        .pipe(
          map(communes => CommunesActions.loadCommunesSuccess({ communes })),
          catchError(error => of(CommunesActions.loadCommunesFailure(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private _communeService: CommuneService
  ) {
  }
}

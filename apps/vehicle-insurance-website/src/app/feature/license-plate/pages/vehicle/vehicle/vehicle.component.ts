import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription, zip } from 'rxjs';
import { first, flatMap, take, tap } from 'rxjs/operators';

import { WizardSteps } from '@vehicle-insurance-website/ui/form-wizard/wizard-steps';
import * as YearVehicleModelActions
  from '@vehicle-insurance-website/+state/vehicle/year-vehicle-models/year-vehicle-models.actions';
import { loadYearVehicleModels } from '@vehicle-insurance-website/+state/vehicle/year-vehicle-models/year-vehicle-models.actions';

import { VehicleFacade } from '@vehicle-insurance-website/+state/vehicle/vehicle.facade';
import * as wizardActions from '@vehicle-insurance-website/+state/wizard/wizard.actions';
import * as MakeVehiclesActions from '@vehicle-insurance-website/+state/vehicle/make-vehicle/make-vehicle.actions';
import * as ModelVehiclesActions from '@vehicle-insurance-website/+state/vehicle/model-vehicle/model-vehicle.actions';
import * as TypeVehicleActions from '@vehicle-insurance-website/+state/vehicle/type-vehicle/type-vehicle.actions';
import * as LicensePlateActions from '@vehicle-insurance-website/+state/license-plate/license-plate.actions';
import {
  MakeVehicleEntity,
  ModelVehicleEntity,
  VehicleTypeEntity,
  YearVehicleModelEntity
} from '@mfe-vehicle-insurance/shared/models';


@Component({
  selector: 'viws-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit, OnDestroy {

  licensePlateVehicleForm = this.fb.group({
    key: [''],
    make: this.fb.group({
      id: [''],
      name: ['']
    }),
    model: this.fb.group({
      id: [''],
      name: ['']
    }),
    type: this.fb.group({
      id: [''],
      code: [''],
      type: ['']
    }),
    year: this.fb.group({
      id: [''],
      year: ['']
    }),
    engine_number: ['']
  });

  typeVehicles$ = this._vehicleFacade.allTypeVehicles$;
  makeVehicles$ = this._vehicleFacade.allMakeVehicles$;
  modelVehicles$ = this._vehicleFacade.allModelVehicles$;
  modelYearsVehicle$ = this._vehicleFacade.allYearVehicleModels$;

  licensePlateVehicleSubscribe: Subscription;
  updateLicensePlateVehicleInfoSubscribe: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _vehicleFacade: VehicleFacade
  ) {
  }

  onSubmit() {
    this.updateLicensePlateVehicleInfoSubscribe = zip(
      this._vehicleFacade.typeVehicleSelected$,
      this._vehicleFacade.modelVehicleSelected$,
      this._vehicleFacade.makeVehicleSelected$,
      this._vehicleFacade.yearVehicleModelsSelected$
    ).pipe(
      tap((tuple4) => this.updateLicensePlateVehicleInfo(tuple4))
    ).subscribe();

    // Next step complete owner data
    this.router.navigateByUrl('entel/soap/datos/propietario')
      .then();
  }

  private updateLicensePlateVehicleInfo(tuple4: [VehicleTypeEntity, ModelVehicleEntity, MakeVehicleEntity, YearVehicleModelEntity]) {
    const { type, model, make, year, engine_number } = this.licensePlateVehicleForm.value;

    const type2 = !tuple4[0] ? type : tuple4[0];
    const model2 = !tuple4[1] ? model : tuple4[1];
    const make2 = !tuple4[2] ? make : tuple4[2];
    const year2 = !tuple4[3] ? year : tuple4[3];

    this._vehicleFacade.dispatch(LicensePlateActions.updateLicensePlateVehicleInfo({
      vehicle: {
        type: type2,
        make: make2,
        model: model2,
        year: year2,
        engine_number
      }
    }));
  }

  goBack() {
    this.onChangeWizardStep(WizardSteps.DATA, false);
    this._vehicleFacade.dispatch(LicensePlateActions.resetLicensePlateInfo());
    this.router.navigateByUrl('entel/soap').then();
  }

  private onChangeWizardStep(stepId: number, isActivate: boolean) {
    this._vehicleFacade.dispatch(wizardActions.onActivateStep({
      step: { id: stepId, changes: { id: stepId, isActivate: isActivate } }
    }));
  }

  onLoadMakeVehiclesByTypeVehicle(typeId?: string | number) {
    this._vehicleFacade.dispatch(MakeVehiclesActions.loadMakeVehiclesByTypeVehicle({
      typeVehicleId: !typeId ? this.licensePlateVehicleForm.get('type.id').value : typeId
    }));
  }

  onLoadModelVehiclesByTypeVehicle(makeVehicleType?: string | number) {
    this._vehicleFacade.dispatch(ModelVehiclesActions.loadModelVehicleByMakeVehicle({
      makeVehicleId: !makeVehicleType ? this.licensePlateVehicleForm.get('make.id').value : makeVehicleType
    }));
  }

  onChangeMakeVehicle() {
    this._vehicleFacade.dispatch(MakeVehiclesActions.changeMakeVehicleSelected({
      selectedId: this.licensePlateVehicleForm.get('make.id').value
    }));
  }

  onChangeModelVehicle() {
    this._vehicleFacade.dispatch(ModelVehiclesActions.changeModelVehicleSelected({
      selectedId: this.licensePlateVehicleForm.get('model.id').value
    }));
  }

  onChangeYear() {
    this._vehicleFacade.dispatch(YearVehicleModelActions.changeYearVehicleModelSelected({
      selectedId: this.licensePlateVehicleForm.get('year.id').value
    }));
  }

  onChangeTypeVehicle() {
    this._vehicleFacade.dispatch(TypeVehicleActions.changeTypeVehicleSelected({
      selectedId: this.licensePlateVehicleForm.get('type.id').value
    }));
  }

  typeVehicleIdListener() {
    return this.licensePlateVehicleForm?.get('type.id').valueChanges.pipe(
      tap(() => this.licensePlateVehicleForm.get('make.id').setValue('')),
      tap(() => this.licensePlateVehicleForm.get('model.id').setValue(''))
    );
  }

  makeVehicleIdListener() {
    return this.licensePlateVehicleForm?.get('make.id').valueChanges.pipe(
      tap(() => this.licensePlateVehicleForm.get('model.id').setValue(''))
    );
  }

  ngOnInit() {
    this.onChangeWizardStep(WizardSteps.DATA, true);
    this._vehicleFacade.dispatch(loadYearVehicleModels());

    this.licensePlateVehicleSubscribe = this._vehicleFacade.licensePlateVehicle$
      .pipe(
        take(2),
        tap((licensePlateVehicle) =>
          this.licensePlateVehicleForm.patchValue(licensePlateVehicle)
        ),
        first(),
        // Initial load of make vehicle by type vehicle.
        tap(({ type }) => this.onLoadMakeVehiclesByTypeVehicle(type.id)),
        // Initial load of model vehicle by make vehicle.
        tap(({ make }) => this.onLoadModelVehiclesByTypeVehicle(make.id)),
        // Create listener for changes type-vehicle form control
        flatMap(() => this.typeVehicleIdListener()),
        // Create listener for changes make-vehicle form control
        flatMap(() => this.makeVehicleIdListener())
      ).subscribe();
  }

  ngOnDestroy() {
    this.onChangeWizardStep(WizardSteps.DATA, false);
    this.licensePlateVehicleSubscribe?.unsubscribe();
    this.updateLicensePlateVehicleInfoSubscribe?.unsubscribe();
  }
}

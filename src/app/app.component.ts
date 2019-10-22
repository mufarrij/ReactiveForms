import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { responsibleUnits$, perfomringUnits$, customers$, agreements$, services$ } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  patientForm: FormGroup;

  responsibleUnits = responsibleUnits$;
  customers = customers$;
  agreements = agreements$;
  services = services$;

  filterdPerfomringUnits: Observable<any>;
  filteredAgreements: Observable<any>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      visitDate: ['', Validators.required],
      service: ['', Validators.required],
      performingUnit: [''],
      responsibleUnit: [''],
      customer: [''],
      agreement: ['']
    });

    this.filterdPerfomringUnits = this.patientForm.valueChanges.pipe(
      map(value => value.responsibleUnit),
      distinctUntilChanged(),
      switchMap(responsibleUnit =>
        perfomringUnits$.pipe(
          map(perfomringUnits => perfomringUnits.filter(unit => unit.responsibleUnit === responsibleUnit))))
    );

    this.filteredAgreements = this.patientForm.valueChanges.pipe(
      distinctUntilChanged((a, b) => a.visitDate === b.visitDate && a.responsibleUnit === b.responsibleUnit &&
        a.customer === b.customer),
      switchMap(value => agreements$.pipe(
        map(agreements => agreements.filter(agreement =>
          agreement.customer.some(customer =>  customer === value.customer) &&
          agreement.responsibleUnit.some(responsibleUnit => responsibleUnit === value.responsibleUnit)))
        ))
      );

    this.patientForm.valueChanges.pipe(
      distinctUntilChanged((a, b) => a.responsibleUnit === b.responsibleUnit)
    ).subscribe(a => console.log(a));
  }

  onSubmit() {
  }
}

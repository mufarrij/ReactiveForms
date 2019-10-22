import { of } from 'rxjs';

export const responsibleUnits$ = of(['Resonsible Unit 1', 'Resonsible Unit 2', 'Resonsible Unit 3']);

export const perfomringUnits$ = of([
  { responsibleUnit: 'Resonsible Unit 1', name: 'Perfmint Unit 1' },
  { responsibleUnit: 'Resonsible Unit 1', name: 'Perfmint Unit 2' },
  { responsibleUnit: 'Resonsible Unit 1', name: 'Perfmint Unit 3' },
  { responsibleUnit: 'Resonsible Unit 2', name: 'Perfmint Unit 4' },
  { responsibleUnit: 'Resonsible Unit 2', name: 'Perfmint Unit 5' },
  { responsibleUnit: 'Resonsible Unit 2', name: 'Perfmint Unit 6' },
  { responsibleUnit: 'Resonsible Unit 3', name: 'Perfmint Unit 7' },
  { responsibleUnit: 'Resonsible Unit 3', name: 'Perfmint Unit 8' },
  { responsibleUnit: 'Resonsible Unit 3', name: 'Perfmint Unit 9' },
  { responsibleUnit: 'Resonsible Unit 3', name: 'Perfmint Unit 10' }
]);

export let service$ = of([
  'Serice 1',
  'Serice 2'
]);

export let customers$ = of([
  { id: 'Stockholm' },
  { id: 'Kalmar' },
  { id: 'Kronberg' },
  { id: 'Uppsala' },
  { id: 'Linkoping' }
]);

export let services$ = of([
    'service1' ,
   'service2' ,
    'service3' ,
]);

export let agreements$ = of([
  {
    id: 'agr1',
    customer: ['Kalmar', 'Stockholm', 'Uppsala'],
    responsibleUnit: ['Resonsible Unit 1', 'Resonsible Unit 2'],
    validFrom: '2019-01-01',
    validTo: '2919-01-01'
  },
  {
    id: 'agr2', customer: ['Kalmar', 'Stockholm'],
    responsibleUnit: ['Resonsible Unit 1', 'Resonsible Unit 2'],
    validFrom: '2019-01-01',
    validTo: '2919-01-01'
  },
  {
    id: 'agr3',
    customer: ['Kronberg', 'Stockholm', 'Uppsala'],
    responsibleUnit: ['Resonsible Unit 1'],
    validFrom: '2019-01-01',
    validTo: '2919-01-01'
  },
  {
    id: 'agr4',
    customer: ['Kalmar', 'Stockholm'],
    responsibleUnit: ['Resonsible Unit 1', 'Resonsible Unit 2'],
    validFrom: '2019-01-01', validTo: '2919-01-01'
  },
  {
    id: 'agr5',
    customer: ['Kalmar', 'Linkoping'],
    responsibleUnit: ['Resonsible Unit 2'],
    validFrom: '2019-01-01',
    validTo: '2919-01-01'
  }
]);

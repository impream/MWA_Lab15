import { Injectable } from '@angular/core';

export type StudentType = {id: string, name: string, email: string};
@Injectable()
export class StudentServiceService {
  current:StudentType;
  _data: StudentType[] = [
  {id: '1', name: 'Prem', email: 'prem@gmail.com'},
  	{id: '2', name: 'Krishna', email: 'im@krish.com'},
  	{id: '3', name: 'Nakarmi', email: 'nakamri@gmial.com'},
  	{id: '4', name: 'PK', email: 'pk@gmail.com'}
  ];

  constructor() { }

  get data() {
  	return this._data;
  }

  getData():StudentType[] {
  	return this._data;
  }

  setCurrent(id) {
  	this.current = this._data.find(x => x.id === id);
  	return this.current;
  }
}

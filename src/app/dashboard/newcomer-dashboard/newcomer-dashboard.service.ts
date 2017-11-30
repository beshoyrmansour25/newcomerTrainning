import { HttpClient } from '@angular/common/http';
import { INewcomer } from './../../shared/interfaces/i-newcomer';
import { Observable } from 'rxjs/Observable';
import { API_Routes } from './../../shared/constants/service-config';
import { Injectable } from '@angular/core';

@Injectable()
export class NewcomerDashboardService {

  constructor(private httpClient: HttpClient) { }
  getNewcomers() {
    return this.httpClient.get(API_Routes.newcomers.getNewcomers) as Observable<INewcomer[]>;
  }
  getNewcomer(id: number) {
    return this.httpClient.get(API_Routes.newcomers.getNewcomer(id)) as Observable<INewcomer[]>;
  }
  deleteNewcomer(id: number) {
    return this.httpClient.delete(API_Routes.newcomers.getNewcomer(id)) as Observable<INewcomer[]>;
  }
  editNewcomer(id: number, newcomer: INewcomer) {
    return this.httpClient.put(API_Routes.newcomers.editNewcomer(id), newcomer) as Observable<INewcomer[]>;
  }
  addNewcomer(newcomer: INewcomer) {
    return this.httpClient.post(API_Routes.newcomers.getNewcomers, newcomer) as Observable<INewcomer[]>;
  }
}

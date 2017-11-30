import { INewcomer } from './../../shared/interfaces/i-newcomer';
import { Observable } from 'rxjs/Observable';
import { API_Routes } from './../../shared/constants/service-config';
import { ICapability } from './../../shared/interfaces/i-capability';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ManagerDashboardService {
  private capabilities: ICapability[] = [];
  private selectedCapabilityIndex: number = 0;
  constructor(private httpClient: HttpClient) { }
  getCapabilities() {
    return this.httpClient.get(API_Routes.Capabilities.getCapabilities) as Observable<ICapability[]>;
  }
  getCapability(id: number) {
    return this.httpClient.get(API_Routes.Capabilities.getCapability(id)) as Observable<ICapability[]>;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICapability[]> {
    return this.getCapabilities();
  }

  addNewCapability(capability: ICapability): Observable<ICapability> {
    return this.httpClient.post(API_Routes.Capabilities.postCapabilities, capability, { observe: 'response' })
      .map((response: HttpResponse<ICapability>) => {
        console.log('Response: ', response);
        if (response.status === 200) {
          console.log('SUCCESS');
        }
        return response.body;
      });
  }
  addNewcomer(newcomer: INewcomer) {
    return this.httpClient.post(API_Routes.newcomers.postNewcomer, newcomer, { observe: 'response' })
      .subscribe((response: HttpResponse<INewcomer>) => {
        console.log('Response: ', response);
        if (response.status.toString().includes('2')) {
          console.log('SUCCESS');
          alert('SUCCESS');
        }
        return response.body;
      });
  }

}

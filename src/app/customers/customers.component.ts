import { Component, OnInit } from '@angular/core';
import { HttpModuleService } from '../services/http-module.service';

import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent implements OnInit {

  title: string = 'Customers';
  index: number;
  customer: Customer = {} as Customer;
  customers: Customer[];
  modalTitle: string;

  constructor(private http: HttpModuleService) { }

  openForm(action: string, customer?: Customer, index?: number): void {
    this.modalTitle = action;
    this.index = index;
    this.customer = Object.assign({}, customer || ({} as Customer)); 
  }

  saveCustomer(): void {
    if (this.modalTitle == 'Edit') this.http.put('/Customer/',this.customer).subscribe(res=>{
      this.customers[this.index] = res;
    });
    if (this.modalTitle == 'Add') this.http.post('/Customer/',this.customer).subscribe(res=>{
      this.customers.push(res);
    });
  }

  deleteCustomer(id: number, index: number): void {
    this.http.delete('/Customer/', id).subscribe(res => {
      if (res == null) this.customers.splice(index, 1);
    });
  }

  ngOnInit() {
    this.http.get('/Customer/').subscribe(res => {
      this.customers = res;
    });
  }

}

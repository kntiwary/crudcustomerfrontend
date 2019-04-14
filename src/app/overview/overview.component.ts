import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpModuleService } from '../services/http-module.service';
import {Customer} from '../models/customer';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpModuleService) { }
  error;
  customer:Customer = {} as Customer;
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.http.get('/Customer/'+params.id).subscribe(res=> {
        if (!res.detail)
        this.customer=res;
        else this.error = res.detail;
      });
    })
  }

}

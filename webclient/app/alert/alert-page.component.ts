/**
 * Copyright 2016,2019 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, OnInit } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import { AlertListComponent } from './alert-list/alert-list.component';

@Component({
  moduleId: module.id,
  selector: 'fmdash-fleet-alert',
  templateUrl: 'alert-page.component.html',
})

export class AlertPageComponent implements OnInit {
  private extent: number[];
  private filterProp = '';
  private filterValue = '';
  private includeClosed = true;
  private showInput = true;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    var extent: any, status: any;
    this.route.params.forEach((params: Params) => {
      extent = extent || params['extent'];// extent is comma-separated list of min_lng, min_lat, max_lng, max_lat
      status = status || params['status'];
    });

    if (extent) {
      if (extent.length == 4) {
        this.extent = extent;
      } else {
        var splited = extent.split(",");
        if (splited.length === 4 && splited.every((n) => { return !isNaN(n) })) {
          this.extent = splited;
        } else {
          this.extent = undefined;
        }
      }
    } else {
      this.extent = undefined;
    }

    if (status === 'critical') {
      this.filterProp = 'severity';
      this.filterValue = 'High'; // FIXME: tentative. "Critical|High" is expected
      this.includeClosed = false;
      this.showInput = false;
    } else if (status === 'troubled') {
      this.filterProp = 'all';
      this.filterValue = 'all'; // assign temp value to hide control panels
      this.includeClosed = false;
      this.showInput = false;
    } else {
      this.filterProp = '';
      this.filterValue = '';
      this.includeClosed = true;
      this.showInput = true;
    }
  }
}

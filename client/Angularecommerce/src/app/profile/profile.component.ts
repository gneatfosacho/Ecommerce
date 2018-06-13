//Profile  component.ts - Type Script file that contains code to render profile details to elearning application

//including the required files and services
import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

//component specific details
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

//exporting Profile component for reuse 
export class ProfileComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}

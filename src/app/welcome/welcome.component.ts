import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private username: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('here in welcome');
    this.username = this.route.snapshot.paramMap.get['username'];
  }

}

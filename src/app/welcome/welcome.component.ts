import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeService} from "../service/welcome-service/welcome.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private username: string;
  private message: string;

  constructor(private route: ActivatedRoute, private welcomeService: WelcomeService) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['username'];
  }

  generateWelcomeMessage() {
    console.log(this.username);
    this.welcomeService.getWelcomeMessage(this.username).subscribe(
      (resp) => {
        console.log('response --> ' + resp);
        this.message = resp;
    });
  }
}

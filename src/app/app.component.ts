import {Component, ViewEncapsulation} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ToDoUserPortal';
  private showCommonElement: boolean;

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '') {
          this.showCommonElement = false;
        } else {
          // console.log("NU")
          this.showCommonElement = true;
        }
      }
    });
  }
}

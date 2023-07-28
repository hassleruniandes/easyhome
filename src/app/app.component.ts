import { Component } from '@angular/core';
import { GoogleTagManagerService } from "angular-google-tag-manager";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'easyhome';
  constructor(private gtmService: GoogleTagManagerService) {}
}

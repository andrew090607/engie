import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['../../app.component.css']
})
export class DarkmodeComponent implements OnInit {

    constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
  }

  changeTheme() {
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }

}
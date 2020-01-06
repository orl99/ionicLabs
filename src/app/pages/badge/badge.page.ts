import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {
  // Example array
  items = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }

}

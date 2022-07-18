import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  // items: NbMenuItem[] = [
  //   {
  //     title: 'Profile',
  //     expanded: true,
  //     badge: {
  //       text: '30',
  //       status: 'primary',
  //     },
  //     children: [
  //       {
  //         title: 'Messages',
  //         badge: {
  //           text: '99+',
  //           status: 'danger',
  //         },
  //       },
  //       {
  //         title: 'Notifications',
  //         badge: {
  //           dotMode: true,
  //           status: 'warning',
  //         },
  //       },
  //       {
  //         title: 'Emails',
  //         badge: {
  //           text: 'new',
  //           status: 'success',
  //         },
  //       },
  //     ],
  //   },
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}

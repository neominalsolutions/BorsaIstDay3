import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITodoViewModel } from './todo.resolver';

@Component({
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  data!: ITodoViewModel;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data['todoview'];
    // activated route üzerinden veriyi çektik.
    console.log('data', this.data);
  }
}

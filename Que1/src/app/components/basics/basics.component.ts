import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // q1
  Roll_No: number = 11;
  Name: string = "Charmi Modi";
  dob: Date = new Date('2001-11-26');

  // q2
  fruits: Array<string> = ['Apple', 'Orange', 'Mango', 'Graps'];

  // q3
  selectedNum = {};
  num = [
    { id: 1, name: 'One' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' },
    { id: 4, name: 'four' },
    { id: 5, name: 'five' }
  ]

  popUp() {
    alert(this.selectedNum);
  }

  // q4
  selectedInput = '';
  input: Array<string> = ["textBox", "textArea"];

}

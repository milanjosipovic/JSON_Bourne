import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  components = [
    {id : 1, name: 'Form', imageUrl: 'https://images.pexels.com/photos/417082/pexels-photo-417082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    {id : 2, name: 'Cards', imageUrl: 'https://images.pexels.com/photos/2958498/pexels-photo-2958498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    {id : 3, name: 'Tabs', imageUrl: 'https://images.pexels.com/photos/417082/pexels-photo-417082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    {id : 4, name: 'Routing', imageUrl: 'https://images.pexels.com/photos/2958498/pexels-photo-2958498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    {id : 5, name: 'Services', imageUrl: 'https://images.pexels.com/photos/417082/pexels-photo-417082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
  ];
  ngOnInit() {
  }

}

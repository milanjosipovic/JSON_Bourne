import { Component, OnInit } from '@angular/core';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  allLibraries = [];
  libraryName:string;
  libraryUrl:string;
  libraryDescription:string;

  constructor() { }

  ngOnInit() {
  }

  handleFormSubmit(data){
    console.log(data);

    if(data.status=='VALID'){
      this.allLibraries.push({libraryName: data.value.libraryName, libraryUrl: data.value.libraryURL,libraryDescription: data.value.libraryDescription})
    }else{
      console.log('Enter data');
    }
    
    console.log(this.allLibraries);
    
  }

}

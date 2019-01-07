import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-fileuploder',
  templateUrl: './fileuploder.component.html',
  styleUrls: ['./fileuploder.component.css']
})
export class FileuploderComponent implements OnInit {
  constructor(private http:Http) { }
  uplodefile(event){
    let elemnt = event.target;
    if(elemnt.files.length>0){
    console.log(elemnt.files[0]);
    let formdata= new FormData();
    formdata.append('file',elemnt.files[0]);
    this.http.post('http://localhost/ANGULAR_PHP/script.php',formdata)
    .subscribe((data)=>{
      console.log('we get some data',data);
    },(error)=>{
      console.log('Error',error);
    })
    }
  }
  ngOnInit() {
  }

}

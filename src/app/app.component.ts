import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-application';
  public data:any = []
  constructor(private http: HttpClient) {
    
  }
 
  getData(){
    const url ='http://localhost:3001/claim/submission?limit=20&select=data'
    
   
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }
}

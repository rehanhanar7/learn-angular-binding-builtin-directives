import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .online{
      color:white;
      padding: 1vw;
    }
  `]
})
export class AppComponent {
  serverId: number = 0;
  serverString: String = 'Amazon Text';
  name = 'Angular ' + VERSION.major;
  showInputDataFlag = false;
  

  constructor(){
    this.generateStatus();
  }

  //event data binding
  amatext = 'i am initial text';
  onClickMethod = () => {
      this.amatext = 'am changed when the user click on me';
      this.showInputDataFlag = true;
  }

  //$event example
  onupdateeverykeystroke = (event: Event) => {
    console.log((<HTMLInputElement>event.target).value);  //display the value   
  }

  //two way data binding
  datavariablename = 'am pre set text';

  status = '';
  generateStatus () {
    this.status = Math.random() > 0.5 ? 'online': 'offline' 
  }
  getcolor(){
    return this.status == 'online' ? 'green' :'red';
  }

  //ngfor
  datas = ['Rehan', 'Hanar', 'Karthik'];
  addData = () => {
    this.datas.push(this.datavariablename);
  }

}

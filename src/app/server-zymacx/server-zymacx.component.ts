import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-zymacx',
  templateUrl: './server-zymacx.component.html',
  styleUrls: ['./server-zymacx.component.css']
})
export class ServerZymacxComponent implements OnInit {

  getString: string = 'vzy';
  serverStatus = 'offline';
  isCreateBtnPressed = false;
  serverName = 'Testserver';
  servers = ['Testserver01', 'Testserver02'];
  creationStatus = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  onCreateServer() {
    this.isCreateBtnPressed = true;
    this.servers.push(this.serverName)
    this.creationStatus = 'server was created! Name is ' + this.serverName;
  }
}

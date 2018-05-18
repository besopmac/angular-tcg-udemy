import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', (carregando componente como atributo)
  // selector: '.app-servers',  (carregando componente como classe)
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewService = false;
  serverCreationStatus = 'No server was created yet.';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Machinna', 'Apollo'];

  constructor() {
    setTimeout(() => {
      this.allowNewService = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

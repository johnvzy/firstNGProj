import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
    readyReload = false;
    serverStatus = "offline";
    getString: string = 'john'
    buttonIsClick: boolean = false
    serverArr = [];
    serverNum = 0;

    constructor() {
        // setTimeout(() => {
        //     this.readyReload = true
        // }, 2000)
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";

    }
    ngOnInit(): void {
    }

    onClickReady(): void {
        this.serverStatus = "reloaded!"
    }

    onUpdateOnTypeText(event: any) {
        console.log(event)
        this.getString = (<HTMLInputElement>event.target).value
    }

    onGetInputText() {
        return this.getString + " is clicked the button!";
    }

    // runRandom() {
    //     this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    // }

    onGetRandomColor() {
        return this.serverStatus == "online" ? "green" : "red";
    }

    addServer() {
        this.serverNum++;
        this.serverArr.push("Another Server " + this.serverNum);
    }

    removeServer(index: number) {
        this.serverArr.splice(index, 1);
    }
}
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // () no final do emmiter chama o construtor do event emmiter
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  serverElements = [];
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput : ElementRef;

  // Getting acces to the template & DOM with @ViewChild

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(inputName: HTMLInputElement) {
    console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({
      serverName: inputName.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(inputName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: inputName.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}

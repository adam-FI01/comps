import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();


ngOnInit() {
  document.body.appendChild(this.elementRef.nativeElement)
}

constructor(private elementRef: ElementRef) {}


ngOnDestroy() {
  this.elementRef.nativeElement.remove()
}

onCloseClick() {
  this.close.emit();
}

}

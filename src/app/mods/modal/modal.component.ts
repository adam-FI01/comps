import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

ngOnInit() {

  document.body.appendChild(this.elementRef.nativeElement)

}

constructor(private elementRef: ElementRef) {

}


}

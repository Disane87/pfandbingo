import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[dragAndDrop]'
})
export class DraganddropDirective {

  @Output() dragLeave = new EventEmitter<any>();
  @Output() dragOver = new EventEmitter<any>();
  @Output() dropped = new EventEmitter<any>();

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log('dragover');
    this.dragLeave.emit(event.dataTransfer)
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log('dragleave');
    this.dragOver.emit(event.dataTransfer)
  }

  @HostListener('drop', ['$event']) public onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log('drop');

    this.dropped.emit(event.dataTransfer)
  }

}

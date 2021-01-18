import { Directive, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Directive({
  selector: 'form'
})
export class FormSubmitDirective {
  submit$ = fromEvent(this.element, 'submit')
    .pipe(tap(() => {
      if (this.element.classList.contains('submitted') === false) {
        this.element.classList.add('submitted');
      }
    }), shareReplay(1))

  constructor(private host: ElementRef<HTMLFormElement>) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    debugger;
  }

  get element() {
    return this.host.nativeElement;
  }
}
import { ComponentFactoryResolver, ComponentRef, Directive, Host, Input, Optional, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { EMPTY, merge, Observable } from 'rxjs';
import { ControlErrorComponent } from '../control-error/control-error.component';
import { ControlErrorContainerDirective } from './control-error-container.directive';
import { FormSubmitDirective } from './form-submit.directive';


/** Adapted from https://netbasal.com/make-your-angular-forms-error-messages-magically-appear-1e32350b7fa5 */
@UntilDestroy()
@Directive({
    selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirective {
    ref: ComponentRef<ControlErrorComponent>;
    container: ViewContainerRef;
    submit$: Observable<Event>;
    @Input() customErrors = {};

    private errors = {
        required: (error) => `This field is required`,
        minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`,
        email: () => `This field needs an email address`,
        mustMatch: () => `Passwords must be the same`
    }

    constructor(
        private vcr: ViewContainerRef,
        private resolver: ComponentFactoryResolver,
        @Optional() controlErrorContainer: ControlErrorContainerDirective,
        // @Inject(FORM_ERRORS) private errors,
        @Optional() @Host() private form: FormSubmitDirective,
        private controlDir: NgControl) {
        this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
        this.submit$ = this.form ? this.form.submit$ : EMPTY;
    }

    ngOnInit() {
        merge(
            this.submit$,
            // this.control.valueChanges,
            this.control.statusChanges
        ).pipe(
            untilDestroyed(this)).subscribe((v) => {
                const controlErrors = this.control.errors;
                if (controlErrors) {
                    const firstKey = Object.keys(controlErrors)[0];
                    const getError = this.errors[firstKey];
                    const text = this.customErrors[firstKey] || getError(controlErrors[firstKey]);
                    this.setError(text);
                } else if (this.ref) {
                    this.setError(null);
                }
            })
    }

    get control() {
        return this.controlDir.control;
    }

    setError(text: string) {
        if (!this.ref) {
            const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
            this.ref = this.container.createComponent(factory);
        }

        this.ref.instance.text = text;
    }

    ngOnDestroy() { }

}
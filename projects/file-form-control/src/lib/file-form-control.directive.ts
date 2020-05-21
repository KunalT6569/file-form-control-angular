import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: 'easy-file-form-control',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileFormControlDirective,
      multi: true,
    },
  ],
})
export class FileFormControlDirective implements ControlValueAccessor {
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  file: File | null = null;
  onChange: Function;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
  }

  constructor(private host: ElementRef<HTMLInputElement>) {}

  writeValue(value: null) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {}
}

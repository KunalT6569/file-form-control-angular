import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      file: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
    console.log(this.formGroup);
  }
}

# file-form-control-angular

By default, Angular does not supports the following:

```
<form [ngForm]="formGroup">
    <input type="file" formControlName="file">

...
```

This package allows this functionality.

## Installation

Steps to use:
In `app.module.ts` file,

#### Step 1: Import the module

``import { FileFormControlModule } from 'file-form-control-angular';
``

#### Step 2: Add the module to imports

```
...
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileFormControlModule // <- module imported
  ],
...
```

#### Step 3: Usage

##### Create a form group with a form control for file,

```
formGroup = new FormGroup({
      name: new FormControl(''),
      file: new FormControl(null, Validators.required), // for file
});
```

##### Create a corresponding form in HTML

```
<form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="file" />

  <input value="Submit" type="submit" />
</form>
```

##### Making ``input[type="file"]`` a form control

```
<form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input
    type="file"

    easy-file-form-control  <- add this directive
    [formGroup]="formGroup" <- add this form group reference as input
    controlName="file"      <- set the right side string the same 
                               name as of formGroup's file control which
                               is "file" in this case matching the 
                               formGroup.file
  />

  <input value="submit" type="submit" />
</form>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

//共用 validators
const lenValidator = Validators.compose([
  Validators.required,
  Validators.minLength(10),
]);

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  form = this.fb.group(
    {
      title: this.fb.control('', {
        validators: [Validators.required],
      }),
      description: this.fb.control('description'),
      body: this.fb.control('body', {
        validators: lenValidator,
      }),
      tags: this.fb.array([
        this.fb.control('HTML'),
        this.fb.control('CSS'),
        this.fb.control('JavaScript'),
      ]),
    },
    {
      updateOn: 'submit',
    }
  );

  constructor(private fb: FormBuilder) {}

  /**增加 tag */
  addTag(tag: string) {
    // Angular 14
    this.form.controls.tags.push(this.fb.control(tag));
    // Angular 13
    // (this.form.get('tags') as FormArray).push();
  }

  /**移除 tag */
  remoteTag(index: number) {
    this.form.controls.tags.removeAt(index);
  }

  /** 新增表單 */
  createForm(): void {
    console.log(this.form.valid);
    console.log(this.form.controls.title.errors);
  }
}

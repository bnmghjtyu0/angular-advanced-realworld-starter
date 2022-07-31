import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form = this.fb.group({
    title: this.fb.control(''),
    description: this.fb.control('description'),
    body: this.fb.control('body'),
    tags: this.fb.array([
      this.fb.control('HTML'),
      this.fb.control('CSS'),
      this.fb.control('JavaScript'),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

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
}

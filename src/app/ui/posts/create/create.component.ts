import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';

//共用 validators
const bodyValidator = Validators.compose([
  Validators.required,
  Validators.minLength(10),
]);

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form = this.fb.group(
    {
      title: this.fb.control('', {
        validators: [Validators.required],
      }),
      description: this.fb.control('description'),
      body: this.fb.control('body'),
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

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form.controls.title.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.form.controls.body.addValidators(bodyValidator ?? []);
        this.form.controls.body.updateValueAndValidity();
      } else if (status === 'INVALID') {
        this.form.controls.body.removeValidators(bodyValidator ?? []);
        this.form.controls.body.updateValueAndValidity();
      }
    });
  }

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
    if (this.form.valid) {
      const reqBody = {
        title: this.form.value.title || '',
        body: this.form.value.body || '',
        description: this.form.value.description || '',
        tagList: (this.form.value.tags || []) as string[],
      };

      this.postService.createArticle(reqBody).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
      });
    }
  }
}

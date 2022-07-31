import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NgModel,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/login.service';

/**登入頁 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    email: 'demo@miniasp.com',
    password: '123456',
  };

  form: FormGroup = this.fb.group({
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
    }),
    password: this.fb.control('', {
      validators: [Validators.required, Validators.min(4)],
    }),
  });

  /**建構子 */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form.setValue(this.user);
  }

  /**登入 */
  login(): void {
    if (this.form.valid) {
      this.loginService.login(this.user).subscribe({
        next: (result) => {
          localStorage.setItem('token', result.user.token);
          this.route.queryParamMap.subscribe((params) => {
            const url = params.get('redirect') || '';
            this.router.navigate([url]);
          });
        },
        error: (error: HttpErrorResponse) => {
          alert(error.error.body);
        },
        complete: () => {},
      });
    }
  }
  isInvalid(control: AbstractControl, formRef: FormGroupDirective) {
    return control.invalid && (control.touched || formRef.submitted);
  }
  isValid(control: AbstractControl, formRef: FormGroupDirective) {
    return control.valid && (control.touched || formRef.submitted);
  }
}

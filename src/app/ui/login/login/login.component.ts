import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

/**登入頁 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    email: 'demo@miniasp.com',
    password: '123456',
  };

  /**建構子 */
  constructor(private router: Router, private loginService: LoginService) {}

  /**登入 */
  login(): void {
    this.loginService.login(this.user).subscribe({
      next: (result) => {
        localStorage.setItem('token', result.user.token);
        this.router.navigate(['/']);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.error.body);
      },
      complete: () => {},
    });
  }
}

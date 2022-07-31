import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';


/**登入頁 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  /**建構子 */
  constructor(private router: Router, private loginService: LoginService) {}

  /**登入 */
  login(): void {
    this.loginService
      .login({ email: 'demo@miniasp.com', password: '123456' })
      .subscribe({
        next: (result) => {
          localStorage.setItem('jwtToken', result.user.token);
          this.router.navigate(['/']);
        },
      });
  }
}

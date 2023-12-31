import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  isSubmitted = false;
  errorText = '';
  rotation = 0;
  hideNav: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      one: ['', Validators.required],
      two: ['', Validators.required],
      three: ['', Validators.required],
    });

    this.userService.loginValidation.subscribe((loginError: string) => {
      this.errorText = loginError;
    });
  }

  get fc() {
    return this.loginForm.controls;
  }

  async submit() {
    let payload = {
      userName: this.loginForm.controls['userName'].value,
      loginCode: parseInt(
        this.loginForm.controls['one'].value +
          this.loginForm.controls['two'].value.toString() +
          this.loginForm.controls['three'].value
      ),
    };

    if (
      this.loginForm.controls['one'].value === '' ||
      this.loginForm.controls['two'].value === '' ||
      this.loginForm.controls['three'].value === ''
    ) {
      this.errorText = 'Please fill in all the empty spaces';
    } else {
      try {
        this.userService.Login(payload, '');
      } finally {
        this.userService.loginStatusChanged.subscribe((loginError: string) => {
          console.log(loginError);
        });
      }
    }
  }

  onInputChanged(event: Event) {
    this.rotation += 10;
  }
}

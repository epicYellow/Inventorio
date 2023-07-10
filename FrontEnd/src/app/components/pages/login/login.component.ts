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
  rotation = 0;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      one: ['', Validators.required],
      two: ['', Validators.required],
      three: ['', Validators.required],
    });
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    let payload = {
      userName: this.loginForm.controls['userName'].value,
      loginCode: parseInt(
        this.loginForm.controls['one'].value +
          this.loginForm.controls['two'].value.toString() +
          this.loginForm.controls['three'].value
      ),
    };

    this.userService.Login(payload, '');
  }

  onInputChanged(event: Event) {
    // Update the rotation angle by 10 degrees each time the input changes
    this.rotation += 10;
  }
}

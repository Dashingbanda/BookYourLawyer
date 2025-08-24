import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isNewUser: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    // ✅ Login Form
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });

    // ✅ Register Form
    this.registerForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required],
    });
  }

  toggleForm() {
    this.isNewUser = !this.isNewUser;
  }

  login() {
    if (this.loginForm.valid) {
      console.log("Login Successful:", this.loginForm.value);
      // TODO: Replace with AuthService -> Spring Boot API call
      this.router.navigate(["/bookings"]);
    } else {
      alert("Please fill in all required fields.");
    }
  }

  register() {
    if (this.registerForm.valid) {
      if (
        this.registerForm.value.password !==
        this.registerForm.value.confirmPassword
      ) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Registration Successful:", this.registerForm.value);
      alert("Account created successfully!");
      this.isNewUser = false; // ✅ Switch back to login form
    } else {
      alert("Please fill in all required fields.");
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit(e: Event) {
    e.preventDefault();

    if (this.forgotForm.invalid) {
      Swal.fire({
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        icon: 'error'
      });
      return;
    }

    emailjs.sendForm('service_6yo8lxn', 'template_opr9eud', e.target as HTMLFormElement, 'tLJd5GoK1E28IX2W3')
      .then(
        (result: EmailJSResponseStatus) => {
          Swal.fire({
            title: 'Email Sent',
            text: 'A reset link has been sent to your email.',
            icon: 'success'
          });
        },
        (error: EmailJSResponseStatus) => {
          Swal.fire({
            title: 'Error',
            text: 'Failed to send the reset link. Please try again later.',
            icon: 'error'
          });
        }
      );
  }
  onClear() {
    this.forgotForm.reset();
  }
}

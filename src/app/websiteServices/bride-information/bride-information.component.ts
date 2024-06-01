// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, RouterLink } from '@angular/router';
// @Component({
//   selector: 'app-bride-information',
//   templateUrl: './bride-information.component.html',
//   styleUrl: './bride-information.component.css'
// })
// export class BrideInformationComponent implements OnInit{
//   user!: any;
//   loggedInUser: string | null = null;

//   constructor(
//     private router : Router
//   ) {}
//   ngOnInit(): void {
//     this.user = history.state.user;
//     this.loggedInUser = sessionStorage.getItem('loggedInUser');
//   }

//   viewDetails(user: any): void {
//     this.router.navigate(['/chat'], {
//       state: { user }
//     });
// }


// }

import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-brides-information',
  templateUrl: './bride-information.component.html',
  styleUrl: './bride-information.component.css'
})
export class BrideInformationComponent  implements OnInit{
  user!: any;
  loggedInUser: string | null = null;

  constructor(
    private router : Router
  ) {}
  ngOnInit(): void {
    this.user = history.state.user;
    this.loggedInUser = sessionStorage.getItem('loggedInUser');
  }
  private serviceID: string = 'service_d8k2n6q';
  private templateID: string = 'template_9uxrns7';
  private userID: string = '3gAV4t6K5P39pdo6I';
    

    approveRequest() {
      // Define the parameters for your email
      const templateParams = {
        to_name: 'Dear user',
        from_name: 'vivah team',
        message: 'your request has been accepted'
      };
    emailjs.send(this.serviceID, this.templateID, templateParams, this.userID)
    .then((response: EmailJSResponseStatus) => {
      console.log('Email sent successfully!', response.status, response.text);
      
      // Show success alert
      Swal.fire({
        title: 'Success!',
        text: 'The interest has been shown.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }, (error) => {
      console.error('Failed to send email.', error);

      // Show error alert
      Swal.fire({
        title: 'Error!',
        text: 'There was an error showing the interest.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }

  viewDetails(user: any): void {
        this.router.navigate(['/chat'], {
          state: { user }
        });
    }
}
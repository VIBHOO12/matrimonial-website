
// // import { Component } from '@angular/core';

// // interface Bride {
// //   name: string;
// //   age: number;
// //   religion: string;
// //   company: string;
// //   address: string;
// //   photoUrl: string;
// // }

// // @Component({
// //   selector: 'app-brides',
// //   templateUrl: './groom-information.component.html',
// //   styleUrls: ['./groom-information.component.css']
// // })
// // export class GroomInformationComponent {
// //   brides: Bride[] = [];
// //   photoUrls: string[] = [
// //     '/assets/groom1.jpeg',
// //     '/assets/groom2.jpeg',
// //     '/assets/groom3.jpeg',
// //     '/assets/groom4.jpeg',
// //     '/assets/groom5.jpeg',
// //     '/assets/groom6.jpeg',
// //     '/assets/groom7.jpeg',
// //     '/assets/groom8.jpeg',
// //     '/assets/groom9.jpeg',
// //     '/assets/groom10.jpeg'
// //   ];
// //   religions: string[] = ['Hindu', 'Muslim', 'Christian', 'Sikh'];
// //   companies: string[] = ['IBM', 'Google', 'Microsoft', 'Amazon'];
// //   addresses: string[] = ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata'];
  
// //   constructor() {
// //     this.generateRandomBrides();
// //   }

// //   generateRandomBrides() {
// //     for (let i = 1; i <= 10; i++) { // Generate 10 random brides
// //       const bride: Bride = {
// //         name: this.generateRandomName(),
// //         age: this.generateRandomNumber(20, 35), // Random age between 20 and 35
// //         religion: this.randomFromArray(this.religions), // Random religion
// //         company: this.randomFromArray(this.companies), // Random company
// //         address: this.randomFromArray(this.addresses), // Random address
// //         photoUrl: this.photoUrls[i - 1] // Corresponding photo URL
// //       };
// //       this.brides.push(bride);
// //     }
// //   }

// //   generateRandomName(): string {
// //     const firstNames: string[] = ['Amit', 'Rahul', 'Akash', 'Vivek', 'Rohit'];
// //     const lastNames: string[] = ['Sharma', 'Singh', 'Kapoor', 'Verma', 'Gupta'];
// //     const firstName = this.randomFromArray(firstNames);
// //     const lastName = this.randomFromArray(lastNames);
// //     return `${firstName} ${lastName}`;
// //   }

// //   randomFromArray(array: any[]): any {
// //     return array[Math.floor(Math.random() * array.length)];
// //   }

// //   generateRandomNumber(min: number, max: number): number {
// //     return Math.floor(Math.random() * (max - min + 1) + min);
// //   }

// //   showBrideDetail(bride: Bride) {
// //     console.log('Showing detail for:', bride.name);
// //     // You can handle displaying the detail in any way you want, such as routing to another component
// //   }
// // }
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, RouterLink } from '@angular/router';
// @Component({
//   selector: 'app-brides',
//   templateUrl: './groom-information.component.html',
//   styleUrls: ['./groom-information.component.css']
// })
// export class GroomInformationComponent implements OnInit{
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
  templateUrl: './groom-information.component.html',
  styleUrl: './groom-information.component.css'
})
export class GroomInformationComponent  implements OnInit{
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
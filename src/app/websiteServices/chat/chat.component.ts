

// // chat.component.ts
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ChatService } from '../../services/chat.service';

// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.css']
// })
// export class ChatComponent {
//   chatForm: FormGroup;

//   constructor(private formBuilder: FormBuilder, private chatServices: ChatService) {
//     this.chatForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       mail: ['', [Validators.required, Validators.email]],
//       comment: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.chatForm.valid) {
//       const formValue = this.chatForm.value;
//       this.chatServices.addMessage(formValue).subscribe(
//         response => {
//           alert('You have successfully sent your message to your soulmate');
//           this.chatForm.reset();
//         },
//         error => {
//           alert('Failed to send message. Please try again later.');
//         }
//       );
//     } else {
//       alert('Please fill in all fields correctly.');
//     }
//   }

//   onClear() {
//     this.chatForm.reset();
//   }
// }


// src/app/chat/chat.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  chatForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private chatService: ChatService) {
    this.chatForm = this.formBuilder.group({
      fromUsername: ['', Validators.required],
      toUsername: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.chatForm.valid) {
      const formValue = this.chatForm.value;
      console.log('Sending message:', formValue); // Add this line for debugging
      this.chatService.addMessage(formValue).subscribe(
        response => {
          console.log('Message sent successfully:', response); // Add this line for debugging
          alert('Message sent successfully!');
          this.chatForm.reset();
        },
        error => {
          console.error('Error sending message:', error); // Add this line for debugging
          alert('Failed to send message. Please try again later.');
        }
      );
    } else {
      this.showValidationErrors();
    }
  }

  onClear() {
    this.chatForm.reset();
  }

  private showValidationErrors() {
    let errorMessage = 'Please fill in all fields correctly:\n';

    if (this.chatForm.controls['fromUsername'].invalid) {
      errorMessage += '- From Username is required.\n';
    }

    if (this.chatForm.controls['toUsername'].invalid) {
      errorMessage += '- To Username is required.\n';
    }

    if (this.chatForm.controls['message'].invalid) {
      errorMessage += '- Message is required.\n';
    }

    alert(errorMessage);
  }
}

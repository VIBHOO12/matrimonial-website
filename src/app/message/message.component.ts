import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: any[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.fetchMessages();
  }

  fetchMessages(): void {
    this.chatService.getMessages().subscribe(
      data => {
        this.messages = data;
      },
      error => {
        console.error('Error fetching messages', error);
      }
    );
  }

  deleteMessage(msgId: number): void {
    console.log('Attempting to delete user with ID:', msgId); // Add this line for debugging
  
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.chatService.deleteMessage(msgId).subscribe(
          () => {
            Swal.fire('Deleted!', 'User has been deleted.', 'success');
            this.removeLocalMessage(msgId); // Remove user from local list
          },
          error => {
            Swal.fire('Error!', 'Error deleting user.', 'error');
            console.error('Error deleting user:', error);
          }
        );
      }
    });
  }

  removeLocalMessage(msgId: number): void {
    this.messages = this.messages.filter(message => message.msgId !== msgId);
  }
}
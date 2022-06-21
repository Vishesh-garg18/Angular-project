import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoanService } from './loan.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tdforms';
  loans = ['Home Loan', 'Personal Loan', 'Business Loan', 'Student Loan'];

  userModel = new User(
    'Vishesh Garg',
    'vishesh@gmail.com',
    9915420824,
    '',
    true,
    'ABD street',
    'Bangalore',
    'karnataka'
  );

  constructor(private _loanService: LoanService) {}

  onSubmit() {
    this._loanService.apply(this.userModel).subscribe(
      (data) => console.log('Success!', data),
      (error) => console.error('Error!', error)
    );
  }
}

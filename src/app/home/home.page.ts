import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Expense } from '../interfaces/expense';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  reasonInput = '';
  amountInput: number;

  totalExpenses = 0;

  listExpenses: Expense[] = [];
  constructor(private alertController: AlertController) {

    console.log('reason', this.reasonInput);
  }

  clear(){
    this.amountInput = null;
    this.reasonInput = '' ;
  }

  addExpense() {

    if (this.reasonInput.length === 0 || this.amountInput == null) {
      this.alertController.create({
        header: 'Invalid Inputs',
        message: 'Please enter valid reason and amount',
        buttons : ['Okay']
      }).then(alertElt => alertElt.present());
      return;
    }

    this.listExpenses.push({
      reason: this.reasonInput,
      amount: this.amountInput
    });
    this.totalExpenses += this.amountInput;
    this.clear();
  }

  deleteExpense(expense: Expense) {
    this.listExpenses = this.listExpenses.filter(exp => exp !== expense);
    this.totalExpenses -= expense.amount;
  }

}

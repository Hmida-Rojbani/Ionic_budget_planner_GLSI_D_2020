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
  
  // remove expense from listExpenses and it's amount from totalExpenses
  removeExpense(expense: Expense){
    for(let i=0; i<this.listExpenses.length; i++){
      if (this.listExpenses[i] == expense) {
        this.totalExpenses -= this.listExpenses[i].amount;
        this.listExpenses.splice(i, 1);
      }
    }
  }

}

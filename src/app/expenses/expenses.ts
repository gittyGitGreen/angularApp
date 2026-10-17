import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, KeyValuePipe } from '@angular/common';

interface Expense{
  description: string, amount: number,category: string, date: Date
}
@Component({
  selector: 'app-expenses',
  imports: [CurrencyPipe, DatePipe, KeyValuePipe],
  templateUrl: './expenses.html',
  styleUrl: './expenses.css',
})
export class Expenses {
  heading = 'My Expenses';
 expenses: Expense[] = [
  {description: 'Groceries', amount: 1500, category: 'Food', date: new Date()},
  {description: 'Electricity bill', amount: 1200, category: 'Bills', date: new Date()},
  {description: 'Baby essentials', amount: 2000, category: 'Baby', date: new Date()},
  {description: 'Dinner', amount: 800, category: 'Food', date: new Date()},
  {description: 'Cab ride', amount: 350, category: 'Transport', date: new Date()}
 ]

 get totalExpense() {
 return this.expenses.reduce((total, expense) => 
    total+=expense.amount
  ,0);
 }

 get totalPerCategory(): Record<string, number> {
  return this.expenses.reduce((total, item) => {
    total[item.category] +=item.amount;
    return total;
  }, {} as Record<string,number>);
 }
}

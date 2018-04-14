import Budget from '../../models/Budget';
import BudgetLineItem from '../../models/BudgetLineItem';

const budgets = [
  new Budget({
    name: 'Food',
    budgetLineItems: [
      new BudgetLineItem({
        name: 'Grocery',
        amountBudgeted: 150,
        amountSpent: 100
      }),
      new BudgetLineItem({
        name: 'Eating Out',
        amountBudgeted: 250,
        amountSpent: 175
      })
    ]
  }),
  new Budget({
    name: 'Transportation',
    budgetLineItems: [
      new BudgetLineItem({
        name: 'Fuel',
        amountBudgeted: 600,
        amountSpent: 550
      }),
      new BudgetLineItem({
        name: 'Repair',
        amountBudgeted: 50,
        amountSpent: 100
      })
    ]
  })
];

export default budgets;

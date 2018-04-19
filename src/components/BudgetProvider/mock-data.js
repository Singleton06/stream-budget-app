import Budget from '../../models/Budget';
import BudgetLineItem from '../../models/BudgetLineItem';

const budgets = [
  new Budget({
    name: 'Food',
    uuid: 'ac663fc3-7bd4-4c26-b25e-0cb5bd3511e0',
    budgetLineItems: [
      new BudgetLineItem({
        uuid: '4f658982-4ca8-417b-b30b-e969848906e8',
        name: 'Grocery',
        amountBudgeted: 150,
        amountSpent: 100
      }),
      new BudgetLineItem({
        uuid: 'eeb2444d-5546-48bf-8f65-c8c26493616d',
        name: 'Eating Out',
        amountBudgeted: 250,
        amountSpent: 175
      })
    ]
  }),
  new Budget({
    name: 'Transportation',
    uuid: 'a27342d7-a1c4-4a9c-b679-4fc8ed900f3c',
    budgetLineItems: [
      new BudgetLineItem({
        uuid: '32ce87b8-fb63-4548-92ce-8790818e494b',
        name: 'Fuel',
        amountBudgeted: 600,
        amountSpent: 550
      }),
      new BudgetLineItem({
        uuid: '277e187a-642f-4e1c-870b-36835ff527f9',
        name: 'Repair',
        amountBudgeted: 50,
        amountSpent: 100
      })
    ]
  })
];

export default budgets;

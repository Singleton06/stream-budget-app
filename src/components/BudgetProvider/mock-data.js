import BudgetCategory from '../../models/BudgetCategory';
import BudgetLineItem from '../../models/BudgetLineItem';
import Budget from '../../models/Budget';

const budgets = [
  new Budget(
  {
    name: 'May 2018',
    uuid: '7d4d9c93-f848-43ac-940d-e01d578443a9',
    isVisible: true,
    budgetCategories: [
      new BudgetCategory({
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
      new BudgetCategory({
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
    ]
  }),
  new Budget({
    name: 'June 2018',
    uuid: '8bc92bc8-613a-4b4b-b812-140ec6fd7d39',
    isVisible: false,
    budgetCategories: [
      new BudgetCategory({
        name: 'Food',
        uuid: '5a812517-440e-41d6-9773-591941f06579',
        budgetLineItems: [
          new BudgetLineItem({
            uuid: 'c9bed15e-811b-4d9d-96f1-62617c675d91',
            name: 'Grocery',
            amountBudgeted: 400,
            amountSpent: 150
          }),
          new BudgetLineItem({
            uuid: '34977026-9453-42ff-b399-d6caa46febf6',
            name: 'Eating Out',
            amountBudgeted: 350,
            amountSpent: 175
          })
        ]
      }),
      new BudgetCategory({
        name: 'Transportation',
        uuid: '8564b436-7e7a-4e8d-950f-611f5880aa9a',
        budgetLineItems: [
          new BudgetLineItem({
            uuid: '44438e38-035d-445e-909a-1b185b62502f',
            name: 'Fuel',
            amountBudgeted: 800,
            amountSpent: 650
          }),
          new BudgetLineItem({
            uuid: 'a689965f-bf3e-4dc5-8266-3f0366da7cb7',
            name: 'Repair',
            amountBudgeted: 65,
            amountSpent: 125
          })
        ]
      })
    ]
  })
];

export default {
  budgets: budgets,
  currentlySelectedBudget: budgets[0].uuid
};

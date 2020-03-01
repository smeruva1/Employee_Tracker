// set up questions for start prompt
const startQuestions = [
  {
    name: 'EmployeeAction',
    message: 'What would you like to do?',
    type: 'list',
    choices: [{ name: 'Review all Employees' }, { name: 'Create a new Employee' }, { name: 'Update an Employee' }, { name: 'Delete an Employee' }, { name: 'Exit' }]
  }
];


// set up questions for creating an employee prompt
const createEmployeeQuestions = [
  {
    name: 'first_name',
    message: 'What is the first name of the Employee?',
    type: 'input',
    // validate that user entered something
    validate: inputVal => (inputVal ? true : false)
  },
  {
    name: 'last_name',
    message: 'What is the first name of the Employee?',
    type: 'input',
    // validate that user entered something
    validate: inputVal => (inputVal ? true : false)
  },
  {
    name: 'role_id',
    message: 'What is the Role ID?',
    type: 'input',
    // validate that user entered a number greater than 0 and it is in fact a number
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  },
  {
    name: 'manager_id',
    message: 'What is the Manager ID?',
    type: 'input',
    // validate that user entered a number greater than 0 and it is in fact a number
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];


// questions to delete an employee
const deleteEmployeeQuestions = [
  {
    name: 'id',
    message: "Which employee do you want to delete (enter employee's id)?",
    type: 'input',
    // validate that user entered a number greater than 0 and it is in fact a number
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];

/*
// questions to bid on an item
const bidQuestions = [
  {
    name: 'item_id',
    message: "Which item do you want to bid on (enter item's id)?",
    type: 'input',
    // validate that user entered a number greater than 0 and it is in fact a number
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  },
  {
    name: 'bid_amount',
    message: 'How much do you want to bid?',
    type: 'input',
    // validate that user entered a number greater than 0 and it is in fact a number
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];
 
*/

module.exports = {
  startQuestions, createEmployeeQuestions, deleteEmployeeQuestions
  //, bidQuestions 
};
//  module.exports =  startQuestions;

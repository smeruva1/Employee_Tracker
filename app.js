const inquirer = require('inquirer');
require('console.table');

// import connection
const connection = require('./config/connection');

// import functions to work with database
// const { getAllEmployees, createEmployee, updateEmployee } = require('./lib/db-employees');
const { getAllEmployees } = require('./lib/db-employees');

// import arrays of questions for inquirer prompts
// const { startQuestions, createItemQuestions, bidQuestions } = require('./lib/prompts');
const startQuestions = require('./lib/prompts');

// function to start auction, defined to be async
const startApp = async () => {
    // destructure response object out of first prompt, using await means no .then() needed
    const userAction = await inquirer.prompt(startQuestions);
    console.log(userAction.EmployeeAction);

    // depending on the answer, do an action
    //choices: ['Review all Employees', 'Create a new Employee', 'Update an Employee', 'Delete an Employee', 'Exit']
    if (userAction.EmployeeAction === 'Review all Employees') {
        console.log("inside question");
        getAllEmps();
    } else if (userAction === 'Create a new Employee') {
        postNewEmp();
    } else if (userAction === 'Update an Employee') {
        updateEmp();
    } else if (userAction === 'Delete an Employee') {
        deleteEmp();
    } else {
        connection.end();
    }
};


// function to create a new auction item, defined to be async
const getAllEmps = async () => {

    console.log("inside getallemps");
    const employees = await getAllEmployees();

    // print all of the items
    console.table(employees);


    return startApp();
};


/*
// function to create a new auction item, defined to be async
const postNewEmployee = async () => {
    // get answers out of inquirer prompt
    const { item_name, item_category, starting_bid } = await inquirer.prompt(createItemQuestions);

    // create new item
    const createItemRes = await createItem({ item_name, item_category, starting_bid });

    console.log(createItemRes);
    return startAuction();
};

// async function to bid on an item
const updateEmployee = async () => {
    // get all auction items so user can see what's there
    const items = await getAllItems();

    // print all of the items
    console.table(items);

    // enter bid information and get id and amount back
    const { item_id, bid_amount } = await inquirer.prompt(bidQuestions);

    // get item we want to bid on based on id
    const { id, highest_bid } = items.find(({ id }) => id === parseInt(item_id));

    // if the current high bid is higher than the users, restart auction
    if (highest_bid > bid_amount) {
        console.log('Bid too low, sorry!');
        return startAuction();
    }
    // if new high bidder, update item with new value based on its id
    const updateBidRes = await updateBid(id, parseFloat(bid_amount).toFixed(2));
    console.log(updateBidRes.message);

    return startAuction();
};

*/
// connect to the db and start up auction
connection.connect(err => {
    if (err) throw err;
    console.log('Connected to DB');
    startApp();
});

const inquirer = require('inquirer');
require('console.table');

// import connection
const connection = require('./config/connection');

// const emitter = new EventEmitter()
// const emitter = require('EventEmitter');
// emitter.setMaxListeners(100);

// import functions to work with database
// const { getAllEmployees, createEmployee, updateEmployee } = require('./lib/db-employees');
const { getAllEmployees, createEmployee, deleteEmployee, updateEmployeeRole, updateEmployeeManager } = require('./lib/db-employees');

// import arrays of questions for inquirer prompts
const { startQuestions, createEmployeeQuestions, deleteEmployeeQuestions, updateEmployeeQuestions } = require('./lib/prompts');

//const startQuestions = require('./lib/prompts');

// function to start auction, defined to be async
const startApp = async () => {
    // destructure response object out of first prompt, using await means no .then() needed
    const userAction = await inquirer.prompt(startQuestions);
    //console.log(userAction.EmployeeAction);

    // depending on the answer, do an action
    //choices: ['Review all Employees', 'Create a new Employee', 'Update an Employee', 'Delete an Employee', 'Exit']
    if (userAction.EmployeeAction === 'Review all Employees') {

        getAllEmps();
    } else if (userAction.EmployeeAction === 'Create a new Employee') {
        postNewEmp();
    } else if (userAction.EmployeeAction === 'Update an Employee') {
        //console.log("inside upd question");
        updateEmp();
    } else if (userAction.EmployeeAction === 'Delete an Employee') {
        deleteEmp();
    } else if (userAction.EmployeeAction === 'Exit') {
        // console.log("inside exit");
        connection.end();
    }
};


// function to create a new auction item, defined to be async
const getAllEmps = async () => {

    //console.log("inside getallemps");
    const employees = await getAllEmployees();

    // print all of the items
    console.table(employees);

    return startApp();
};



// function to create a new employee, defined to be async
const postNewEmp = async () => {
    // console.log("inside postNewEmp");
    // get answers out of inquirer prompt
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt(createEmployeeQuestions);

    // create new employee
    const createEmployeeRes = await createEmployee({ first_name, last_name, role_id, manager_id });

    console.log(createEmployeeRes);
    return startApp();
};


// function to delete an employee
const deleteEmp = async () => {

    // console.log("inside deleteEmp");
    // get all employees so user can see what's there
    //console.log("inside getallemps");
    const employees = await getAllEmployees();

    // print all of the items
    console.table(employees);

    // enter employee id to be deleted
    const { id } = await inquirer.prompt(deleteEmployeeQuestions);

    // console.log("This id will be deleted: ", id);

    await deleteEmployee(id);

    return startApp();
};

// // function to update an employee
const updateEmp = async () => {

    // get all employees so user can see what's there
    //console.log("inside getallemps");
    const employees = await getAllEmployees();

    // print all of the items
    console.table(employees);

    // enter employee id to be deleted
    const { id, updateAction, new_id } = await inquirer.prompt(updateEmployeeQuestions);

    // depending on the answer, do an action
    //choices: [{ name: 'Employee Role ID' }, { name: 'Employee Manager ID' }, { name: 'Exit' }]
    if (updateAction === 'Employee Role ID') {
        const updateEmpRole = await updateEmployeeRole(id, new_id);
        console.log(updateEmpRole.message);
    } else if (updateAction === 'Employee Manager ID') {
        const updateEmpManager = await updateEmployeeManager(id, new_id);
        console.log(updateEmpManager.message);
    } else if (updateAction === 'Exit') {
        return startApp();
    }

    return startApp();
};

// connect to the db and start up auction
connection.connect(err => {
    if (err) throw err;
    console.log('Connected to DB');
    startApp();
});

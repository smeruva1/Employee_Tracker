const inquirer = require('inquirer');
require('console.table');

// import connection
const connection = require('./config/connection');

// const emitter = new EventEmitter()
// const emitter = require('EventEmitter');
// emitter.setMaxListeners(100);

// import functions to work with database
// const { getAllEmployees, createEmployee, updateEmployee } = require('./lib/db-employees');
const { getAllEmployees, createEmployee, deleteEmployee, updateEmployeeRole, updateEmployeeManager,
    getAllRoles, createRole, deleteRole, updateRoleSalary, updateRoleDepartment,
    getAllDepartments, createDepartment, deleteDepartment, updateDepartment,
    getEmployeesByManager, getDepartmentBudget, getAllManagers
} = require('./lib/db-employees');

// import arrays of questions for inquirer prompts
const { startQuestions, createEmployeeQuestions, deleteEmployeeQuestions, updateEmployeeQuestions, 
createRoleQuestions, deleteRoleQuestions, updateRoleQuestions,
createDepartmentQuestions, deleteDepartmentQuestions, updateDepartmentQuestions, selectManagerQuestion
 } = require('./lib/prompts');

//const startQuestions = require('./lib/prompts');

// function to start auction, defined to be async
const startApp = async () => {
    // destructure response object out of first prompt, using await means no .then() needed
    const userAction = await inquirer.prompt(startQuestions);
    //console.log(userAction.EmployeeAction);

    // depending on the answer, do an action
//     choices: [{ name: 'Review all Employees' }, { name: 'Create a new Employee' }, { name: 'Update an Employee' }, { name: 'Delete an Employee' },
//     { name: 'View Employees By Manager' }, { name: 'Review Departments Budget' },
//     { name: 'Review all Roles' }, { name: 'Create a new Role' }, { name: 'Update an Role' }, { name: 'Delete an Role' },
//     { name: 'Review all Departments' }, { name: 'Create a new Department' }, { name: 'Update an Department' }, { name: 'Delete an Department' }
//     { name: 'Exit' }]
//   }
// ];
    if (userAction.EmployeeAction === 'Review all Employees') {

        getAllEmps();
    } else if (userAction.EmployeeAction === 'Create a new Employee') {
        postNewEmp();
    } else if (userAction.EmployeeAction === 'Update an Employee') {
        //console.log("inside upd question");
        updateEmp();
    } else if (userAction.EmployeeAction === 'Delete an Employee') {
        deleteEmp();
    } else if (userAction.EmployeeAction === 'View Employees By Manager') {
        //console.log("inside upd question");
        getEmpByMgr();
    } else if (userAction.EmployeeAction === 'Review Departments Budget') {
       getDeptBudget();
    }else if (userAction.EmployeeAction === 'Review all Roles') {
        getAllRol();
    } else if (userAction.EmployeeAction === 'Create a new Role') {
        postNewRol();
    } else if (userAction.EmployeeAction === 'Update an Role') {
        //console.log("inside upd question");
        updateRol();
    } else if (userAction.EmployeeAction === 'Delete an Role') {
        deleteRol();
    }else if (userAction.EmployeeAction === 'Review all Departments') {
        getAllDept();
    } else if (userAction.EmployeeAction === 'Create a new Department') {
        postNewDept();
    } else if (userAction.EmployeeAction === 'Update an Department') {
        //console.log("inside upd question");
        updateDept();
    } else if (userAction.EmployeeAction === 'Delete an Department') {
        deleteDept();
    


    } else if (userAction.EmployeeAction === 'Exit') {
        // console.log("inside exit");
        connection.end();
    }
};

//============================================
// Employee methods
//============================================

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

//============================================
// Role methods
//============================================

// function to create a new auction item, defined to be async
const getAllRol = async () => {

    //console.log("inside getallroles");
    const roles = await getAllRoles();

    // print all of the items
    console.table(roles);

    return startApp();
};


// function to create a new role, defined to be async
const postNewRol = async () => {
    // console.log("inside postNewRole");
    // get answers out of inquirer prompt
    const { title, salary, department_id } = await inquirer.prompt(createRoleQuestions);

    // create new role
    const createRoleRes = await createRole({ title, salary, department_id });

    console.log(createRoleRes);
    return startApp();
};

// function to delete an role
const deleteRol = async () => {

    // console.log("inside deleteRole");
    // get all roles so user can see what's there
    //console.log("inside getallroles");
    const roles = await getAllRoles();

    // print all of the items
    console.table(roles);

    // enter role id to be deleted
    const { id } = await inquirer.prompt(deleteRoleQuestions);

    // console.log("This id will be deleted: ", id);

    await deleteRole(id);

    return startApp();
};

// // function to update an role
const updateRol = async () => {

    // get all roles so user can see what's there
    //console.log("inside getallroles");
    const roles = await getAllRoles();

    // print all of the items
    console.table(roles);

    // enter role id to be deleted
    const { id, updateAction, new_val} = await inquirer.prompt(updateRoleQuestions);

    // depending on the answer, do an action
    // choices: [{ name: 'Role salary' }, { name: 'Role Department ID' }, { name: 'Exit' }]
    if (updateAction === 'Role salary') {
        const updateRoleSalaryRes = await updateRoleSalary(id, parseFloat(new_val).toFixed(2));
        console.log(updateRoleSalaryRes.message);
    } else if (updateAction === 'Role Department ID') {
        const updateRoleDepartmentRes = await updateRoleDepartment(id, new_val);
        console.log(updateRoleDepartmentRes.message);
    } else if (updateAction === 'Exit') {
        return startApp();
    }

    return startApp();
};


//============================================
// Department methods
//============================================

// function to create a new auction item, defined to be async
const getAllDept = async () => {

    //console.log("inside getallDepartments");
    const Departments = await getAllDepartments();

    // print all of the items
    console.table(Departments);

    return startApp();
};

// function to create a new Department, defined to be async
const postNewDept = async () => {
    // console.log("inside postNewDepartment");
    // get answers out of inquirer prompt
    const { name } = await inquirer.prompt(createDepartmentQuestions);

    // create new Department
    const createDepartmentRes = await createDepartment({ name });

    console.log(createDepartmentRes);
    return startApp();
};

// function to delete an Department
const deleteDept = async () => {

    // console.log("inside deleteDepartment");
    // get all Departments so user can see what's there
    //console.log("inside getallDepartments");
    const Departments = await getAllDepartments();

    // print all of the items
    console.table(Departments);

    // enter Department id to be deleted
    const { id } = await inquirer.prompt(deleteDepartmentQuestions);

    // console.log("This id will be deleted: ", id);

    await deleteDepartment(id);

    return startApp();
};

// // function to update an Department
const updateDept = async () => {

    // get all Departments so user can see what's there
    //console.log("inside getallDepartments");
    const Departments = await getAllDepartments();

    // print all of the items
    console.table(Departments);

    // enter Department id to be deleted
    const { id, name} = await inquirer.prompt(updateDepartmentQuestions);

    const updateDepartmentRes = await updateDepartment(id, name);
    
    return startApp();
};



const getEmpByMgr = async () => {


    const Mgrs = await getAllManagers();

    // print all Managers
    console.table(Mgrs);

    // enter Manager to see employees
    const { id } = await inquirer.prompt(selectManagerQuestion);

    // console.log("This id will be deleted: ", id);

    const employees = await getEmployeesByManager(id);

    // print all of the items
    console.table(employees);

    return startApp();
};

const getDeptBudget = async () => {

    const budget = await getDepartmentBudget();

    console.log("Department's budget is: ",);
    budget.forEach(element => console.log(element.name, " ", element.Budget));
    
    return startApp();
};
    
         

// connect to the db and start up auction
connection.connect(err => {
    if (err) throw err;
    console.log('Connected to DB');
    startApp();
});

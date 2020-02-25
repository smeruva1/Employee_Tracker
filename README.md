# Employee Tracker

A Node application to manage employee's within a department using node, inquirer, console.table and mySQL DB to store data in Database. The application allows user to view list of employees, list of roles and list of departments. The application provides command-line interface for user to update employee, role and department. 

Employee table has a unique id and each row is for an employee.
It joins the Role table with role id.
Role table joins the Department Table with department_id.

The role table stores the title and salary, one can join Department table and Role table to retrieve budget for a given department.

The starting file is server.js but the functions are written in a separate js files.

USE employee_tracker_db;

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
	('Steve', 'King',1, 1),
	('Sudar', 'Meruva',3, 1),
	('Nenna', 'Kochhar',5, 2),
	('Bruce', 'Ernst',7, 2),
	('David', 'Austin',7, 2),
	('Diana', 'Lorentz',2, 6),
	('Nancy', 'Greenberg',4, 6),
	('Daniel', 'Faviet',6, 7),
	('Ellen', 'Abel',8, 7),
	('Liz', 'Bates',8, 7)


INSERT INTO role
  (title, salary, department_id)
VALUES
	('Development Director', 100000 , 1),
	('Product Director', 95000 , 2),
	('Development Manager', 80000 , 1),
	('Product Manager', 70000 , 2),
	('Development Architect', 75000 , 1),
	('Product Owner', 65000 , 2),
	('Developer', 60000 , 1),
	('Business Analyst', 55000 , 2)
      
 
INSERT INTO department
  (name)
VALUES
	('Software Development'),
	('Product Development')

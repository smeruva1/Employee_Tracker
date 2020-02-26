USE employee_tracker_db;

INSERT INTO employee
  (id, first_name, last_name, role_id, manager_id)
VALUES
	(1, 'Steve', 'King',1, 1),
	(2, 'Sudar', 'Meruva',3, 1),
	(3, 'Nenna', 'Kochhar',5, 2),
	(4, 'Bruce', 'Ernst',7, 2),
	(5, 'David', 'Austin',7, 2),
	(6, 'Diana', 'Lorentz',2, 6),
	(7, 'Nancy', 'Greenberg',4, 6),
	(8, 'Daniel', 'Faviet',6, 7),
	(9, 'Ellen', 'Abel',8, 7),
	(10, 'Liz', 'Bates',8, 7)

INSERT 
  INTO employees (name, admission_date, salary)
  VALUES
    ('Camilo', '2023/02/02', 12000),
    ('Sandro', '2023/01/21', 9000),
    ('Pepe', '2022/05/21', 1000);

INSERT
  INTO requests (code, description, summary, employee_id)
  VALUES
    ('a01', null, null, 1),
    ('a02', 'Random Desc', null, 1),
    ('b01', 'desc', 'my summary', 2),
    ('b08', null, null, 3);
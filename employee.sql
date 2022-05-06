create table employees (
emp_id integer primary key not null,
emp_name varchar(15),
job_name varchar(10),
manager_id integer,
hire_date date,
salary decimal(10,2),
commisssion decimal(7,2),
dep_id integer
);
create table salary_grade(
grade integer primary key,
min_salary integer,
max_salary integer
);
create table department(
dep_id integer primary key,
dep_name varchar(20),
dep_location varchar(15)
);
insert into employees (emp_id,emp_name,job_name,manager_id,
hire_date,salary,commisssion,dep_id)
values (68319,"KAYLING","PRESIDENT",null,"1991-11-18",6000.00,null,1001),
(66928,"BLAZE","MANAGER",68319,"1991-05-01",2750.00,null,3001),
(67832,"CLARE","MANAGER",68319,"1991-06-09",2550.00,null,1001),
(65646,"JONAS","MANAGER",68319,"1991-04-02",2957.00,null,2001),
(67858,"SCARLET","ANALYST",65646,"1997-04-19",3100.00,null,2001),
(69062,"FRANK","ANALYST",65646,"1991-12-03",3100.00,null,2001),
(63679,"SANDRINE","CLERK",69062,"1990-12-18",900.00,null,2001),
(64989,"ADELYN","SALESMAN",66928,"1991-02-20",1700.00,400.00,3001),
(65271,"WADE","SALESMAN",66928,"1991-02-22",1350.00,600.00,3001),
(66564,"MADDEN","SALESMAN",66928,"1991-09-28",1350.00,1500.00,3001),
(68454,"TUCKER","SALESMAN",66928,"1991-09-08",1600.00,0.00,3001),
(68736,"ADNRES","CLERK",67858,"1997-05-03",1200.00,null,2001),
(69000,"JULIUS","CLERK",66928,"1991-12-03",1050.00,null,3001),
(69324,"MARKER","CLERK",67832,"1992-01-23",1400.00,null,1001);
insert into salary_grade(grade,min_salary,max_salary)
values(1,800,1300),
(2,1301,1500),
(3,1501,2100),
(4,2101,3100),
(5,3101,9999);
insert into department(dep_id,dep_name,dep_location)
values(1001,"FINANCE","SYDNEY"),
(2001,"AUDIT","MELBOURINE"),
(3001,"MARKETING","PERTH"),
(4001,"PRODUCTION","BRISBANE");
select * from employees;
select * from salary_grade;
select * from department;
select salary from employees;
select distinct job_name from employees;
select emp_name,
concat('$',salary*15/100+salary) as salary from employees;
select concat(emp_name,"    ",job_name) as "Employee & Job" from employees; 
select emp_id,emp_name,salary,date_format(hire_date,'%M %d, %Y') from employees;
select length(trim(emp_name)) from employees;
select emp_id,salary,commisssion from employees;
select distinct dep_id,job_name from employees;
select * from employees where dep_id not in (2001);
select * from employees where hire_date<("1991-1-1");
select avg(salary) from employees where job_name="ANALYST";
select * from employees where emp_name="BLAZE";
select * from employees where (1.25*salary)>3000;
select * from employees where date_format(hire_date,'%M')="January";
select emp_id,emp_name,hire_date,salary from employees where hire_date<("1991-04-01");
select * from employees where job_name not in("president","manager") order by salary asc;
select max(salary) from employees;
select job_name,avg(salary),avg(salary+commisssion) from employees group by job_name;
select * from employees where emp_name like '%AR%';
select employees.emp_id,employees.emp_name,department.dep_id,department.dep_location,department.dep_name
from employees,department
where department.dep_id=employees.dep_id && employees.dep_id in(1001,2001);
select manager_id,count(*) as count from employees 
group by manager_id order by manager_id asc;
select dep_id,count(*) as count from employees
group by dep_id having count(*)>=2;
select employees.emp_name,employees.salary from employees,salary_grade
where employees.emp_name='frank'
and employees.salary between salary_grade.min_salary and salary_grade.max_salary
and employees.salary=salary_grade.max_salary;
alter table employees add gender varchar(10);
UPDATE EMPLOYEES
SET gender='FEMALE'
WHERE emp_id=68319;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=66928;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=67832;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=65646;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=67858;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=69062;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=63679;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=64989;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=65271;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=68319;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=66564;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=68454;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=68736;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=69000;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=69324;
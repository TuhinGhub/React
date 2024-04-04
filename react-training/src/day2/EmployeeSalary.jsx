import React, { useMemo } from 'react';

// EmployeeSalary component
const EmployeeSalary = () => {
  // Define array of employee objects
  const employees = [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 60000 },
    { name: "Charlie", salary: 70000 },
    { name: "David", salary: 55000 },
    { name: "Eve", salary: 65000 }
  ];

  // Memoize the average salary calculation
  const averageSalary = useMemo(() => {
    // Calculate total salary
    const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
    // Calculate average salary
    return employees.length > 0 ? totalSalary / employees.length : 0;
  }, [employees]); // Dependency on the employee data

  return (
    <div>
      <h2>Employee Salary</h2>
      <p>Average Salary: ${averageSalary.toFixed(2)}</p>
    </div>
  );
};

export default EmployeeSalary;

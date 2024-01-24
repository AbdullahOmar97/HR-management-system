function Employee(employeeID, fullName, department, level, imageURL) {

    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = function () {
        let salaryRange;
        switch (this.level) {
            case 'Senior':
                salaryRange = { min: 1500, max: 2000 };
                break;
            case 'Mid-Senior':
                salaryRange = { min: 1000, max: 1500 };
                break;
            case 'Junior':
                salaryRange = { min: 500, max: 1000 };
                break;
            default:
    
                salaryRange = { min: 500, max: 500 };
        }
    
    
        let randomSalary = Math.floor(Math.random() * (salaryRange.max - salaryRange.min + 1)) + salaryRange.min;
    
        let netSalary = randomSalary - (randomSalary * 0.075);
    
        return netSalary;
}

console.log(this.fullName,this.salary())
document.write(`${this.fullName} - the Salary : (${this.salary()})  ------------- `);

};



let employee1 = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior');
let employee2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior');
let employee3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');
let employee4 = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');
let employee5 = new Employee(1004, 'Omar Zaid', 'Development', 'Senior');
let employee6 = new Employee(1005, 'Rana Saleh', 'Development', 'Junior');
let employee7 = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior');




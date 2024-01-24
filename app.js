

let allEmployees = [];


function Employee(employeeID, fullName, department, level, imageURL) {

    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;

    allEmployees.push(this)

};



Employee.prototype.salary = function () {
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




new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior');
new Employee(1001, 'Lana Ali', 'Finance', 'Senior');
new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');
new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');
new Employee(1004, 'Omar Zaid', 'Development', 'Senior');
new Employee(1005, 'Rana Saleh', 'Development', 'Junior');
new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior');



let oldEmployee = document.getElementById('oldEmployee');

console.log(oldEmployee)





function generateEmployeeID() {
    return Math.floor(1000 + Math.random() * 9000);
}

function submitForm() {
    let fullName = document.getElementById('fullName').value;
    let department = document.getElementById('department').value;
    let level = document.getElementById('level').value;
    let imageUrl = document.getElementById('imageUrl').value;
    let employeeID = generateEmployeeID();
    let newEmployee = new Employee(employeeID, fullName, department, level, imageUrl);

    newEmployee.renderCard();

    document.getElementById('employeeForm').reset();
}

Employee.prototype.renderCard = function () {

    let employeesSection = document.getElementById('employeeCards');

    let card = document.createElement('tr');

    card.innerHTML = `
    <tr>
    <td>
        <br>
        <img src="${this.imageURL}">
        <p>Name: ${this.fullName} - ID: ${this.employeeID}</p>
        <p>Department: ${this.department} - Level: ${this.level} </p>
        <p>Salary: JD ${this.salary()}</p>
        <br >
        </td>
        </tr>
    `;

    employeesSection.appendChild(card);
};
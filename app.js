let Employee = [{
    employeeId: employeeId,
    firstName: firstName,
    lastName: lastName,
    department: {
        Administration: Administration,
        Marketing: Marketing,
        Development: Development,
        Finance: Finance,
    },

    level: {
        Junior: Junior,
        MidSenior: MidSenior,
        Senior: Senior
    },

    imageUrl: imageUrl
}]

function Employee(employeeId, firstName, lastName, department, level, imageUrl) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;

}


let e1 = new Employee(1000, Ghazi Samer, Administration, Senior)



Employee.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};



for (emp of Employee) {
    let content = `<tr>
    <td>$(em.employeeId)</td>
    <td></td>
    <td></td>
    </tr>
    `
    document.getElementById("Employee").innerHTML += content
}
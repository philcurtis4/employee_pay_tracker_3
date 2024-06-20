function showPrompt() {
    var firstName = prompt("Please enter employee's first name");
    if(firstName == "") {
       return alert("Please enter first name!");
        
    }
    var lastName = prompt("Please enter employee's last name");
    if(lastName == "") {
        return alert("Please enter last name!");
         
     }
    var salary = prompt("Please enter employee's salary");
    if(firstName == "") {
        return alert("Please enter salary!");
         
     }

    if(firstName && lastName && salary !== null){
        var table = document.getElementById("table")
        var newRow = document.createElement("tr");

        var cellOne = document.createElement("td");
        cellOne.textContent = firstName;

        var cellTwo = document.createElement("td");
        cellTwo.textContent = lastName;

        var cellThree = document.createElement("td");
        cellThree.textContent = salary;

        newRow.appendChild(cellOne);
        newRow.appendChild(cellTwo);
        newRow.appendChild(cellThree);

        table.appendChild(newRow);
    }
}
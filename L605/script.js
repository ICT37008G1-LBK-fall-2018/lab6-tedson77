


var students = [
    { FirstName: "დავით", LastName: "წულუკიძე", PersonalNumber: "123" },
    { FirstName: "მიხილ", LastName: "კაპანაძე", PersonalNumber: "124" },
    { FirstName: "სოფო", LastName: "დოღონაძე", PersonalNumber: "125" }
  ];
  

  
  function displayStudentsTable(studentList) {
    var dataArray = Array.from(studentList);
  
    var table = document.createElement("table");
    var _tr = document.createElement("tr");
  
    var fields = Object.keys(dataArray[0]);
    table.appendChild(_tr);
  
    fields.forEach(key => {
      var th = document.createElement("th");
      th.textContent = key;
      _tr.appendChild(th);
    });
  
    dataArray.forEach(element => {
      var tr = document.createElement("tr");
      table.appendChild(tr);
  
      for (var k in element) {
        var td = document.createElement("td");
        var el = document.createTextNode(element[k]);
  
        td.appendChild(el);
        tr.appendChild(td);
      }
    });
  
    return document.querySelector("#student-list").appendChild(table);
  }
  
  displayStudentsTable(students);
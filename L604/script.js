function myfunction(e) {
    var x = prompt('შეიყვანეთ მომხმარებლის სახელი');
    var status = 0;
    var list = document.getElementById('student-list');

    if (x == '') {
        x = false
    }
    else {
        if (x) {
            myfunction()
            status = 1
        }

        if (status == 1) {
            var newLi = document.createElement('li');
            newLi.innerHTML = x
            list.appendChild(newLi)
        }
    }
}
myfunction()
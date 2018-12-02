var x = prompt('შეიყვანეთ სტუდენტის ID')
for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
    if (document.getElementsByTagName('div')[i].getAttribute('data-student-id') == x) {
        document.getElementsByTagName('div')[i].style.background = 'red'
    }
}
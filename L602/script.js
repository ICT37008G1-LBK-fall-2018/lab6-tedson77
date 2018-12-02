var first = document.getElementById('first');
var second = document.getElementById('second');

function insertAfter(newElem, oldElem) {
    oldElem.parentNode.insertBefore(newElem, oldElem.nextSibling)
}
insertAfter(first, second)
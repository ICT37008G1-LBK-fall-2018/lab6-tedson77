var myNode = document.getElementById("container");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
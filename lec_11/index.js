document.getElementById('btn').addEventListener('mouseenter', myFunction)
document.getElementById('btn').addEventListener('mouseleave', leave)





function myFunction() {
    document.getElementById('output').innerHTML = '<h1>Hello World</h1>';
}

function leave() {
    document.getElementById("output").innerHTML = "<h1>left</h1>";
}
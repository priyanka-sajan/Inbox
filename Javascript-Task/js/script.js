var data = [{
    start: 0,
    duration: 15,
    title: "Exercise"
}, {
    start: 25,
    duration: 30,
    title: "Travel to work"
}, {
    start: 30,
    duration: 30,
    title: "Plan day"
}, {
    start: 60,
    duration: 15,
    title: "Review yesterday's commits"
}, {
    start: 100,
    duration: 15,
    title: "Code review"
}, {
    start: 180,
    duration: 90,
    title: "Have lunch with John"
}, {
    start: 360,
    duration: 30,
    title: "Skype call"
}, {
    start: 370,
    duration: 45,
    title: "Follow up with designer"
}, {
    start: 400,
    duration: 30,
    title: "Push up branch"
}
];
console.log(typeof data);
console.log(data);
function myFunction() {

    for (var i = 0; i < 10; i++) {
        var tag = document.createElement("div");
        tag.setAttribute('exercise', 'bg-color')
        var text = document.createTextNode("exercise");
        tag.appendChild(text);
        var element = document.getElementById("new");
        element.appendChild(tag);
    }
}


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
// getTimeArray = () =>{
//     var x = 30; 
//     var times = []; 
//     var tt = 60*8; 
//     var ap = ['AM', 'PM']; 
//     for (var i=0;tt<19*60; i++) {
//     var hh = Math.floor(tt/60); 
//     var mm = (tt%60); 
//     times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2); 
//     tt = tt + x;
//     }
//     return times;
// }
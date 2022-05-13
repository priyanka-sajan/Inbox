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



timeDataHTML = "";
hr = 8;
min = 0;
for(var i = 0; i < 600; i+=30) {
    if(min == 0){
        timeDataHTML += '<div class="small-font border-top spaceMe">'+ ("0" + hr).slice(-2).toString() +":00"+'</div>';
    }else{
        timeDataHTML += '<div class="small-font-1 fs-8 border-top spaceMe">'+ ("0" + hr).slice(-2).toString() +":30" +'</div>';
    }
    min += 30;
    if(min == 60){
        min = 0;
        hr++;
        if(hr == 13){
            hr = 1;
        }
    }
}

document.getElementById("sectionOne").innerHTML = timeDataHTML;

var arr = Array(600).fill(0);
data.forEach(function(item) {
    for (var i = item.start; i < item.start + item.duration; i++) {
        arr[i]++;
    }
});
console.log();
var arr2 = Array(600).fill(0);

var scheduleHTML = "";
data.forEach(function(item) {
    maxVal = Math.max(...arr.slice(item.start, item.start + item.duration + 1));
    for (var i = item.start; i < item.start + item.duration; i++) {
        arr2[i]++;
    }
    secondMaxVal = Math.max(...arr2.slice(item.start, item.start + item.duration + 1));
    if(secondMaxVal){
        
    }
    scheduleHTML += '<div class="schedule-item" style = "height: '+(item.duration).toString()+'px; width: '+(100/maxVal).toString()+'%; right: '+((100/maxVal) * (secondMaxVal - 1)).toString()+'%; top:'+(item.start).toString()+'px;" >'+item['title']+'</div>';
});

document.getElementById("sectionTwo").innerHTML = scheduleHTML;

                
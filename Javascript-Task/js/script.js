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
$(".heading").html("<b>Time schedule<b>");
$(".time").html("8:00 am -6:00 pm");

var z=getTimeArray(); 
for(i=0;i<z.length;i++)
{
    $("#sub-section1").append(`<div  style="height:30px">${z[i]}</div>`);
}
function getTimeArray()
{
    var x = 30; 
    var times = []; 
    var tt = 60*8; 

   
    for (var i=0;tt<19*60; i++) {
    var hh = Math.floor(tt/60); 
    var mm = (tt%60); 
    times[i] = ("" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2);
    if(times[i]=="0:00")
    {
        times[i]="12:00";
    } 
    else if(times[i]=="0:30")
    {
        times[i]="12:30";
    }

    tt = tt + x;
    }
    return times;
}
var count = 1;
console.log(data.length);
for (var i = 0; i < data.length; i++) 
{
    var duration = 0;
    var Value = 0;
    tempdata = 0;
    if(data[i].start!=0)
    {
        Value =data[i].start-(data[i-1].start+ data[i-1].duration);
    }
    $(".content").append(`
       <div class=" background" style="height:${data[i].duration}px;margin-top:5px;margin-left:${(count == 1 )? 0 : 100/count}%">  ${data[i].title}</div>
       `);
}




















    // if(tempValue < 0 && tempdata == 0 )
    // {
    //     for (var j = i; j<data.length; j++)
    //     {
    //         tempdata =data[j].start-(data[j-1].start + data[j-1].duration)
    //         if(tempdata < 0)
    //         {
    //         count++;
    //         }
    //         else
    //         {
    //         break;
    //         }
    //     }
    // }
    // if(tempValue < 0)
    //         {
    //         count++;
    //         }
//   $(".content").append(`
//         <div class=" background" style="height:${data[i].duration}px;margin-top:${tempValue}px;margin-left:${(count == 1 )? 0 : 100/count}%">
//         ${data[i].title}
//     </div>`)
//   if(count > 1)
//   {
//     count = count -1 ;
//   }
//   else
//   {
//     tempdata =0;
//   }

































// var data = [{
//     start: 0,
//     duration: 15,
//     title: "Exercise"
// }, {
//     start: 25,
//     duration: 30,
//     title: "Travel to work"
// }, {
//     start: 30,
//     duration: 30,
//     title: "Plan day"
// }, {
//     start: 60,
//     duration: 15,
//     title: "Review yesterday's commits"
// }, {
//     start: 100,
//     duration: 15,
//     title: "Code review"
// }, {
//     start: 180,
//     duration: 90,
//     title: "Have lunch with John"
// }, {
//     start: 360,
//     duration: 30,
//     title: "Skype call"
// }, {
//     start: 370,
//     duration: 45,
//     title: "Follow up with designer"
// }, {
//     start: 400,
//     duration: 30,
//     title: "Push up branch"
// }
// ];
// // var s=data.length;
// // for(var i=0;i<s;i++)
// // {
// //     var title1=data[i].title;
//     $("div").append(` <div class="code-review">
//     <div class="font-size">
//       8:00
//     </div>
//     <div class="sub-code-review">
//       Exercise
//     </div>
//   </div>
//     `).css("background-color","#e1ecf4");
    // $(".main-container").append(`
    // <div class=" code-review">
    //     <div class="font-size">8:00</div>
    //     <div class="sub-code-review excercise bg-color">${title1}</div>
    // </div>
    // `)
// }





// for (var i = 0; i < 9; i++) 
// {
//     var duration = 0;
//     var tempValue = 0;
//     if(data[i].start!=0)
//     {
//         tempValue =data[i].start-(data[i-1].start+ data[i-1].duration);
//     }
// }




// if (data[0].start === 0) {
//     var hr = document.createElement("hr");
//     document.getElementById("main").appendChild(hr);
    
//     var div = document.createElement("div");
   
//     div.innerHTML = "<b>8:00</b>";
  
//     document.getElementById("main").appendChild(div);


//     var div1 = document.createElement("div");
   
//     div1.style.height = `${data[0].duration}` + "px";
   

//     div1.innerHTML = `${data[0].title}`;
    
//     document.getElementById("main").appendChild(div1);

//     var divf = document.createElement("div");
//     document.getElementById("main").appendChild(divf);
    

// }







// console.log(typeof data);
// console.log(data);
// function myFunction() {

//     for (var i = 0; i < 10; i++) {
//         var tag = document.createElement("div");
//         tag.setAttribute('class', 'bg-color')
//         var text = document.createTextNode("exercise");
//         tag.appendChild(text);
//         var element = document.getElementById("new");
//         element.appendChild(tag);
//     }
// }

// var count = 1;
// for (var i = 0; i < 9; i++) 
// {
//     var duration = 0;
//     var tempValue = 0;
//     tempdata = 0;
//     if(data[i].start!=0)
//     {
//         tempValue =data[i].start-(data[i-1].start+ data[i-1].duration);
//     }

//     if(tempValue < 0 && tempdata == 0 )
//     {
//         for (var j = i; j<9; j++)
//         {
//             tempdata =data[j].start-(data[j-1].start + data[j-1].duration)
//             if(tempdata < 0)
//             {
//             count++;
//             }
//             else
//             {
//             break;
//             }
//         }
//     }
//   $(".content").append(`
//         <div class=" background" style="height:${data[i].duration}px;margin-top:${tempValue}px;margin-left:${(count == 1 )? 0 : 100/count}%">
//           ${data[i].title}
//     </div>`)
//   if(count > 1)
//   {
//     count = count -1 ;
//   }
//   else
//   {
//     tempdata =0;
//   }
// }



// var z=getTimeArray(); 
// for(i=0;i<z.length;i++)
// {
//     $("#container1").append(`<div  style="height:30px">${z[i]}</div>`);
// }
// function getTimeArray()
// {
//     var x = 30; 
//     var times = []; 
//     var tt = 60*8; 

   
//     for (var i=0;tt<19*60; i++) {
//     var hh = Math.floor(tt/60); 
//     var mm = (tt%60); 
//     times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2); 
//     tt = tt + x;
//     }
//     return times;
// }






// var myMap = {};

// myMap[newKey] = newValue;




// // Another method

// var myMap = new Map()
// myMap.set("key0","value")
// // ...
// myMap.has("key1"); 
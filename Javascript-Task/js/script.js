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
// var s=data.length;
// for(var i=0;i<s;i++)
// {
//     var title1=data[i].title;
    $("div").append(` <div class="code-review">
    <div class="font-size">
      8:00
    </div>
    <div class="sub-code-review">
      Exercise
    </div>
  </div>
    `).css("background-color","#e1ecf4");
    // $(".main-container").append(`
    // <div class=" code-review">
    //     <div class="font-size">8:00</div>
    //     <div class="sub-code-review excercise bg-color">${title1}</div>
    // </div>
    // `)
// }




// for(var key in data)
// {
    
//     for(var subkey in data[key])
//     {  
//         console.log(data[key][subkey]);
//         if(data[key][subkey]==0)
//         {
//             document.getElementById("section1").innerHTML = "8:00";
//             let content= document.getElementById("section4");
//             content.innerHTML = "Excercise";
//             content.classList.add("bg-color");
//         }
//         if(data[key][subkey]==25)
//         {
//             document.getElementById("section2").innerHTML = "8:30";
//             let content= document.getElementById("section5");
//             content.innerHTML = "Plan day";
//             content.classList.add("bg-color");
//         }
//         if(data[key][subkey]==30)
//         {
//             document.getElementById("section3").innerHTML = "8:30";
//             let content= document.getElementById("section6");
//             content.innerHTML = "Review yesterdays commits";
//             content.classList.add("bg-color");
//         }


//     }
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








// for(var key in data)
// {
    
//     for(var subkey in data[key])
//     {  
//         console.log(data[key][subkey]);
//         if(data[key][subkey]==0)
//         {
//             document.getElementById("section1").innerHTML = "8:00";
//             let content= document.getElementById("section4");
//             content.innerHTML = "Excercise";
//             content.classList.add("bg-color");
//         }
//         if(data[key][subkey]==25)
//         {
//             document.getElementById("section2").innerHTML = "8:30";
//             let content= document.getElementById("section5");
//             content.innerHTML = "Plan day";
//             content.classList.add("bg-color");
//         }
//         if(data[key][subkey]==30)
//         {
//             document.getElementById("section3").innerHTML = "8:30";
//             let content= document.getElementById("section6");
//             content.innerHTML = "Review yesterdays commits";
//             content.classList.add("bg-color");
//         }


//     }
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
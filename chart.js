
let preview = document.getElementById("preview");

preview.addEventListener('click', generateChartData)

function buildChart(object){
  
  let showStatCard = document.getElementById("showStatCard");
  showStatCard.classList.remove("hideDiv")
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    "type":"radar","data":{"labels":object.labels,"datasets":[{"data":object.values,"fill":true,"backgroundColor":"rgba(255, 99, 132, 0.2)","borderColor":"rgb(255, 99, 132)","pointBackgroundColor":"rgb(255, 99, 132)","pointBorderColor":"#fff","pointHoverBackgroundColor":"#fff","pointHoverBorderColor":"rgb(255, 99, 132)"}]},"options":{"scale": {"ticks": {"suggestedMin":0, "fontColor": "orange"},"angleLines":{"color":"black"}, "pointLabels":{"fontColor":"black", "fontFamily":"Cinzel", "fontSize":20}},"legend":{"display":false},"elements":{"line":{"tension":0,"borderWidth":3}}}
  });
}

// var ctx = document.getElementById('myChart')//.getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     "type":"radar","data":{"labels":["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],"datasets":[{"label":"My First Dataset","data":[65,59,90,81,56,55,40],"fill":true,"backgroundColor":"rgba(255, 99, 132, 0.2)","borderColor":"rgb(255, 99, 132)","pointBackgroundColor":"rgb(255, 99, 132)","pointBorderColor":"#fff","pointHoverBackgroundColor":"#fff","pointHoverBorderColor":"rgb(255, 99, 132)"},{"label":"My Second Dataset","data":[28,48,40,19,96,27,100],"fill":true,"backgroundColor":"rgba(54, 162, 235, 0.2)","borderColor":"rgb(54, 162, 235)","pointBackgroundColor":"rgb(54, 162, 235)","pointBorderColor":"#fff","pointHoverBackgroundColor":"#fff","pointHoverBorderColor":"rgb(54, 162, 235)"}]},"options":{"elements":{"line":{"tension":0,"borderWidth":3}}}
// });

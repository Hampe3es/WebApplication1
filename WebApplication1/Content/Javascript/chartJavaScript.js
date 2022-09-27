var xValues = [];
var yValuesTemp = [];
var yValuesFukt = [];


$.get("get_data", {}, function (data) {
    
    for (let i = 0; i < data.length; i++) {       //get time and add to array
        var addToArray = data[i]['Time'];
        xValues.push(addToArray);
    }
    /*console.log(xValues);*/

        
    for (let i = 0; i < data.length; i++) {       //get Red and add to array
        var addToArray = data[i]['Red'];
        yValuesTemp.push(addToArray);
    }
    /*console.log(yValuesTemp);*/


    for (let i = 0; i < data.length; i++) {       //get Blue and add to array
        var addToArray = data[i]['Blue'];
        yValuesFukt.push(addToArray);
    }
    /*console.log(yValuesFukt);*/
})

//-----------------------------------------------------------------------graf
let myChart = document.getElementById("myChart").getContext('2d');

const lineChart = new Chart(myChart, {
    type: "line",                        //typ av graf
    data: {
        labels: xValues,
        datasets: [{                         //Införandet av data
            label: 'temp',
            data: yValuesTemp,
            borderColor: "red",
            fill: false
        }, {
            label: 'fukt',
            data: yValuesFukt,
            borderColor: "blue",
            fill: false
        }]
    },
    options: {                           //ändrar utsende på grafen
        responsive: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 40,
            }
        },
        plugins: {
            legend: { display: false },
        }
    }
});

let length = xValues.length;
function chartWidth() {
    // document.getElementById("myChart").style.width = length * 10;
    document.getElementsByClass("body").style.backgroundcolor = "red";
}
chartWidth();
console.log(length * 10);

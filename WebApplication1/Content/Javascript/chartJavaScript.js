$.get("get_data", {}, function (data) {
    /*console.log(data);*/

    var xValues = [];
    var yValuesTemp = [];
    var yValuesFukt = [];


    for (let i = 0; i < data.length; i++) {       //get time and add to array
        var testvar = data[i]['Time'];
        xValues.push(testvar);
        /*console.log(testvar);*/
    }
    console.log(xValues);

        
    for (let i = 0; i < data.length; i++) {       //get Red and add to array
        var testvar = data[i]['Red'];
        yValuesTemp.push(testvar);
        /*console.log(testvar);*/
    }
    console.log(yValuesTemp);


    for (let i = 0; i < data.length; i++) {       //get Blue and add to array
        var testvar = data[i]['Blue'];
        yValuesFukt.push(testvar);
        /*console.log(testvar);*/
    }
    console.log(yValuesFukt);




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














})









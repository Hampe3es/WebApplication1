
function setMinMaxxValueDateTime() {                                       //Anger vad minoch max värderna är i select tid plus vilket värde de ska ha
    document.getElementById('startDate').min = xValuesLabels[0];
    document.getElementById('startDate').value = xValuesLabels[0];
    document.getElementById('startDate').max = xValuesLabels[xValuesLabels.length - 2];
    document.getElementById('endDate').min = xValuesLabels[1];
    document.getElementById('endDate').value = xValuesLabels[xValuesLabels.length - 1];
    document.getElementById('endDate').max = xValuesLabels[xValuesLabels.length - 1];
}


function setStartTime() {                                //set vilket tid grafen ska börja på 
    var startTime = document.getElementById('startDate').value;

    document.getElementById('endDate').min = startTime;
}

function setEndTime() {                                  //set vilket tid grafen ska sluta på
    var endTime = document.getElementById('endDate').value;

    document.getElementById('startDate').max = endTime;
}

function setTime() {
    var xLabelStartArray = [];
    var xLabelEndArray = [];
    var startTime = document.getElementById('startDate').value;
    var endTime = document.getElementById('endDate').value;

    const startTimeDate = new Date(startTime);
    const setStartTimeSeconds = startTimeDate.setMilliseconds(0, 0, 0, 0);

    const endTimeDate = new Date(endTime);
    const setEndTimeSeconds = endTimeDate.setMilliseconds(0, 0, 0, 0);


    for (let i = 0; i < xValuesDates.length; i++) {

        if (setStartTimeSeconds >= xValuesDates[i]) {
            xLabelStartArray.push(xValuesDates[i]);
        }

    }
    for (let i = 0; i < xValuesDates.length; i++) {

        if (setEndTimeSeconds >= xValuesDates[i]) {
            xLabelEndArray.push(xValuesDates[i]);
        }

    }

    myChart.config.options.scales.x.min = xValuesLabels[xLabelStartArray.length - 1];
    myChart.config.options.scales.x.max = xValuesLabels[xLabelEndArray.length - 1];

    document.getElementById('endDate').min = startTime;
    document.getElementById('startDate').max = endTime;
    myChart.update(); 

}



function selectTimeSpan() {                                  //select knapen som har fasta värden i sig
//    var selectTimeArray = [];

//    var today = new Date();
//    var setTodaySeconds = today.setMilliseconds(0, 0, 0, 0);

//    var lastHalfHour = new Date(today.getTime() - (1000 * 60 * 30));
//    var setLastHalfHourSeconds = lastHalfHour.setMilliseconds(0, 0, 0, 0);

//    var lastHour = new Date(today.getTime() - (1000 * 60 * 60));
//    var setLastHourSeconds = lastHour.setMilliseconds(0, 0, 0, 0);

//    var lastDay = new Date(today.getTime() - (1000 * 60 * 60 * 24));
//    var setLastDaySeconds = lastDay.setMilliseconds(0, 0, 0, 0);

//    var lastWeek = new Date(today.getTime() - (1000 * 60 * 60 * 24 * 7));
//    var setLastWeekSeconds = lastWeek.setMilliseconds(0, 0, 0, 0);

//    var lastMonthA = new Date(today.getTime() - (1000 * 60 * 60 * 24 * 7 * 30));
//    var setLastMonthASeconds = lastMonthA.setMilliseconds(0, 0, 0, 0);

//    //console.log(today);
//    //console.log(lastHalfHour);
//    //console.log(lastHour);
//    //console.log(lastDay);
//    //console.log(lastWeek);
//    //console.log(lastMonthA);

//    var x = document.getElementById('selectTime').value;
//    console.log(x);
    
//    if (x == 'HalfHour') {
//        for (let i = 0; i < xValuesDates.length; i++) {

//            if (setLastHalfHourSeconds >= xValuesDates[i] && setTodaySeconds <= xValuesDates[i]) {
//                selectTimeArray.push(xValuesDates[i]);
//            }
//            myChart.config.options.scales.x.min = xValuesLabels[selectTimeArray.length];
//        }
//    }
//    else if (x == 'Hour') {
//        for (let i = 0; i < xValuesDates.length; i++) {

//            if (setLastHourSeconds >= xValuesDates[i] && setTodaySeconds <= xValuesDates[i]) {
//                selectTimeArray.push(xValuesDates[i]);
//            }
//            myChart.config.options.scales.x.min = xValuesLabels[selectTimeArray.length];
//        }
//    }
//    else if (x == 'Day') {
//        for (let i = 0; i < xValuesDates.length; i++) {

//            if (setLastDaySeconds >= xValuesDates[i] && setTodaySeconds <= xValuesDates[i]) {
//                selectTimeArray.push(xValuesDates[i]);
//            }
//            myChart.config.options.scales.x.min = xValuesLabels[selectTimeArray.length];
//        }
//    }
//    else if (x == 'Week') {
//        for (let i = 0; i < xValuesDates.length; i++) {

//            if (setLastWeekSeconds >= xValuesDates[i] && setTodaySeconds <= xValuesDates[i]) {
//                selectTimeArray.push(xValuesDates[i]);
//            }
//            myChart.config.options.scales.x.min = xValuesLabels[selectTimeArray.length];
//        }
//    }
//    else if (x == 'Month') {
//        for (let i = 0; i < xValuesDates.length; i++) {

//            if (setLastMonthASeconds >= xValuesDates[i] && setTodaySeconds <= xValuesDates[i]) {
//                selectTimeArray.push(xValuesDates[i]);
//            }
//            myChart.config.options.scales.x.min = xValuesLabels[selectTimeArray.length];
//        }
//    }
//    else if (x == 'AllTime') {
        
//    }



    var x = document.getElementById('selectTime').value;
    console.log(x);
    myChart.config.options.scales.x.max = xValuesLabels[xValuesLabels.length - 1];
 
    if (x == 'HalfHour') {
        console.log(xValuesLabels[729]);
        myChart.config.options.scales.x.min = xValuesLabels[729];
    }
    else if (x == 'Hour') {
        console.log(xValuesLabels[714]);
        myChart.config.options.scales.x.min = xValuesLabels[714];
    }
    else if (x == 'Day') {
        console.log(xValuesLabels[26]);
        myChart.config.options.scales.x.min = xValuesLabels[26];
    }
    else if (x == 'Week') {
        console.log(xValuesLabels[0]);
        myChart.config.options.scales.x.min = xValuesLabels[0];
    }
    else if (x == 'Month') {
        console.log(xValuesLabels[0]);
        myChart.config.options.scales.x.min = xValuesLabels[0];
    }
    else if (x == 'AllTime') {
        console.log(xValuesLabels[0]);
        myChart.config.options.scales.x.min = xValuesLabels[0];
    }

    myChart.update();
}


function uppdate() {                                     //uppdatera graf    --Test funktion
                var update = myChart.config.options.scales.y.max;
                if (update != 60) {
                    myChart.config.options.scales.y.max = 60;
                }
                else {
                    myChart.config.options.scales.y.max = 40;
                }
                myChart.update();
}
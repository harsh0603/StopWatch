
    var seconds = 00;
    var tens = 00; 
    var appendTen = document.querySelector("#tens");
    var apppendSecond = document.querySelector("#seconds");
    var buttonStart = document.querySelector(".start");
    var buttonStop = document.querySelector(".stop");
    var buttonReset = document.querySelector(".reset");
    var Interval;


    buttonStart.addEventListener("click",function(){
            clearInterval(Interval);
            Interval = setInterval(startTime,10);
    
        });
    // buttonStart.onclick() = function(){
    //     clearInterval(Interval);
    //     Interval = setInterval(startTime,10);

    // }


    buttonStop.addEventListener("click",function(){
        clearInterval(Interval);
    });

    

    buttonReset.addEventListener("click",function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTen.innerHTML = tens;
        apppendSecond.innerHTML = seconds;
    });




    function startTime(){
        tens++;
        if(tens<=9){
            appendTen.innerHTML = "0"+tens;
        }

        if(tens>9){
            appendTen.innerHTML = tens;
        }

        if(tens>99){
            seconds++;
            tens = 0
            appendTen.innerHTML = "0"+tens;
            apppendSecond.innerHTML = "0"+seconds; 
        }
        if(seconds>9){
            apppendSecond.innerHTML = seconds;
        }
    }



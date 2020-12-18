//ilości
var seconds = 0;
var minutes = 0;
var hours = 0;
var days = 0;
var tp = 0;
var ts = 100;
//ustawienia
var update_rate = 50;
//generatory
var seconds_generator = 0;
var minutes_generator = 0;
var hours_generator = 0;
//koszty
var sg_cost = 0;
var mg_cost = 10;
var hg_cost = 10;
document.getElementById("tp").innerHTML = "Time Points: " + tp;
document.getElementById("ts").innerHTML = "Time Stability: " + ts +"%";
document.getElementById("ms").innerHTML = update_rate +"ms"
document.getElementById("seconds").innerHTML = seconds;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("hours").innerHTML = hours;
document.getElementById("days").innerHTML = days;
document.getElementById("sg").innerHTML = "Stopwatches: " + seconds_generator;
document.getElementById("mg").innerHTML = "Countdown timers: " + minutes_generator;
document.getElementById("hg").innerHTML = "Hour meters: " + hours_generator;
document.getElementById("sc").innerHTML = "Cost: " + sg_cost;
document.getElementById("mc").innerHTML = "Cost: " + mg_cost;
document.getElementById("hc").innerHTML = "Cost: " + hg_cost;
setInterval(() =>{
    seconds += seconds_generator * 0.5;
    minutes += minutes_generator * 0.5;
    hours += hours_generator * 0.5;
    seconds = Math.round(seconds);
    minutes = Math.round(minutes);
    hours = Math.round(hours);
    days = Math.round(days);
    if(seconds >= 1000000 && minutes >= 100000 && hours >= 100000){
        document.getElementById("finb").style.display = "block";
    }
    if(ts <= 0){
        document.getElementById("ts").innerHTML = "You broke the time"
        document.getElementById("bd").style.display = "none";
        document.getElementById("bdd").style.display = "none";
        document.getElementById("klep").style.display = "block";
    }
    else{
        document.getElementById("finb").style.display = "none";
        document.getElementById("klep").style.display = "none";
        document.getElementById("ts").innerHTML = "Time Stability: " + ts +"%";
        if(seconds >= 60){
            seconds = 0;
            minutes +=1;
        }
        if(minutes >= 60){
            minutes = 0;
            hours += 1;
        }
        if(hours >= 24){
            hours = 0;
            days += 1;
        }
        if(days >= 365){
            days = 0;
            tp += 1;
        }
    }
    document.getElementById("tp").innerHTML = "Time Points: " + tp;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("days").innerHTML = days;
    document.getElementById("sg").innerHTML = "Seconds Generators: " + seconds_generator;
    document.getElementById("mg").innerHTML = "Minutes Generators: " + minutes_generator;
    document.getElementById("hg").innerHTML = "Hours Generators: " + hours_generator;
    document.getElementById("sc").innerHTML = "Cost: " + sg_cost + "s";
    document.getElementById("mc").innerHTML = "Cost: " + mg_cost + "Min";
    document.getElementById("hc").innerHTML = "Cost: " + hg_cost + "H";
},update_rate)
function buysg(){
    if(seconds >= sg_cost){
        seconds -= sg_cost;
        seconds_generator += 1;
        sg_cost += 10;
    }
    else if(minutes * 60 >= sg_cost){
        seconds_generator += 1;
        minutes -= sg_cost / 60;
        sg_cost += 10;
    }
}
function buymg(){
    if(minutes >= mg_cost){
        minutes -= mg_cost;
        minutes_generator += 1;
        mg_cost += 100;
    }
    else if(hours * 60 >= mg_cost){
        minutes_generator += 1;
        hours -= mg_cost / 60;
        mg_cost += 100;
    }
}
function buyhg(){
    if(hours >= hg_cost){
        hours -= hg_cost;
        hours_generator += 1;
        hg_cost += 500;
    }
    else if(days * 24 >= hg_cost){
        hours_generator += 1;
        days -= hg_cost / 24;
        hg_cost += 500;
    }
}
function damaget(){
    if(tp >= 1){
    ts -= tp * 1.5
    //ilości
    seconds = 0;
    minutes = 10;
    hours = 10;
    days = 0;
    tp = 0;
    //generatory
    seconds_generator = 0;
    minutes_generator = 0;
    hours_generator = 0;
    //koszty
    sg_cost = 0;
    mg_cost = 10;
    hg_cost = 10;
    }
}
function sike(){
    location.reload();
}
function updaterate(){
    if(update_rate == 50){
        update_rate = 200;
    }
    else if(update_rate == 200){
        update_rate = 100;
    }
    else if(update_rate == 100){
        update_rate = 50;
    }
    document.getElementById("ms").innerHTML = update_rate +"ms"
}
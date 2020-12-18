//ilości
var seconds = 0;
var minutes = 0;
var hours = 0;
var days = 0;
var tp = 0;
var ts = 100;
//ustawienia
var update_rate = 50;
var autobuy_rate = 50;
//generatory
var seconds_generator = 0;
var minutes_generator = 0;
var hours_generator = 0;
//koszty
var sg_cost = 0;
var mg_cost = 10;
var hg_cost = 10;
//koszty ale do pokazania
var sgs_cost;
var mgs_cost;
var hgh_cost;
//Autobuy
var seconds_autobyers = false;
var minutes_autobyers = false;
var hours_autobyers = false;
//save autobuy
var sa_on = true;
var ma_on = true;
var ha_on = true;
//checkers
var prestige = false;
document.getElementById("bdd").style.display = "none";
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
    sgs_cost = sg_cost;
    mgs_cost = mg_cost;
    hgs_cost = hg_cost;
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
        if(tp == 1 && !prestige){
            document.getElementById("bdd").style.display = "block";
            prestige = true;
        }
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
setInterval(()=> {
    if(seconds_autobyers && sa_on){
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
        else if(hours * 3600 >= sg_cost){
            seconds_generator += 1;
            hours -= sg_cost / 3600;
            sg_cost += 10;
        }
        else if(days * 86400 >= sg_cost){
            seconds_generator += 1;
            days -= sg_cost / 86400;
            sg_cost += 10;
        }
    }
    if(minutes_autobyers && ma_on){
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
        else if(days * 1440 >= mg_cost){
            minutes_generator += 1;
            days -= mg_cost / 1440;
            mg_cost += 100;
        }
    }
    if(hours_autobyers && ha_on){
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
},autobuy_rate)
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
    else if(hours * 3600 >= sg_cost){
        seconds_generator += 1;
        hours -= sg_cost / 3600;
        sg_cost += 10;
    }
    else if(days * 86400 >= sg_cost){
        seconds_generator += 1;
        days -= sg_cost / 86400;
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
    else if(days * 1440 >= mg_cost){
        minutes_generator += 1;
        days -= mg_cost / 1440;
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
 minutes = 0;
 hours = 0;
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
//koszty ale do pokazania
 sgs_cost;
 mgs_cost;
 hgh_cost;
//autobuy
 seconds_autobyers = false;
 minutes_autobyers = false;
 hours_autobyers = false;
//save autobuy
 sa_on = true;
 ma_on = true;
 ha_on = true;
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
function autobys(){
    if(!seconds_autobyers){
        if(minutes >= 60){
            minutes -= 60;
            seconds_autobyers = true;
            document.getElementById("sa").innerHTML = "Arleady Buyed!"
            document.getElementById("as").innerHTML = "On"
        }
        else if(hours >= 1){
            hours -= 1;
            seconds_autobyers = true;
            document.getElementById("sa").innerHTML = "Arleady Buyed!"
            document.getElementById("as").innerHTML = "On"
        }
    }
    if(seconds_autobyers && sa_on){
        sa_on = false;
        document.getElementById("as").innerHTML = "Off"
    }
    else{
        sa_on = true;
        document.getElementById("as").innerHTML = "On"
    }
}
function autobym(){
    if(!minutes_autobyers){
        if(hours >= 24){
            hours -= 24;
            minutes_autobyers = true;
            document.getElementById("ma").innerHTML = "Arleady Buyed!"
            document.getElementById("am").innerHTML = "On"
        }
        else if(days >= 1){
            days -= 1;
            minutes_autobyers = true;
            document.getElementById("ma").innerHTML = "Arleady Buyed!"
            document.getElementById("am").innerHTML = "On"
        }
    }
    if(minutes_autobyers && ma_on){
        ma_on = false;
        document.getElementById("am").innerHTML = "Off"
    }
    else{
        ma_on = true;
        document.getElementById("am").innerHTML = "On"
    }
}
function autobuyh(){
    if(!hours_autobyers){
        if(days >= 365){
            days -= 365;
            hours_autobyers = true;
            document.getElementById("ha").innerHTML = "Arleady Buyed!"
            document.getElementById("ah").innerHTML = "On"
        }
        else if(tp >= 1){
            tp -= 1;
            hours_autobyers = true;
            document.getElementById("ha").innerHTML = "Arleady Buyed!"
            document.getElementById("ah").innerHTML = "On"
        }
    }
    if(hours_autobyers && ha_on){
        ha_on = false;
        document.getElementById("ah").innerHTML = "Off"
    }
    else{
        ha_on = true;
        document.getElementById("ah").innerHTML = "On"
    }
}
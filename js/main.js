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
//Interval cost
var isc = 1;
var imc = 1;
var ihc = 1;
//Interval
var is = 1000;
var im = 1000;
var ih = 1000;
starts();
startm();
starth();
document.getElementById("bdd").style.display = "none";
document.getElementById("selectgene").style.display = "none";
document.getElementById("selectqol").style.display = "none";
document.getElementById("selectsettings").style.display = "none";
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
    document.getElementById("isc").innerHTML = "Cost: " + isc + " TP";
    document.getElementById("imc").innerHTML = "Cost: " + imc + " TP";
    document.getElementById("ihc").innerHTML = "Cost: " + ihc + " TP";
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
function starts(){
s = setInterval(()=> {
    if(seconds_autobyers && sa_on){
        if(seconds >= sg_cost){
            seconds -= sg_cost;
            seconds_generator += 1;
            sg_cost += seconds_generator;
        }
        else if(minutes * 60 >= sg_cost){
            seconds_generator += 1;
            minutes -= sg_cost / 60;
            sg_cost += seconds_generator;
        }
        else if(hours * 3600 >= sg_cost){
            seconds_generator += 1;
            hours -= sg_cost / 3600;
            sg_cost += seconds_generator;
        }
        else if(days * 86400 >= sg_cost){
            seconds_generator += 1;
            days -= sg_cost / 86400;
            sg_cost += seconds_generator;
        }
    }
},is)
}
function startm(){
m = setInterval(()=> {
    if(minutes_autobyers && ma_on){
        if(minutes >= mg_cost){
            minutes -= mg_cost;
            minutes_generator += 1;
            mg_cost += minutes_generator * 10 + 10;
        }
        else if(hours * 60 >= mg_cost){
            minutes_generator += 1;
            hours -= mg_cost / 60;
            mg_cost += minutes_generator * 10 + 10;
        }
        else if(days * 1440 >= mg_cost){
            minutes_generator += 1;
            days -= mg_cost / 1440;
            mg_cost += minutes_generator * 10 + 10;
        }
    }
},im)
}
function starth(){
h = setInterval(()=> {
    if(hours_autobyers && ha_on){
        if(hours >= hg_cost){
            hours -= hg_cost;
            hours_generator += 1;
            hg_cost += hours_generator * 100 + 10;
        }
        else if(days * 24 >= hg_cost){
            hours_generator += 1;
            days -= hg_cost / 24;
            hg_cost += hours_generator * 100 + 10;
        }
    }
},ih)
}
function buysg(){
    if(seconds >= sg_cost){
        seconds -= sg_cost;
        seconds_generator += 1;
        sg_cost += seconds_generator;
    }
    else if(minutes * 60 >= sg_cost){
        seconds_generator += 1;
        minutes -= sg_cost / 60;
        sg_cost += seconds_generator;
    }
    else if(hours * 3600 >= sg_cost){
        seconds_generator += 1;
        hours -= sg_cost / 3600;
        sg_cost += seconds_generator;
    }
    else if(days * 86400 >= sg_cost){
        seconds_generator += 1;
        days -= sg_cost / 86400;
        sg_cost += seconds_generator;
    }
}
function buymg(){
    if(minutes >= mg_cost){
        minutes -= mg_cost;
        minutes_generator += 1;
        mg_cost += minutes_generator * 10 + 10;
    }
    else if(hours * 60 >= mg_cost){
        minutes_generator += 1;
        hours -= mg_cost / 60;
        mg_cost += minutes_generator * 10 + 10;
    }
    else if(days * 1440 >= mg_cost){
        minutes_generator += 1;
        days -= mg_cost / 1440;
        mg_cost += minutes_generator * 10 + 10;
    }
}
function buyhg(){
    if(hours >= hg_cost){
        hours -= hg_cost;
        hours_generator += 1;
        hg_cost += hours_generator * 100 + 10;
    }
    else if(days * 24 >= hg_cost){
        hours_generator += 1;
        days -= hg_cost / 24;
        hg_cost += hours_generator * 100 + 10;
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
 //Interval cost
isc = 1;
imc = 1;
ihc = 1;
//Interval
is = 1000;
im = 1000;
ih = 1000;
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
            document.getElementById("sa").innerHTML = "Already Purchased!"
            document.getElementById("as").innerHTML = "On"
        }
        else if(hours >= 1){
            hours -= 1;
            seconds_autobyers = true;
            document.getElementById("sa").innerHTML = "Already Purchased!"
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
            document.getElementById("ma").innerHTML = "Already Purchased!"
            document.getElementById("am").innerHTML = "On"
        }
        else if(days >= 1){
            days -= 1;
            minutes_autobyers = true;
            document.getElementById("ma").innerHTML = "Already Purchased!"
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
            document.getElementById("ha").innerHTML = "Already Purchased!"
            document.getElementById("ah").innerHTML = "On"
        }
        else if(tp >= 1){
            tp -= 1;
            hours_autobyers = true;
            document.getElementById("ha").innerHTML = "Already Purchased!"
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
function selectgene(){
    document.getElementById("selectgene").style.display = "block";
    document.getElementById("selectqol").style.display = "none";
    document.getElementById("selectsettings").style.display = "none";
}
function selectqol(){
    document.getElementById("selectgene").style.display = "none";
    document.getElementById("selectqol").style.display = "block";
    document.getElementById("selectsettings").style.display = "none";
}
function selectsettings(){
    document.getElementById("selectgene").style.display = "none";
    document.getElementById("selectqol").style.display = "none";
    document.getElementById("selectsettings").style.display = "block";
}
function upgradeis(){
    if(isc == 1 && tp >= 1){
        isc += 1;
        tp -= 1;
        is = 500;
        clearInterval(s);
        starts(s);
    }
    else if(isc == 2 && tp >= 2){
        isc += 1;
        tp -= 2;
        is = 100;
        clearInterval(s);
        starts(s);
    }
    else if(isc == 3 && tp >= 3){
        isc = "No more upgrades";
        tp -= 3;
        is = 50;
        clearInterval(s);
        starts(s);
    }
}
function upgradeim(){
    if(imc == 1 && tp >= 1){
        imc += 1;
        tp -= 1;
        im = 500;
        clearInterval(m);
        startm(m);
    }
    else if(imc == 2 && tp >= 2){
        imc += 1;
        tp -= 2;
        im = 100;
        clearInterval(m);
        startm(m);
    }
    else if(imc == 3 && tp >= 3){
        imc = "No more upgrades";
        tp -= 3;
        im = 50;
        clearInterval(m);
        startm(m);
    }
}
function upgradeih(){
    if(ihc == 1 && tp >= 1){
        ihc += 1;
        tp -= 1;
        ih = 500;
        clearInterval(h);
        starth(h);
    }
    else if(ihc == 2 && tp >= 2){
        ihc += 1;
        tp -= 2;
        ih = 100;
        clearInterval(h);
        starth(h);
    }
    else if(ihc == 3 && tp >= 3){
        ihc = "No more upgrades";
        tp -= 3;
        ih = 50;
        clearInterval(h);
        starth(h);
    }
}
function save(){
    //ilości
    setCookie("seconds", seconds, 365);
    setCookie("minutes", minutes, 365);
    setCookie("hours", hours, 365);
    setCookie("days", days, 365);
    setCookie("tp", tp, 365);
    setCookie("ts", ts, 365);
    //ustawienia
    setCookie("update_rate", update_rate, 365);
    setCookie("autobuy_rate", autobuy_rate, 365);
    //generatory
    setCookie("seconds_generator", seconds_generator, 365);
    setCookie("minutes_generator", minutes_generator, 365);
    setCookie("hours_generator", hours_generator, 365);
    //koszty
    setCookie("sg_cost", sg_cost, 365);
    setCookie("mg_cost", mg_cost, 365);
    setCookie("hg_cost", hg_cost, 365);
    //Autobuy
    setCookie("seconds_autobyers", seconds_autobyers, 365);
    setCookie("minutes_autobyers", minutes_autobyers, 365);
    setCookie("hours_autobyers", hours_autobyers, 365);
    //save autobuy
    setCookie("sa_on", sa_on, 365);
    setCookie("ma_on", ma_on, 365);
    setCookie("ha_on", ha_on, 365);
    //checkers
    setCookie("prestige", prestige, 365);
    //Interval cost
    setCookie("isc", isc, 365);
    setCookie("imc", imc, 365);
    setCookie("ihc", ihc, 365);
    //Interval
    setCookie("is", is, 365);
    setCookie("im", im, 365);
    setCookie("ih", ih, 365);
}
function load(){
//ilości
seconds = getCookie("seconds");
minutes = getCookie("minutes");
hours = getCookie("hours");
days = getCookie("days");
tp = getCookie("tp");
ts = getCookie("ts");
//ustawienia
update_rate = getCookie("update_rate");
autobuy_rate = getCookie("autobuy_rate");
//generatory
seconds_generator = getCookie("seconds_generator");
minutes_generator = getCookie("minutes_generator");
hours_generator = getCookie("hours_generator");
//koszty
sg_cost = getCookie("sg_cost");
mg_cost = getCookie("mg_cost");
hg_cost = getCookie("hg_cost");
//Autobuy
seconds_autobyers = getCookie("seconds_autobyers");
minutes_autobyers = getCookie("minutes_autobyers");
hours_autobyers = getCookie("hours_autobyers");
//save autobuy
sa_on = getCookie("sa_on");
ma_on = getCookie("ma_on");
ha_on = getCookie("ha_on");
//checkers
prestige = getCookie("prestige");
//Interval cost
isc = getCookie("isc");
imc = getCookie("imc");
ihc = getCookie("ihc");
//Interval
is = getCookie("is");
im = getCookie("im");
ih = getCookie("ih");
}
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
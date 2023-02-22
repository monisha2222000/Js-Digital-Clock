function time() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let ap = time.getHours() >= 12 ? "PM" : "AM";
  
    if (hour == 0) {
      hour = 12;
    }
  
    if (hour > 12) {
      hour = hour - 12;
    }
  
    if (hour < 10) {
      hour = "0" + hour;
    }
  
    if (min < 10) {
      min = "0" + min;
    }
  
    if (sec < 10) {
      sec = "0" + sec;
    }
  
    if (hour > 8 && hour <= 12 && ap === "AM") {
      // document.getElementById("getup").innerText = "GOOD MORNING!! WAKE UP!!";
      document.getElementById("wakeup").innerText =
        "GRAB SOME HEALTHY BREAKEFAST";
      //document.getElementById("image").style.backgroundImage =
      ("url('Images/morning.jpg')");
    } else if (hour >= 1 && hour <= 4 && ap === "PM") {
      // document.getElementById("getup").innerText =
      //   "GOOD AFTERNOON !! TAKE SOME SLEEP!!";
      document.getElementById("wakeup").innerText = "LET'S HAVE SOME LUNCH!!";
      // document.getElementById("image").style.backgroundImage =
      //   "url('Images/afternoon.png')";
    } else if (hour > 4 && hour <= 8 && ap === "PM") {
      //document.getElementById("getup").innerText = "GOOD EVENING!!";
      document.getElementById("wakeup").innerText =
        "STOP YAWNING, GET SOME TEA!! ITS JUST EVENING!!";
      // document.getElementById("image").style.backgroundImage =
      //   "url('Images/evening.png')";
    } else if (hour > 8 && hour <= 12 && ap === "PM") {
      //document.getElementById("getup").innerText = "GOOD NIGHT!!";
      document.getElementById("wakeup").innerText =
        "CLOSE YOUR EYES AND GO TO SLEEP";
      // document.getElementById("image").style.backgroundImage =
      //   "url('Images/night.png')";
    }
  
    document.getElementById("hh").innerText = hour;
    document.getElementById("mm").innerText = min;
    document.getElementById("ss").innerText = sec;
    document.getElementById("ampm").innerHTML = ap;
  }
  setInterval(time, 1000);
  
  function makeTime() {
    var content = document.getElementById("uthja");
    var value = content.options[content.selectedIndex].text;
    document.getElementById("wakeupTime").innerHTML = value;
  
    var content = document.getElementById("lunch");
    var value = content.options[content.selectedIndex].text;
    document.getElementById("lunchTime").innerHTML = value;
  
    var content = document.getElementById("nap");
    var value = content.options[content.selectedIndex].text;
    document.getElementById("napTime").innerHTML = value;
  
    var content = document.getElementById("night");
    var value = content.options[content.selectedIndex].text;
    document.getElementById("nightTime").innerHTML = value;
  }
  
  function setAlarm() {
    let p = document.getElementById("uthja").value;
    let q = document.getElementById("lunch").value;
    let r = document.getElementById("nap").value;
    let s = document.getElementById("night").value;
  
    let hour = new Date().getHours();
  
    if (p == hour) {
      document.getElementById("getup").innerText = "GOOD MORNING!! WAKE UP!!";
      // document.getElementById("wakeup").innerText =
      //   "GRAB SOME HEALTHY BREAKEFAST";
      document.getElementById("image").style.backgroundImage =
        "url('Images/morning.jpg')";
    }
  
    if (q == hour) {
      document.getElementById("getup").innerText =
        "GOOD AFTERNOON !! TAKE SOME SLEEP!!";
      //document.getElementById("wakeup").innerText = "LETS HAVE SOME LUNCH!!";
      document.getElementById("image").style.backgroundImage =
        "url('Images/afternoon.png')";
    }
  
    if (r == hour) {
      document.getElementById("getup").innerText = "GOOD EVENING!!";
      // document.getElementById("wakeup").innerText =
      //   "STOP YAWNING,LETS HAVE SOME TEA!! IT'S JUST EVENING!!";
      document.getElementById("image").style.backgroundImage =
        "url('Images/evening.png')";
    }
  
    if (s == hour) {
      document.getElementById("getup").innerText = "GOOD NIGHT!!";
      // document.getElementById("wakeup").innerText =
      //   "CLOSE YOUR EYES AND GO TO SLEEP!!";
      document.getElementById("image").style.backgroundImage =
        "url('Images/night.png')";
    }
    makeTime();
  }
  
  let btn_alrm = document.getElementById("alarmSet");
  btn_alrm.addEventListener("click", setAlarm);
  
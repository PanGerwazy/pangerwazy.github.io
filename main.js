$('document').ready(function(){

  var endDate = '2016-08-06';
  var days = $("#d");
  var hours = $("#h");
  var seconds = $("#s");
  var minutes = $("#m");



  function getTimeRemaining(endDate){
    var time = Date.parse(endDate) - Date.parse(new Date()); // parse changes time to miliseconds. And here we get remaiming time in ms
    var sec = Math.floor( (time/1000) % 60 ); // 1k ms == 1s. % 60 to get remaiming seconds, not already passed seconds
    var min = Math.floor( (time/1000/60)%60 );
    var hour = Math.floor( (time/(1000*60*60)) % 24 );
    var day = Math.floor( time/(1000*60*60*24) );

    return {
      'total': Math.abs(time),
      'days': Math.abs(day),
      'hours': Math.abs(hour),
      'minutes': Math.abs(min),
      'seconds': Math.abs(sec)
    };
  }

  function updateClock () {
    var t = getTimeRemaining(endDate);
    days.html("<h2>Days<br/>"+t.days);
    hours.html("<h2>Hours<br/>"+t.hours);
    minutes.html("<h2>Minutes<br/>"+t.minutes);
    seconds.html("<h2>Seconds<br/>"+t.seconds);
  }



  updateClock();
  setInterval(updateClock, 1000);

});

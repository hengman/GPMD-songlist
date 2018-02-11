const WebSocket = require('ws');
var fs = require('fs');
const ws = new WebSocket('ws://localhost:5672');

var queue

//ws.on('open', function open() {
//  ws.send('something');
//});

ws.on('message', function incoming(data) {
  var jsonContent = JSON.parse(data);
  if(jsonContent.channel == "playState") {
      console.log("playstate");
  } else if (jsonContent.channel == "track") {
    //console.log(jsonContent.payload);
console.log("track");
  } else if (jsonContent.channel == "time") {
    var current = jsonContent.payload.current;
    var total = jsonContent.payload.total;
    //console.log((current/total*100).toFixed(2));
  } else if (jsonContent.channel == "queue") {
    console.log("queue");
  }

  //console.log(data);
});
//function findinqueue(songTitle) {
//  var length = Object.keys(queue).length;
//  for (i = 0; i < length; i++) {
//    if (queue[no].title == songTitle) {
//      console.log(i);
//      break;
//    }
//  }
//}

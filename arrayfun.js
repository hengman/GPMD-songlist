module.exports = {


  array: function(songName, socket) {
    var jsonContent;
    require('fs').readFile('queue.txt', function(err, data) {
      if (err) {
          console.log(err);
      } else {
      var jsonContent = JSON.parse(data);
  }
    var now;
    var next;
    var two;
    var length = Object.keys(jsonContent).length;

    for (var i = 1; i < length; i++) {
      if (jsonContent[i].title == songName) {
        now = i;
        next = i + 1;
        two = i + 2
        console.log(i);
        break;
      }
    }

    switch (length - next) {
      case 0:
      for (var i = 0; i < 5;) {
        //1
        i++
        socket.emit('songTitle' + i, "NONE");
        socket.emit('songArtist' + i, "NONE");
        socket.emit('songAlbum' + i, "NONE");
        socket.emit('albumArt' + i, "NONE");
      }
      break;
      case 1:
        var title1 = jsonContent[next].title;
        var artist1 = jsonContent[next].artist;
        var album1 = jsonContent[next].album;
        var albumArt1 = jsonContent[next].albumArt;
        i++
        socket.emit('songTitle1', title1);
        socket.emit('songArtist1', artist1);
        socket.emit('songAlbum1', album1);
        socket.emit('albumArt1', albumArt1);

        for (var i = 1; i < 5;) {
          i++
          socket.emit('songTitle' + i, "NONE");
          socket.emit('songArtist' + i, "NONE");
          socket.emit('songAlbum' + i, "NONE");
          socket.emit('albumArt' + i, "NONE");
        }
        break;
      case 2:
        var title1 = jsonContent[next].title;
        var artist1 = jsonContent[next].artist;
        var album1 = jsonContent[next].album;
        var albumArt1 = jsonContent[next].albumArt;

        var title2 = jsonContent[two].title;
        var artist2 = jsonContent[two].artist;
        var album2 = jsonContent[two].album;
        var albumArt2 = jsonContent[two].albumArt;

        socket.emit('songTitle1', title1);
        socket.emit('songArtist1', artist1);
        socket.emit('songAlbum1', album1);
        socket.emit('albumArt1', albumArt1);

        socket.emit('songTitle2', title2);
        socket.emit('songArtist2', artist2);
        socket.emit('songAlbum2', album2);
        socket.emit('albumArt2', albumArt2);

        for (var i = 2; i < 5;) {
          //1

          i++
          socket.emit('songTitle' + i, "NONE");
          socket.emit('songArtist' + i, "NONE");
          socket.emit('songAlbum' + i, "NONE");
          socket.emit('albumArt' + i, "NONE");

        }
        break;
      case 3:
      console.log(3);
        socket.emit('songTitle4', "NONE");
        socket.emit('songArtist4', "NONE");
        socket.emit('songAlbum4', "NONE");
        socket.emit('albumArt4', "NONE");

        socket.emit('songTitle5', "NONE");
        socket.emit('songArtist5', "NONE");
        socket.emit('songAlbum5', "NONE");
        socket.emit('albumArt5', "NONE");
        var c = 1
        for (var i = next; i < (next + 3);) {
          //1
          var title = jsonContent[i].title;
          var artist = jsonContent[i].artist;
          var album = jsonContent[i].album;
          var albumArt = jsonContent[i].albumArt;
          i++
          socket.emit('songTitle' + c, title);
          socket.emit('songArtist' + c, artist);
          socket.emit('songAlbum' + c, album);
          socket.emit('albumArt' + c, albumArt);
          c++


        }
        break;
      case 4:
      console.log("4");
        socket.emit('songTitle5', "NONE");
        socket.emit('songArtist5', "NONE");
        socket.emit('songAlbum5', "NONE");
        socket.emit('albumArt5', "NONE");
        var b = 1;
        for (var i = next; i < (next + 4);) {
          //1
          var title = jsonContent[i].title;
          var artist = jsonContent[i].artist;
          var album = jsonContent[i].album;
          var albumArt = jsonContent[i].albumArt;
          i++

          socket.emit('songTitle' + b, title);
          socket.emit('songArtist' + b, artist);
          socket.emit('songAlbum' + b, album);
          socket.emit('albumArt' + b, albumArt);
          b++


        }
        break;
      default:
      console.log("default");
      var a = 1;
        for (var i = next; i < (next + 5);) {
          //1
          var title = jsonContent[i].title;
          var artist = jsonContent[i].artist;
          var album = jsonContent[i].album;
          var albumArt = jsonContent[i].albumArt;
          i++
          socket.emit('songTitle' + a, title);
          socket.emit('songArtist' + a, artist);
          socket.emit('songAlbum' + a, album);
          socket.emit('albumArt' + a, albumArt);
          a++
        }
    }
  });
  console.log("queueupdated");
}
}

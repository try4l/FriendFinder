// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  console.log("module.exports: apiRoutes");
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    console.log('apiRoutes: app.get "/api/friends" ');
    console.log("friends: ", friends);
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
    console.log('apiRoutes: app.post "/api/friends" ');
    // Note the code here. Our "server" will respond to requests and let users know ...
    // req.body is available since we're using the body-parser middleware
    var reqBody = req.body;
    var name = req.body.name;
    var photo = req.body.photo;
    var scores = req.body.scores;
    var bestDistance = 100;
    var bestName = '';
    var bestImg = '';
    console.log("req.body: ", req.body);
    console.log("req.body.name ", req.body.name);
    console.log("req.body.photo ", req.body.photo);
    console.log("req.body.scores ", req.body.scores);

    for (i=0; i<friends.length; i++) {
      // check score match
      var distance = 0;
      for (j=0; j<scores.length; j++) {
        distance += Math.abs(scores[j]-friends[i].scores[j]);
      }
      if (distance<bestDistance) {
        bestDistance = distance;
        bestName = friends[i].name;
        bestImg = friends[i].photo;
      }
    }

    console.log("bestDistance: ", bestDistance);
    console.log("bestName: ", bestName);
    console.log("bestImg: ", bestImg);


    friends.push(req.body);

    // Send response
    res.json({bestName: bestName, bestImg: bestImg});
    
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//  app.post("/api/clear", function() {
    app.get("/api/clear", function(req, res) {
    console.log('apiRoutes: app.post "/api/clear" ');
    // Empty out the array of data
    friends = [];

    console.log(friends);
    res.json(friends);
  });

    //app.post("/api/fill", function() {
      app.get("/api/fill", function(req, res) {
      console.log('apiRoutes: app.post "/api/fill" ');
    // Fill the the array of data
    friends = [
      {
      "name":"Ahmed",
        "photo":"https://images.pexels.com/photos/428339/pexels-photo-428339.jpeg?h=350&auto=compress&cs=tinysrgb",
        "scores":[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
      },
      {
        "name":"Cap'n Skully",
        "photo":"https://images.pexels.com/photos/206351/pexels-photo-206351.jpeg?h=350&auto=compress&cs=tinysrgb",
        "scores":[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      },
      {
        "name":"Ms Groucho",
        "photo":"https://images.pexels.com/photos/2015/man-person-woman-face.jpg?h=350&auto=compress&cs=tinysrgb",
        "scores":[2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      },    
      {
        "name":"Al Paca",
        "photo":"https://images.pexels.com/photos/257534/pexels-photo-257534.jpeg?h=350&auto=compress&cs=tinysrgb",
        "scores":[3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
      },
      {
        "name":"Sheila B Mine",
        "photo":"https://images.pexels.com/photos/167584/pexels-photo-167584.jpeg?h=350&auto=compress&cs=tinysrgb",
        "scores":[4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
      },
      {
        "name":"Chaz Furman",
        "photo":"https://images.pexels.com/photos/4618/man-person-hat-fur.jpg?h=350&auto=compress&cs=tinysrgb",
        "scores":[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
      },
      {
        "name":"Pal Canis",
        "photo":"https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?h=350&auto=compress&cs=tinysrgb",
        "scores":[2, 2, 2, 2, 2, 1, 1, 1, 1, 1]
      },
      {
        "name":"Kitty Flufferton",
        "photo":"https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?h=350&auto=compress&cs=tinysrgb",
        "scores":[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
      },
      {
        "name":"Cousin Iterlass",
        "photo":"https://images.pexels.com/photos/2867/sunglasses-woman-girl-faceless.jpg?h=350&auto=compress&cs=tinysrgb",
        "scores":[3, 1, 4, 1, 5, 3, 1, 4, 1, 5]
      },
    ];

    console.log(friends);
    //res.json(friends);
  });
};


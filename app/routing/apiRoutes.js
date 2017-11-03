// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");
//var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  console.log("ApiRoutes");
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    console.log("apiRoutes: app.get");
    res.json(friends);
  });

  // app.get("/api/waitlist", function(req, res) {
  //   res.json(waitListData);
  // });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    console.log("apiRoutes: app.post");
    // Note the code here. Our "server" will respond to requests and let users know ...
    // It will do this by sending out the value "true" ...
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

    // Send appropriate response
    res.json({status: 'OK', bestName: bestName, bestImg: bestImg});
    
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];

    console.log(friends);
  });
};

// ===============================================================================
// DATA
// Below data will hold all of the Users data.
// Initially we just set it equal to a "dummy" user.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
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
    },];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
module.exports = {
  index: function(req, res) {
    var response

    var members_list = [
      {
        name: 'luqman',
        age: 26,
        email: 'luqman@gmail.com',
        image: 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg',
        quote: 'Hi I am an elephant!'
      },
      {
        name: 'gaby',
        age: 27,
        email: 'gaby@gmail.com',
        image: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
        quote: 'I don\'t know yah yah'
      },
      {
        name: 'jonathan',
        age: 27,
        email: 'jonathan@gmail.com',
        image: 'http://static1.squarespace.com/static/553a8716e4b0bada3c80ca6b/553a9655e4b03939abece18a/5731fc75f85082142b12b095/1462893710445/mayfourblocknature.jpg',
        quote: 'I don\'t know what to say'
      },
      {
        name: 'sabrina',
        age: 27,
        email: 'sabrina@gmail.com',
        image: 'http://kingofwallpapers.com/images/images-169.jpg',
        quote: 'uhhh pangsai, idk instead of saying shit. aiyo'
      },
      {
        name: 'anu',
        age: 27,
        email: 'anu@gmail.com',
        image: 'http://eskipaper.com/images/images-4.jpg',
        quote: 'shhhhhh no I don\'t wanna say anything cause whatever I say you\'re just gonna put there'
      },
    ];

    res.json(members_list);
  }
}

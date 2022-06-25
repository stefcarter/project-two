var repoList = document.querySelector('#coverArt');
var fetchButton = document.querySelector('#button-addon1');
var newName = document.querySelector('#newCall');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21c95a5179msh4d0d521c922dd0fp1efdc9jsnef84fec80fe8',
		'X-RapidAPI-Host': 'whatoplay.p.rapidapi.com'
	}
};

function apiGet(){
  // console.log('test')
fetch('https://whatoplay.p.rapidapi.com/search?game=' + newName.value + '' , options)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  repoList.innerHTML = ''
  for (var i = 0; i < 6; i++) {
    var listItem = document.createElement('li');
    var listImg = document.createElement('img');
    
    var system = document.createElement('p');
    var gamename = document.createElement('p');
    var criticscore = document.createElement('p');
    var url = document.createElement('p');
    listImg.setAttribute('src', data[i].box_art);
    console.log(data[i].box_art);
    listImg.setAttribute('alt', "title");
    
    system.textContent = data[i].platform;
    gamename.textContent = data[i].game_name;
    criticscore.textContent = data[i].criticscore;
    url.textContent = data[i].game_url;
  
  
    listItem.appendChild(listImg); // how to label these for each item
    listItem.appendChild(system);
    listItem.appendChild(gamename);
    listItem.appendChild(criticscore);
    listItem.appendChild(url); // how to make this a click here link

    
    // console.log(data[i].game_name);
   
    repoList.appendChild(listItem);
  }

});
};

fetchButton.addEventListener('click', apiGet);


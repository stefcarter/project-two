
var repoList = document.querySelector('#coverArt');
var fetchButton = document.querySelector('#button-addon1');
var newName = document.querySelector('#newCall');

// What is this?
// var newSearch = document.querySelector('#test');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21c95a5179msh4d0d521c922dd0fp1efdc9jsnef84fec80fe8',
		'X-RapidAPI-Host': 'whatoplay.p.rapidapi.com'
	}
};

function apiGet(){
  console.log('test')
fetch('https://whatoplay.p.rapidapi.com/search?game=' + newName.value + '' , options)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  repoList.innerHTML = ''
  for (var i = 0; i < 5; i++) {
    var listItem = document.createElement('li');
    var listImg = document.createElement('img');
    
    var listText = document.createElement('p');

    listImg.setAttribute('src', data[i].box_art);
    console.log(data[i].box_art);
    listImg.setAttribute('alt', "title");
    
    listText.textContent = data[i].game_name;
    listText.textContent = data[i].platform;
    listItem.appendChild(listImg);
    listItem.appendChild(listText);
    
    console.log(data[i].game_name);
   
    repoList.appendChild(listItem);
  }

});
}
// window.addEventListener('#button-addon1','click', apiGet());//The property addEventlistener cannot be read
function test() {
fetchButton.addEventListener('click', apiGet);
}

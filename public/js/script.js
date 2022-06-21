//Hovering Sidebar code below
// var miniIcon =true;

// document.getElementbyId("sideBar").addEventlistner("mouseover",mouseOver);
// document.getElementbyId("sideBar").addEventlistner("mouseout", mouseOut);

// function hoverOnSidebar(){
//     document.getElementById("sideBar").style.width ="15%";
// }

// function hoverOffSiderbar(){
//     document.getElementById("sideBar").style.width ="4%";
// }

// API for cover art
var repoList = document.querySelector('#coverArt');
var fetchButton = document.querySelector('.fetch-button');
var newName = document.querySelector('#newCall');

function getApi() {
    // encodeURIcomponent
    fetch('https://www.giantbomb.com/api/search/?api_key=0f72464a2a563dabc8eda47f92f607713cfee4c3&format=json&query=' + newName.value + '&resources=game')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        repoList.innerHTML = ''
        for (var i = 0; i < 1; i++) {
          var listItem = document.createElement('li');
          var listImg = document.createElement('img');
        //   var listText = document.createElement('p');
          listImg.setAttribute('src', data.data[i].images.original_url);
          listImg.setAttribute('alt', "title");
  
          listItem.appendChild(listImg);
        //   listText.textContent = data.data[i].title;
        //   listItem.appendChild(listText);
          repoList.appendChild(listItem);
        }
        // console.log(data)
      });
  }
  fetchButton.addEventListener('click', getApi);

//Hovering Sidebar code below
var miniIcon =true;

document.getElementbyId("pageSidebar").addEventlistner("mouseover",mouseOver);
document.getElementbyId("pageSidebar").addEventlistner("mouseout", mouseOut);

function hoverOnSidebar(){
    document.getElementById("pageSidebar").style.width ="250px";
}

function hoverOffSiderbar(){
    document.getElementById("pageSidebar").style.width ="85px";
}

<<<<<<< HEAD
//guid = game id??
    let requestUrl = "https://www.giantbomb.com/api/review/[guid]/?api_key=0f72464a2a563dabc8eda47f92f607713cfee4c3";
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
    
=======
// API for cover art
function getApi() {
    // encodeURIcomponent
    fetch('https://www.giantbomb.com/api/search/?api_key=0f72464a2a563dabc8eda47f92f607713cfee4c3&format=json&query="' + newName.value + '"&resources=game')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        repoList.innerHTML = ''
        for (var i = 0; i < 5; i++) {
          var listItem = document.createElement('li');
          var listImg = document.createElement('img');
        //   var listText = document.createElement('p');
          listImg.setAttribute('src', results.data[i].images.original_url);
          listImg.setAttribute('alt', "title");
  
        //   listItem.appendChild(listImg);
        //   listText.textContent = data.data[i].title;
        //   listItem.appendChild(listText);
          repoList.appendChild(listItem);
        }
        // console.log(data)
      });
  }
  fetchButton.addEventListener('click', getApi);
>>>>>>> fc248fc7203f0ef5bb3dd0de2a0db4223e757228

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

    let requestUrl = "https://rawg.io/@csareyj/apikey=bbea3bbc5e864e008180ff31ade66e0d";
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
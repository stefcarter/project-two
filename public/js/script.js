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

//guid = game id??
    let requestUrl = "https://www.giantbomb.com/api/review/[guid]/?api_key=0f72464a2a563dabc8eda47f92f607713cfee4c3";
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
    

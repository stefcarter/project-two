//Hovering Sidebar code below
var miniIcon =true;

document.getElementbyId("sideBar").addEventlistner("mouseover",mouseOver);
document.getElementbyId("sideBar").addEventlistner("mouseout", mouseOut);

function hoverOnSidebar(){
    document.getElementById("sideBar").style.width ="15%";
}

function hoverOffSiderbar(){
    document.getElementById("sideBar").style.width ="4%";
}



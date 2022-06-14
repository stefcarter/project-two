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

//Created by: jSdCool

let titleOfPage =""

function teamName (mode){//the team name part of the header
    return '<td width="35%">'+
    ((mode)? '<center>' : '')+'<h1 class="nav-title"><b><a class="nav-title" href="index.html">RoboWarriors!</a></b></h1>'+((mode)? '</center>' : '')+
'</td>'
}

function pageName(name,mode){//the page name part of the header
    return '<td width="30%">'+
    '<center><a class="nav-links" style="text-decoration: none;"><h5 :hover class="hover">'+name+'</center></h5></a>'+
'</td>'
}


function dropMenu(mode){//the page selection drop down menu part of the header
    return  '<td width="36%"><meta name="viewport" content="width=device-width, initial-scale=1">'+
'<div class="dropdown col-lg-4 nav-item" style="float:right; right: 20px; top: 20px;">'+
    '<button class="dropbtn">Robots from Other Years</button>'+
    '<div class="dropdown-content">'+
        '<a href="Centerstage.html">Centerstage (2023 - 2024) (Current)</a>'+
        '<a href="PowerPlay.html">PowerPlay (2022 - 2023)</a>'+
        '<a href="Freight_Frenzy.html">Freight Frenzy (2021 - 2022)</a>'+
        '<a href="Skytone.html">Skystone (2019 - 2020)</a>'+
        '<a href="Rover_Ruckus.html">Rover Ruckus (2018 - 2019)</a>'+
        '<a href="Relic_Recovery.html">Relic Recovery (2017 - 2018)</a>'+
    '</div>'+
'</div>'+
'</td>';
}


function getPageHeader(pageWidth,pageHeight,pageTitle){//generate the HTML used for the header
    let headHtml ='<span class="headBlock"><table align="center" width="100%">';//here the span is used to allow this script to re define the header if nessarry. the table is used to format the data to display
    if((pageWidth/pageHeight)>1){//if the screen is more landscape
        headHtml+='<tr>'
        
        headHtml+=teamName(false)

        headHtml+=pageName(pageTitle,false)

        headHtml+=dropMenu(false)

        headHtml+='</tr>'
    }else{//if the screen is more portrait
        headHtml+='<tr>'
        headHtml+=teamName(true)
        headHtml+='</tr>'

        headHtml+='<tr>'
        headHtml+=pageName(pageTitle,true)
        headHtml+='</tr>'

        headHtml+='<tr>'
        headHtml+=dropMenu(true)
        headHtml+='</tr>'

    }

    headHtml+='</table></span>'
    return headHtml
}

function setPageHeader(pageTitle){//used to make the header display propery on mobile devices tm tm tm
    document.querySelector('.headBlock').outerHTML =getPageHeader(getWidth(),getHeight(),pageTitle)
    window.addEventListener("resize", windowResized);//add an event handler for window resize event
    titleOfPage=pageTitle//save the page title for later refrence
}

function windowResized(){//this function will get called when the window gets resizede
    document.querySelector('.headBlock').outerHTML =getPageHeader(getWidth(),getHeight(),titleOfPage)
}

function printSizese(){
    console.log("widths:")
    console.log(document.body.scrollWidth)
    console.log(document.documentElement.scrollWidth)
    console.log(document.body.offsetWidth)
    console.log(document.documentElement.offsetWidth)
    console.log(document.documentElement.clientWidth)
    console.log("\nheights:")
    console.log(document.body.scrollHeight)
    console.log(document.documentElement.scrollHeight)
    console.log(document.body.offsetHeight)
    console.log(document.documentElement.offsetHeight)
    console.log(document.documentElement.clientHeight)
    
}

function getWidth() {
    /*return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );*/
    return document.documentElement.clientWidth
  }
  
  function getHeight() {
    /*return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );*/
    return document.documentElement.clientHeight
  }

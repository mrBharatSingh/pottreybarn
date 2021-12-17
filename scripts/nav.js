// import wholeNav from './navMenu.js'

import  {wholeNav,footer,ourValues, sustainability, design, inspiration, newNow, collaborations} from './navMenu.js'

var wholeNavDiv=document.getElementById("wholeNav")
wholeNavDiv.innerHTML=wholeNav()

var footerdiv=document.getElementById("mainfooter")
footerdiv.innerHTML=footer()

//second nav bar varibles 
var Values=document.getElementById("navValues")
var Sustain=document.getElementById("navSustain")
var Design=document.getElementById("navDesign")
var Inspir=document.getElementById("navInspir")
var Newnow=document.getElementById("navNewnow")
var Bestsell=document.getElementById("navBestsell")
var Coll=document.getElementById("navColl")

var displayThird=document.getElementById("navSecondHover")
var displayThird1=document.getElementById("navSecondDiv")

// import  {ourValues, sustainability, design, inspiration, newNow, collaborations} from './navMenu.js'
// console.log(displayThird)


var bodyx=document.querySelector("section")
console.log(bodyx)
bodyx.onmouseover=function(){
    displayThird.style.display="none"

}
displayThird1.onmouseover=function(){
    // displayThird.innerHTML=null
    // displayThird.innerHTML=ourValues()
    displayThird.style.display="none"
    
}

// displayThird.onmouseout=function(){
//     // displayThird.innerHTML=null
//     displayThird.innerHTML=ourValues()
//     displayThird.style.display="none"
    
// }

Values.onmouseover=function(){
    displayThird.innerHTML=null
    displayThird.innerHTML=ourValues()
    displayThird.style.display="block"
  
}



Sustain.onmouseover=function(){
    displayThird.innerHTML=null
    displayThird.innerHTML=sustainability()
    displayThird.style.display="block"
}



Design.onmouseover=function(){
    displayThird.innerHTML=null
    displayThird.innerHTML=design()
    displayThird.style.display="block"
}



Inspir.onmouseover=function(){
    displayThird.innerHTML=null
    displayThird.innerHTML=inspiration()
    displayThird.style.display="block"
}



Newnow.onmouseover=function(){
    displayThird.innerHTML=null
    displayThird.innerHTML=newNow()
    displayThird.style.display="block"
}



// Bestsell.onmouseover=function(){
//     displayThird.innerHTML=null
//     displayThird.innerHTML=
//     displayThird.style.display="flex"
// }



Coll.onmouseover=function(){
    displayThird.innerHTML=null
    displayThird.innerHTML=collaborations()
    displayThird.style.display="flex"
}



var fFurniture=document.getElementById("navfFurniture")
var fOutdoor  =document.getElementById("navfOutdoor")
var fBedding=document.getElementById("navfBedding")
var fBath=document.getElementById("navfBath")
var fRugs=document.getElementById("navfRugs")
var fWindows=document.getElementById("navfWindows")
var fLighting=document.getElementById("navfLighting")
var fPillows=document.getElementById("navfPillows")
var fMirrors=document.getElementById("navfMirrors")
var fTabletop=document.getElementById("navfTabletop")
var fOrganization=document.getElementById("navfOrganization")
var fHolidays=document.getElementById("navfHolidays")
var fGifts=document.getElementById("navfGifts")
var fSale=document.getElementById("navfSale")


var forthDisplay=document.getElementById("navFourthHover")
import {furniture, outdoor, bedding, bath, rugs, windows, lighting, pillows, mirrors, tabletop, organization, holidays, gifts,sale}from './navMenu.js' 

 
fFurniture.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=furniture()
}
fOutdoor.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=outdoor()
}
fBedding.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=bedding()
}
fBath.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=bath()
}
fRugs.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=rugs()
}
fWindows.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=windows()
}
fLighting.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=lighting()
}
fPillows.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=pillows()
}
fMirrors.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=mirrors()
}
fTabletop.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=tabletop()
}
fOrganization.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=organization()
}
fHolidays.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=holidays()
}
fGifts.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=gifts()
}
fSale.onmouseover=function(){
forthDisplay.innerHTML=null
forthDisplay.innerHTML=sale()
}












var Values=document.getElementById("navValues")
var Sustain=document.getElementById("navSustain")
var Design=document.getElementById("navDesign")
var Inspir=document.getElementById("navInspir")
var Newnow=document.getElementById("navNewnow")
var Bestsell=document.getElementById("navBestsell")
var Coll=document.getElementById("navColl")

var displayThird=document.getElementById("navSecondHover")
var displayThird1=document.getElementById("navSecondDiv")

import  {ourValues, sustainability, design, inspiration, newNow, collaborations} from './navMenu.js'
console.log(displayThird)


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




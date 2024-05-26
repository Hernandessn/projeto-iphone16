const botaoTroca = document.querySelector(".botaotrocablue")
const iphoneblue = document.querySelector(".iphoneblue")

const trocacor = document.querySelector(".trocacor")

const trocblack = document.querySelector(".trocablack")
const  iphoneblack = document.querySelector(".iphoneblack")

const yellow = document.querySelector("botaoyellow")
const iphoneyel = document.querySelector(".iphoneyellow")

const white = document.querySelector("botaowhite")
const iphonewhite = document.querySelector(".iphonewhite")

const red = document.querySelector("botaored")
const iphonered = document.querySelector(".iphonered")

const purple = document.querySelector("botaopurple")
const iphonepurple = document.querySelector (".iphonepurple")




function botaoBlue(){
  iphoneblue.style =  "margin-top: 50px;margin-right:50px;width:300px;animation: 2s ease-in-out iphone-aparace;"
  iphoneyel.style = "width:0px"
  iphonewhite.style = "width:0px"
  iphoneblack.style = "width=0px"
  iphonered.style = "width=0px"
  iphonepurple.style = "width=0px"
  trocacor.style = ` background-color:  #81a5c4;
  clip-path: circle(700px at right 800px);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  animation: 2s ease-in-out blue-aparece;
  z-index: -1;
}


`
}
function botaoBlack(){
  iphoneblue.style = "width:0px"
  iphoneyel.style = "width:0px"
  iphonewhite.style = "width:0px"
  iphoneblack.style = "margin-top: 50px;margin-right:100px;width:300px;animation: 2s ease-in-out iphone-aparace;`"
  iphonered.style = "width=0px"
  iphonepurple.style = "width=0px"
   trocacor.style = `background-color: black;
    clip-path: circle(700px at right 800px);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    animation: 2s ease-in-out black-aparece;
    z-index: -1;
  }

  `
  
}
function botaoYelllow(){
  iphoneblue.style = "width:0px"
  iphoneyel.style = "margin-top: 50px;width:280px;margin-right:50px;animation: 2s ease-in-out iphone-aparace;`"
  iphonewhite.style = "width:0px"
  iphoneblack.style = "width=0px"
  iphonered.style = "width=0px"
  iphonepurple.style = "width=0px"
    trocacor.style = ` background-color:   #F7da47;
    clip-path: circle(700px at right 800px);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    animation: 2s ease-in-out yellow-aparece;
    z-index: -1;
  }
  
  
  `
  }
 function botaoWhite(){
   iphoneblue.style = "width:0px"
  iphoneyel.style = "width:0px"
  iphonewhite.style = `margin-top:100px;margin-right: 100px;width:300px;animation: 2s ease-in-out iphone-aparace;`  
  iphoneblack.style = "width=0px"
  iphonered.style = "width=0px"
  iphonepurple.style = "width=0px"
    trocacor.style = ` background-color: #b9b8b8;
    clip-path: circle(700px at right 800px);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    animation: 2s ease-in-out white-aparece;
    z-index: -1;
  }
  
  
  `

  }
  
  function botaoRed(){
    iphoneblue.style = "width:0px;"
    iphoneyel.style = "width:0px"
    iphonewhite.style = "width:0px"
    iphoneblack.style = "width=0px"
    iphonered.style = "margin-top: 100px;margin-right: 100px;width:300px;animation: 2s ease-in-out iphone-aparace;`"
    iphonepurple.style = "width=0px"

    trocacor.style = ` background-color: rgb(158, 32, 32);
    clip-path: circle(700px at right 800px);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    animation: 2s ease-in-out red-aparece;
    z-index: -1;
  }
  
  `
  }
  function botaoPurple(){
    iphoneblue.style = "width:0px;"
    iphoneyel.style = "width:0px"
    iphonewhite.style = "width:0px"
    iphoneblack.style = "width=0px"
    iphonered.style = "width=0px"
    iphonepurple.style = "margin-top: 50px;margin-right:100px;width:300px;animation: 2s ease-in-out iphone-aparace;"

    trocacor.style = ` background-color: rgb(105, 82, 128);
    clip-path: circle(700px at right 800px);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    animation: 2s ease-in-out purple-aparece;
    z-index: -1;
  
`
  }


trocblack.addEventListener("click",botaoBlack)
botaoTroca.addEventListener("click",botaoBlue)
// button
for ( var i=0 ;i<document.querySelectorAll(".key").length; i++)
document.querySelectorAll(".key")[i].addEventListener("click",function(){
var input = this.innerHTML;
makesound(input);
addanimation(input);
})
// key
document.addEventListener("keypress", function(event){
  makesound(event.key);
  addanimation(event.key);
})
function makesound (key){
  switch (key) {
    case "a":  var a = new Audio("a major.wav");
      a.play();
      break;
      case "b":  var b = new Audio("b major.wav");
        b.play();
        break;
        case "c":  var c = new Audio("c major.wav");
          c.play();
          break;
          case "d":  var d = new Audio("d major.wav");
            d.play();
            break;
            case "e":  var e = new Audio("e major.wav");
              e.play();
              break;
              case "f":  var f = new Audio("f major.wav");
                f.play();
                break;
                case "g":  var g = new Audio("g major.wav");
                  g.play();
                  break;
    default:console.log(input);
}}
function addanimation(keyused){
document.querySelector("." + keyused).classList.add("pressed");
setTimeout(function () {
document.querySelector("." + keyused).classList.remove("pressed");
}, 100);

}

var whitebtn = document.getElementById("whitebtn");
var blackbtn = document.getElementById("blackbtn");

function light(el){
  if(blackbtn != null){
    if(blackbtn.style.display == "block"){
      blackbtn.style.display = 'none';
    }
    else{
      blackbtn.style.display = 'block';
      whitebtn.style.display = 'none';
    }
    return false;
  }
}
function black(el){
  if(whitebtn != null){
    if(whitebtn.style.display == "block"){
      whitebtn.style.display = 'none';
    }
    else{
      whitebtn.style.display = 'block';
      blackbtn.style.display = 'none';
    }
    return false;
  }
}
whitebtn.addEventListener("click", light);
blackbtn.addEventListener("click", black);

var headmenu=document.getElementById('hdr');
var shpk=document.getElementById('shpk');
var tpm=document.getElementById('tpm');
var wallp=document.getElementById('wallp');
var respass=document.getElementById('respass');
var reger=document.getElementById('reger');
var cont=document.getElementById('cont');
var boter=document.getElementById('boter');
var textbot=document.getElementById('textbot');







function Dark(el){
  headmenu.style.background="#000000";
  shpk.style.color="#fef7f5";
  wallp.style.background="#444444";
  tpm.style.background="#000000";
  respass.style.color="#fef7f5";
  reger.style.color="#fef7f5";
  cont.style.background="#2c2c2c";
  boter.style.background="#440d14";
  textbot.style.color="#fef7f5";

}
function Light(el){
  headmenu.style.background="#fef7f5";
  shpk.style.color="#000000";
  wallp.style.background="#cbcbcb";
  tpm.style.background="#fef7f5";
  respass.style.color="#000000";
  reger.style.color="#000000";
  cont.style.background="#8389cb";
  boter.style.background="#9b94a5";
  textbot.style.color="#1c0eff";

}





blackbtn.addEventListener("click", Dark);

whitebtn.addEventListener("click", Light);


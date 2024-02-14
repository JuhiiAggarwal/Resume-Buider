function checks(){
	alert("Fill Details with Resume has been reset");
}
 function save(){


let name=document.getElementById("fname").value;
let college=document.getElementById("cname").value;
let degree=document.getElementById("dname").value;
let branch=document.getElementById("bname").value;
let experience=document.getElementById("ename").value;
let technical=document.getElementById("Address").value;
let country=document.getElementById("country").value;
let district=document.getElementById("District").value;
let state=document.getElementById("State").value;
let mobno=document.getElementById("mob").value;
let gen=document.getElementById("gender").value;

document.getElementById("resumegender").value=gen;
document.getElementById("resumename").value=name;
document.getElementById("resumecollege").value=college;
document.getElementById("resumedegree").value=degree;
document.getElementById("resumebranch").value=branch;
document.getElementById("resumeexp").value=experience;
document.getElementById("resumets").value=technical;
document.getElementById("resumecountry").value=country;
document.getElementById("resumedistrict").value=district;
document.getElementById("resumestate").value=state;
document.getElementById("resumemob").value=mobno;

let photoinput=document.getElementById("uploadphoto");
let photopreview=document.getElementById("photopreview");
let photo=photoinput.files[0];
if(photo){
  const reader=new FileReader();
  reader.readAsDataURL(photo);
  reader.onload=()=>{
    photopreview.src=reader.result;
    photopreview.style.display='block';
  }
}
}


let videoElement = document.querySelector("video");
let recordButton = document.querySelector(".inner-record");
let capturePhoto = document.querySelector(".inner-capture");
let filters=document.querySelectorAll(".filter");
let filterSelected="none";

let mediaRecorder;
let recordingState = false;

// IIFE function

// (function add(){
//     console.log("IIFE");
// })()

(async function () {
  let constraint = { video: true };
  let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
  mediaRecorder=new MediaRecorder(mediaStream);
  videoElement.srcObject=mediaStream;
  mediaRecorder.onstart = function(){
    console.log("inside on start")
  }
  mediaRecorder.ondataavailable = function(e){
    console.log("inside on data available")
    console.log(e.data)
    let videoObject=new Blob([e.data],{type: "video/mp4"});
    console.log(videoObject)

    let videoURL=URL.createObjectURL(videoObject);
    

    let aTag=document.createElement("a");
    aTag.download= `Video${Date.now()}.mp4`;
    aTag.href=videoURL;
    aTag.click();
    console.log(videoURL);
  }
  mediaRecorder.onstop = function(){
    console.log("inside on stop")
  }

  recordButton.addEventListener("click", function(){
    if(recordingState){
        mediaRecorder.stop();
        recordingState=false;
        recordButton.classList.remove("animate-record");
    }
    else{
        mediaRecorder.start();
        recordingState=true;
        recordButton.classList.add("animate-record");
    }
  })

  capturePhoto.addEventListener("click",function(){
    capturePhoto.classList.add("animate-capture");

    setTimeout(()=>{
      capturePhoto.classList.add("animate-capture");
    },1000)

  const canvas=document.createElement("canvas");
  canvas.height=480;
  canvas.width=480;
  const ctx=canvas.getContext("2d");

  
  ctx.drawImage(videoElement,0,0);
  if(filterSelected!="none"){
    ctx.fillStyle=filterSelected;
    ctx.fillRect(0,0,canvas.width,canvas.height);
  }
  
  let aTag=document.createElement("a");
  aTag.download= `Video${Date.now()}.jpg`;
  aTag.href=canvas.toDataURL("image/jpg");
  aTag.click();
  })


})();

for(let i=0;i<filters.length;i++){
  filters[i].addEventListener("click",function(e){
    console.log(e.target)
    let currentFilterSelected=e.target.style.backgroundColor;
    console.log(currentFilterSelected);

    if(currentFilterSelected==""){
      if(document.querySelector(".filter-div")){
        document.querySelector(".filter-div").remove();
        filterSelected="none";
        return;
      }
      else{
        filterSelected="none";
        return;
      }
    }
    let filterDiv=document.createElement("div");
    filterDiv.classList.add("filter-div");
    filterDiv.style.backgroundColor=currentFilterSelected;
    if(filterSelected=="none"){
      document.body.append("filter-div");
    }
    else{
      document.querySelector(".filter-div").remove();
      document.body.append(filterDiv);
    }
    filterSelected=currentFilterSelected;
  })
}

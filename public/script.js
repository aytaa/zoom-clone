const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
myVideo.muted = true;


let myVideoStream
navigator.mediaDevices.getUserMedia({
    video: true,
    audio : true
}).then(stream => {
    myVideoStream = stream;
    addvideoStream(myVideo, stream)
})



const addvideoStream = (video , stream) => {
    video.srcObject = stream ;
    video.addEventListener('loadedmatedata' , () => {
        video.play();
    })
    videoGrid.append(video);
}
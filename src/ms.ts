
var videoUrls = []; // global
// Function to detect video streams
function detectVideoStreams() {
    // Get all video elements on the page
    var videos = document.getElementsByTagName("video");

    // Store the video URLs in an array

    for (var i = 0; i < videos.length; i++) {
        videoUrls.push(videos[i].src);
    }

    console.log(videoUrls)
    return videoUrls;
}

// Function to download the video
function downloadVideo(videoUrl) {
    // Create a hidden link element with the video URL
    var link = document.createElement("a");
    link.style.display = "none";
    link.href = videoUrl;
    link.download = "video.mp4";

    // Append the link to the body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the link after the download has started
    document.body.removeChild(link);
}

// Get the detect and download buttons
var detectButton = document.getElementById("detectButton");
var downloadButton = document.getElementById("downloadButton");

// Handle the detect button click
detectButton.addEventListener("click", function () {
    var videoUrls = detectVideoStreams();
    if (videoUrls.length > 0) {
        (downloadButton as HTMLButtonElement).disabled = false;
        downloadButton.addEventListener("click", function () {
            downloadVideo(videoUrls[0]);
        });
    }
});
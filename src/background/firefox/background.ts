/// <reference types="web-ext-types"/>

console.log(videoUrls)

browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        var videoUrls = []; // global
        // Function to detect video streams
        // Get all video elements on the page
        var videos = document.getElementsByTagName("video");

        // Store the video URLs in an array

        for (var i = 0; i < videos.length; i++) {
            videoUrls.push(videos[i].src);
        }
    }
})
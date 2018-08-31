var mobile;
var navClosed;
var shareClosed;
var postMetaClosed;

window.onload = function() {

    var code = document.getElementsByTagName("pre");
    for (i = 0; i < code.length; i++) {
        hljs.highlightBlock(code[i]);
        console.log("highligted codeblock #" + i);
    }

    if (window.innerWidth < 600) {
        mobile = true;
        console.log("mobile browser detected");
    } else {
        mobile = false;
    }

    // Do a few tweaks if a mobile device is in use
    if (mobile) {
        // Hide desktop navbar and show mobile navbar
        document.getElementById("navbar").style.display = "none";
        document.getElementById("navbar-mobile").style.display = "block";

    }
 
    // append the current page link to the twitter sharing btn
    if(document.getElementById("twitter-share-btn")) {
        document.getElementById("twitter-share-btn").setAttribute("href", document.getElementById("twitter-share-btn").getAttribute("href") + window.location.href);     
    }

    // Define UI variables
    navClosed = true;
    shareClosed = true;
    postMetaClosed = true;
}

// Opens and closed the mobile nav
function nav() {
    if (navClosed) {
        navClosed = false;
        document.getElementById("mobile-navbar--items").style.display = "block";
        console.log("opened mobile nav");
    } else {
        navClosed = true;
        document.getElementById("mobile-navbar--items").style.display = "none";
        console.log("closed mobile nav");
    }
}

// Copies the URL of the current page to the clipbaord
function copyUrlToClipboard() {
    try {
        var copyTA = document.createElement("textarea");
        copyTA.value = window.location.href; // append the current url into the text area that will be copied into the user's clipboard
        copyTA.setAttribute("readonly", "");
        copyTA.style.position = "absolute";
        copyTA.style.right = "9999px";
        document.body.appendChild(copyTA);
        copyTA.select();
        document.execCommand("COPY");
        document.body.removeChild(copyTA);
        document.getElementById("copied-status").innerHTML = "<i class='fas fa-check-circle'></i> Copied!";
    } catch {
        document.getElementById("copied-status").innerHTML = "<i class='fas fa-exclamation-triangle'></i> Error! Try again, or change your browser.";
    }
}

// Shows and hides the #post-meta
function showPostMeta() {
    if (postMetaClosed) {
        document.getElementById("post-meta").style.display = "block";
        postMetaClosed = false;
    } else {
        document.getElementById("post-meta").style.display = "none";
        postMetaClosed = true;
    }
}

// Jumps to page comments
function goToComments() {
    document.getElementById("comments").scrollIntoView();
}

// Jumps to share
function goToShare() {
    document.getElementById("share").scrollIntoView();
}
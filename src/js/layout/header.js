import Headroom from "headroom.js";

// grab an element
var myElement = document.querySelector(".header-desktop");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();
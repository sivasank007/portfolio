$(document).ready(function(){$("#menu").click(function(){$(this).toggleClass("fa-times"),$(".navbar").toggleClass("nav-toggle")})}),document.onkeydown=function(e){if(123==e.keyCode||e.ctrlKey&&e.shiftKey&&73==e.keyCode||e.ctrlKey&&e.shiftKey&&67==e.keyCode||e.ctrlKey&&e.shiftKey&&74==e.keyCode||e.ctrlKey&&85==e.keyCode)return!1};
"use strict";

console.log("JS Script File loaded correctly!!");

$(document).ready(function () {
  $(".ui-design-item").mouseenter((evt) => {
    $(evt.currentTarget).css('transform', 'scale(1.1)')    
  }).mouseleave((evt) => {
    $(evt.currentTarget).css('transform', 'scale(1)')    
  })
});  


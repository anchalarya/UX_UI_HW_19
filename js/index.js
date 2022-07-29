"use strict";

console.log("JS Script File loaded correctly!!");

$(document).ready(function () {
  $(".ui-design-item").mouseenter((evt) => {
    // $(evt.currentTarget).css('opacity', '1')
    // $(evt.currentTarget).css('animation', 'fadeIn ease-in 1')
  }).mouseleave((evt) => {
    // $(evt.currentTarget).css('opacity', '0.3')
  })

  $(".ui-design-tab")
  .mouseenter((evt) => {
    // $(evt.currentTarget.children).css('opacity', '0.3')
  })
  .mouseleave((evt) => {
    console.log(evt)
    // $(evt.currentTarget.children).css('opacity', '1')
  })

});  


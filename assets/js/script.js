// Function: Anchor links creations
function anchorizejekyll()
{
  'use strict';

  var headingNodes = [];
  var results;
  var link;
  var tags = ['h2', 'h3', 'h4', 'h5', 'h6'];

  tags.forEach(function(tag){
    results = document.getElementsByTagName(tag);
    Array.prototype.push.apply(headingNodes, results);
  });

  headingNodes.forEach(function(node){
    link = document.createElement('a');
    link.innerHTML = '&nbsp;&infin;';
    link.href = '#' + node.getAttribute('id');
    link.style.position = "absolute";
    link.style.visibility = "hidden";
    node.className = 'anchor-item';
    node.appendChild(link);
  });
}

// Page loaded event
window.onload = function()
{
  // Start anchor links creations
  anchorizejekyll();
}

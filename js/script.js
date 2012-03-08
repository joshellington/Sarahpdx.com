/* Author:

*/



$(function() {
  getBlog('sarahmichelle');
});


function getBlog(id) {
  $.getJSON('/inc/tumblr.php/?id='+id, function(d) {
    log(d);
    parseBlog(d);
  });
}

function parseBlog(d) {
  var cont = $('#blog');

  $.each(d.response.posts, function(i,item) {
    if ( item.title ) {
      cont.append('<div class="blog-post"><h2>'+item.title+'</h2></div>');
    }
  });
}
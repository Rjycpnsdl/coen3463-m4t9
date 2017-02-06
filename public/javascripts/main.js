$('#delete').on('click', function(e){
  e.preventDefault();

  $('input:checked').each(function(index, value){
    var val = $(this).attr('id');
    console.log($(this));
    var $thisInput = $(this);

    $.ajax({
      url:'/movies/'+val,
      type:'DELETE'
    }).done(function(){
      $thisInput.parents('tr').remove();
    });

  });
});


if (window.location.pathname === '/movies') {

  fetch('api/v1/Movie').then(function(res) {
    res.json().then(function(movies) {
      console.log('movies', movies);
      var tbody = document.getElementById('table-body');
      movies.forEach(function(movie) {
        // tbody.insertAdjacentHTML('beforeend', '<tr> <td>  <input type="checkbox" id="' + movie._id + '" />  </td>  <td>  <a href="/movies/#' + movie._id + '">' + movie.title + '</a></td> <td> ' + movie.rank + '</td> <td>' + movie.sypnosis + ' </td> </tr>');
        tbody.insertAdjacentHTML('beforeend', '<tr> <td>  <input type="checkbox" id="' + movie._id + '" />  </td>  <td> ' + movie.title + ' </td> <td> ' + movie.rank + ' </td> <td>' + movie.rating + ' </td> <td>' + movie.views + ' </td> <td><a href="movie.link' + movie.link + '" </a> </td> <td> ' + movie.sypnosis + ' </td> </tr>');
     
      });
    })
  });

}
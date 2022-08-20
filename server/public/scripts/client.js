

console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  $('#addButton').on('click', addKoala);
  $('body').on('click', '.hollaReady', updateTransfer);
  $('body').on('click', '.byeKoala', removeKoalas)
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

// Function for POST request
function addKoala(){
  console.log('in addKoala');
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      ready_to_transfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val()
    }
  }).then(function (response){
    getKoalas();
  })
} // End addKoala

// Function for GET request
function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    type: 'GET',
    url: '/koalas'
  }).then(function(response){
    console.log(response);
    $('#viewKoalas').empty();
    for(let koalas of response) {
      let koalaClass = 'hollaReady';
      let koalaDelete = 'byeKoala'
      if(koalas.ready_to_transfer === true){
        koalaClass = 'hidden';
      }
      else if(koalas.ready_to_transfer === false){
        koalaDelete = 'hidden';
      }
      $('#viewKoalas').append(`
        <tr>
          <td>${koalas.name}</td>
          <td>${koalas.age}</td>
          <td>${koalas.gender}</td>
          <td>${koalas.ready_to_transfer}</td>
          <td> 
              <button class="${koalaClass}" data-id="${koalas.id}"> Ready for Transfer</button>          
          </td>
          <td>${koalas.notes}</td>
          <td>
            <button class="${koalaDelete}" data-id="${koalas.id}"> Remove</button>
          </td>
        <tr>  
      `)
    }
  }).catch(function (error){
    console.log(error);
    alert('You killed it');
  })
  
} // end getKoalas

// Function for PUT request
function updateTransfer() {
  console.log('in updateTransfer');
  const koalasId = $(this).data('id')
  $.ajax({
    type: 'PUT',
    url:`/koalas/${koalasId}`,
    data:{ready_to_transfer: true}
  }).then(function(response){
    getKoalas();
  }).catch(function(error){
    console.log(error);
    alert('ERROR in PUT /koalas', error)
  })
} // End updateTransfer



// Function for DELETE
 function removeKoalas (){
  const koalasId = $(this).data('id');
  console.log('removeKoala', koalasId);
  $.ajax({
    type:'DELETE',
    url: `/koalas/${koalasId}`
  }).then(function(response){
    getKoalas();
  }).catch(function(error){
    console.log(error);
    alert('Something went wrong!')
  })
 }
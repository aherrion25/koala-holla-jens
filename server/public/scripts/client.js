console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  $('#addButton').on('click', addKoala);
  $('body').on('click', '.hollaReady', updateTransfer)
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function addKoala(){
  console.log('in addKoala');
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val()
    }
  }).then(function (response){
    getKoalas();
  })
}

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
      if(koalas.ready_to_transfer){
        koalaClass = 'hidden';
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
        <tr>  
      `)
    }
  }).catch(function (error){
    console.log(error);
    alert('You killed it');
  })
  
} // end getKoalas

function updateTransfer() {
  console.log('in updateTransfer');
}




// let koalaToSend = {
//   name: 'testName',
//   age: 'testName',
//   gender: 'testName',
//   readyForTransfer: 'testName',
//   notes: 'testName',};

//     // call saveKoala with the new obejct
//     saveKoala( koalaToSend );
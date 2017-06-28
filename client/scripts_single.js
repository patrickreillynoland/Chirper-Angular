// var rightHere = window.location.pathname;
// var pieces = rightHere.split('/');
// console.log(rightHere);
// console.log(pieces);
// var id = pieces[2];
// console.log(id);
// // alert('Single View');

$(document).ready(function() {

var $singleChirp = $('#single-chirp');

function addSingleChirpDiv(chirp) {
    var $chirpDiv = $('<div class="chirp"></div>');
    var $message = $('<p></p>');
    var $user = $('<h4></h4>');
    var $timestamp = $('<h5></h5>');
    var $buttonBlock = $('<div class="buttons"></div>');
    var $editButton = $('<button class="buttons">Edit</button>');
    var $delButton = $('<button class="buttons">Delete</button>');
    var $separator = $('<hr>');

    
    $delButton.click(function() {
        var rightHere = window.location.pathname;
        var pieces = rightHere.split('/');
        var id = pieces[2];
        if (confirm('Sure you want to delete this chirp?')) {
            $.ajax({
                method: 'DELETE',
                url: '/api/chirps/' + id
            }).then(function() {
                window.location.replace('/chirps');
                }, function(err) {
                console.log(err);
            });
        }
    });

    $editButton.click(function() {
        window.location.pathname = '/chirps/' + chirp.id + '/update';
    });

    $message.text(chirp.message);
    $user.text(chirp.userName);
    $timestamp.text(new Date(chirp.timestamp).toLocaleString());
    $message.appendTo($chirpDiv);
    $user.appendTo($chirpDiv);
    $timestamp.appendTo($chirpDiv);
    $editButton.appendTo($buttonBlock);
    $delButton.appendTo($buttonBlock);
    $buttonBlock.appendTo($chirpDiv);
    $separator.appendTo($chirpDiv);
    $chirpDiv.appendTo($singleChirp);
}


function getSingleChirp() {
    var rightHere = window.location.pathname;
    var pieces = rightHere.split('/');
    var id = pieces[2];
    $.ajax({
        method: 'GET',
        url: '/api/chirps/' + id
    }).then(function(chirp) {
        addSingleChirpDiv(chirp);
        console.log(id);
    }, function(err) {
        console.log(err);
    });
}

getSingleChirp();
});
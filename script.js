
// ================
 //  Load method to get external files
 //    ===========================

 /*
$(document).ready(() => {                   // with defer only this line required
    $('#result').load('test.html', ((responseTxt, statusTxt, xhr) => {
        if(statusTxt == "success"){
            alert('It went fine');
        } else if(statusTxt == "error"){
            alert("Error: "+xhr.statusText);
        }
    }));  

})
*/

// ================
 //  fetching data with get method
 //    ===========================

/*
$.get('test.html', (data) => {
    $('#result').html(data)
})
*/

//=========================
    // fetching data from an JSON file
    //===============================

/*
$.getJSON('users.json', (data) => {         
    $.each(data, (i, user) => {
        $('#users').append(`<li>${user.firstName}</li>`)
    })
})
*/

//=======================
    //  AJAX method fetching an external Json file 
//=============================

$.ajax({
    method:'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    daraType: 'json'
}).done((data) => {
    //console.log(data);
    $.map(data, (post, i) => {
        $('#result').append(`<h3>${post.title}</h3><p>${post.body}</p>`)
    })
})


$('#postForm').submit(function(e) {
    e.preventDefault();

    let title = $('#title').val();
    let body = $('#body').val();
    let url = $(this).attr('action');

    $.post(url, {title:title, body:body})    
        .done((data) => {
             console.log('post Saved');
             console.log(data);                   // normaly we post this to a server but in this case will return to page as an axample or log it
            document.querySelector('.text').innerHTML = `Post to server
            <h3>${data.title}</h3>
            <p>${data.body}</p>
            `;    
        })
})

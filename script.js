$(document).ready(function(){
    $.getJSON("users.json", function(result){
        $.each(result, function(i, field){
            $("div").append(JSON.stringify(field['id']) + ') ' + JSON.stringify(field['id','username']) + '<br> ' + JSON.stringify(field['id','name']) + '<br> ' + JSON.stringify(field['id','bio']) + '<br> ' +  "<p>");
        });
    });
    $.getJSON("posts.json", function(postResult){
        $.each(postResult, function(i, field){
            $("div").append(JSON.stringify(field['thread']) + ') ' + JSON.stringify(field['text']) + ' ' + ' <br>' + ' <p>')
        });
    });
    $.getJSON("threads.json", function(threadsResult){
        $.each(threadsResult, function(i, field){
            $("div").append(JSON.stringify(field['id']) + ' ' + JSON.stringify(field['title'])+ ' <br>' + ' <p>')
        });
    });
});
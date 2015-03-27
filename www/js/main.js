/**
 * Created by Luuk on 24-2-2015.
 */

function loadNews(){
    $.ajax({
        url: "http://www.oke.fm/wp-json/posts",
        beforeSend: function() {
            $.mobile.loading("show", {
                textVisible: false,
                textonly: false
            });
        }
    })
        .done(function(data) {
            $.mobile.loading("hide");

            var contentDiv = $('#content'),
                ul = $('<ul>', {"data-role":"listview", "data-inset":true, class:"ui-listview"}),
                counter = 0,
                className = "";

            $.each(data, function(key, value) {
                if (counter == 0) {
                    className = "ui-first-child"
                }
                var li =  $('<li>', {class:className});
                li.append('<a href="post.html?post='+value.ID+'" data-ajax="false" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+value.title+ '</a>');
                ul.append(li);
                counter ++;
            });

            contentDiv.html(ul);
        });
};

function loadNewsItem(id) {
    $.ajax({
        url: "http://www.oke.fm/wp-json/posts/"+id,
        beforeSend: function() {
            $.mobile.loading("show", {
                textVisible: false,
                textonly: false
            });
        }
    })
        .done(function(data) {
            $.mobile.loading("hide");

            var contentDiv = $('#content');

            contentDiv.html(data.content);
        });
};

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}



$(document).ready(function(){

    $('#addClass button').click(function(){
        $('#addClass p').addClass('red');
    });

    // put your code for the remaining functions below

    $('#hide').click(function(){
      $('#hide p').hide();
    });

    $('#show').click(function(){
        $('#show p').show();
      });
    
    $('#toggle').click(function(){
        $('#toggle p').toggle();
    });

    $('#slideDown').click(function(){
        $('#slideDown p').slideDown();
    });

    $('#slideUp').click(function(){
        $('#slideUp p').slideUp();
    });

    $('#slideToggle').click(function(){
        $('#slideToggle p').slideToggle();
    });

    $('#fadeIn').click(function(){
        $('#fadeIn p').fadeIn(5000);
    });
    $('#fadeOut').click(function(){
        $('#fadeOut p').fadeOut();
    });
    $('#before').click(function(){
        $('#before p').before("<p>Before this Paragraph</p>");
    });
    $('#after').click(function(){
        $('#after p').after("<p>After this Paragraph</p>");
    });
    $('#append').click(function(){
        $('#append p').append(" I am adding this after the paragraph");
    });
    $('#html').click(function(){
        console.log($('#html p').html("<h1>CHANGED</h1>"));
    });
    $('#attr').click(function(){
        console.log($('#attr img').attr("width","200"));
    });
    $('#val').click(function(){
        console.log($('#val input').val());
    });
    $('#text').click(function(){
        $('#text p').text("the text of the paragraph is now changed!");
    });

});
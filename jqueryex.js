
$(document).ready(function() {
    console.log('DOM Loaded');
    var expectedKeys = ['Q'];
    var expectedKeyIndex = 0; 
     
    $('#keyboard-upper-container').hide();
    
    $(document).keydown(function(e){
        console.log('key pressed');
        if(e.which == 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }
    });
    $(document).keyup(function(e) {
        if(e.which == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }
    });
    
    $(document).keypress(function(e){
        $('#' + e.which).addClass('highlight');
        
    });
    
    $(document).keyup(function(e){
        $('.well').removeClass('highlight');
    });    
    $(document).keydown(function(e){
        console.log('to the right');
        if(e.which == '.keypress') {
        $('#block').animate({left: '+=10px'},230);
        } else {
            
        }
    });
    
    var setences = ['ten ate neite ate nee enet ite ate inet ent eate',
                    'Too ato too nOt enot one totA not anot tOO aNot', 
                    'oat itain oat tain nate eate tea anne inant nean', 
                    'itant eate anot eat nato inate eat anot tain eat', 
                    'nee ene ate ite tent tiet ent ine ene ete ene ate']; 
    $('#words').append(setences[1]);      
    
    // var typedLetters = [];
    // typedLetters.push();
    // $('#words-typed').append(typedLetters[])
    // var typedLetters = [];
    // var wordsTyped = document.createElement("input");
    $(document).on('keypress',function (e) {
    var typedLetters = [];
    var wordsTyped = document.createElement("input");
        if(e.which == 'sentences[1]');
        $(document).keydown();
        $('#typed-words').append(wordsTyped);
        typedLetters.push(wordsTyped);
    });    
    // $(document).on('upkey',function(e){
    //     $('.row').removeClass('goat');
    // });
});

       
    
    // $(document).on('keyup', function(e){
    //     console.log('key released');
    //     switch(e.keyCode){
    //         case 16:
    //             $('#keyboard-upper-container').hide();
    //             $('#keyboard-lower-container').show();
    //             break;
    //         case 81:
    //             $('#Q').removeClass('highlight');
    //             console.log('Q keyup');
    //             break;            
    //     }
    // });
//});
//.delay(250).queue(function(){
     //               $('#Q').removeClass('highlight').dequeue();
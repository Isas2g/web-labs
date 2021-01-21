
$(document).ready(function() {
    // alert('Jquery is ready');
    
    $('.block1').addClass('newClass');
    
    $('.btn').click(function() {alert('!')});
    
    $('.email-form').find('input.mail').css("border", "2px solid red");
    
    $('input').filter('[type=email]').css("border", "2px solid red");
    
      $('.contacts-block').click(function() {
          $('.contacts-block').toggleClass('active');
      });
    
      $('.email-form').find('input.mail').attr('value', 'example@mail.com');
    
      $('input').filter('[type=text]').prop('type','number');
    
    $('.contacts-block').trigger('click');
    $('.contacts-block').on('click', _ => alert('!'));
    
    let hidden = false;
    $('.submit').click(function() {
        if (hidden) {
            $('.message').show('slow');
            $('.mail2').unwrap();
            $('.toPrepend').prepend('<b>Prepended message </b>');
            $('.submit').html('<input type="button" value="Show">');
            hidden = false;
        } else {
            $('.message').hide('slow');
            $('.mail2').wrap("<div></div>");
            $('.toPrepend').append('<b>Appended message </b>');
            $('.submit').html('<input type="button" value="Hide">');
            hidden = true;
        }
    });
});
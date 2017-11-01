var empty = true;
$(document).ready(function() {
    localStorage.myNote && $("#note").val(localStorage.myNote),
    $("#note").keyup(function() {
        localStorage.setItem('myNote', $("#note").val());
        console.log(empty)

        if (localStorage.myNote.length > 0){
            empty = false;
        } else {
            empty = true;
        }
    });

    $('#toggle').on('click', function() {
        if (empty === true){
            if ($('#note').attr('placeholder')) {
                $('#note').removeAttr('placeholder');
            } else {
                $('#note').attr('placeholder', 'keepsake is built using the Local Storage on your computer, meaning that whatever you put in here can\'t be accessed by anybody else. Including me, seriously.');
            }
        } else {
            $('.holder__privacy').toggleClass('is-shown');
        }
    });
});

$('#auth-button').click(function() {
    const login = $('#login').val();
    const password = $('#password').val();
    const csrf = $('[name=csrf=csrfmiddlewaretoken]').val();
    const authButton = $(this)
    if(!login) {
        alert('введите email');
        return;
    }
    if(!password) {
        alert('введите пароль');
        return;
    }
    $.ajax({
        url: '/feedback/',
        type:'POST',
        data:{
            'login':login,
            'password':password,
            'csrfmiddlewaretoken': csrf
        },
        dataType: 'json',
        success:function(data) {
            console.log('Success: ', data);
            submitButton.text('отправлено');
            submitButton.prop('disabled', true);
            submitButton.css({
                'background-color':'#4CAF50',
                'color': '#fff',
            });
        },
        error: function(error){
            console.error('Error: ', error);
            submitButton.text('не удалось отправить');
            submitButton.prop('disabled', false);
            submitButton.css({
                'background-color':'red',
                'color': '#fff',
            });
        }
    })
});
$('#reg-button').click(function(){
    const login = $('#login').val();
    const password = $('#password').val();
    const email = $('#email').val();
    const csrf = $('[name=csrfmiddlewaretoken]').val();
});
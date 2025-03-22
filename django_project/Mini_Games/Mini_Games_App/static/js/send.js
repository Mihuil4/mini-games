$('#submit-button').click(function() {
    const email = $("#email").val();
    const csrf = $('[name=csrf=csrfmiddlewaretoken]').val();
    const submitButton = $(this);

    if(!email) {
        alert('введите email');
        return;
    }

    $.ajax({
        url: '/feedback/',
        type:'POST',
        data:{
            'email':email,
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
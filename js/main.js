$(document).ready(function(){
    $('header button').on('click', function(e){
        $('form').slideDown();
    });

    $('#btn_cancel').on('click', function(e){
        $('form').slideUp();
        $('#task').val('');
    });


    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeTarefa = $('#task').val();
        if(nomeTarefa != ""){
            const newItem = $(`<li></li>`);
            $(newItem).click(function(){
                $(this).css('text-decoration', 'line-through');
            })
            $(`<p>${nomeTarefa}</p>`).appendTo(newItem);
            $(newItem).appendTo('ul');
            $('#task').val('');
        }
    });

    
})
$(document).ready(function() {
    $('#formTarefa').submit(function(event) {
    event.preventDefault();

    var tarefa = $('#tarefa').val();
    if (tarefa !== '') {
        $('#listaTarefas').append('<li>' + tarefa + '</li>');
        $('#tarefa').val('');  
    }
    });

    $(document).on('click', '#listaTarefas li', function() {
    $(this).toggleClass('completed');
    });
});
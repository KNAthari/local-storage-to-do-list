$(document).ready(function(){
    function myList(){

        var task = $("form").serializeArray();
        console.log(task);
        $('#to-do-list').append('<li>' + task + '</li>');
        e.preventDefault();


        localStorage.task = JSONstringify(task);

        $('#to-do-list').on("click", 'li', function(){
            var list = $(this).index();
            list.splice(i);
        });

        
       
        
    }
});
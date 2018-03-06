
function addText(text) {
  return (
    '<li class="task">'+
      '<p lass="text">' + text + '</p>'+
      '<span class="close">x</span>'+
    '</li>');
}
 
 $('#js-add-task').on('click', function() {
  var newTaskTitle = $('#add-task-input').val().trim();
  if (newTaskTitle === '') {
      return;
  }
  var newTaskHtml = addText(newTaskTitle);
  $('.todoList-content').append(newTaskHtml);
});
 
 $('.todoList-content').on('click','.task',function(){
     $(this).toggleClass('checked');
 });
 
 $('.todoList-content').on('click','.close',function(){
    var item = $(this).parent();
    item.remove();
 });
 
//your code here
var todovalue = document.getElementById("newTodoInput");
var btn = document.getElementById("addTodoBtn");
var ol = document.getElementById("todoList");

function xys()
{
	if(todovalue.value)
	{
		var abc = document.createElement('li');
		abc.textContent = todovalue.value;
		ol.appendChild(abc);
		todovalue.value = "";
	}
}
btn.addEventListener("click" , xys);

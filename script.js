function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Por favor escribe una tarea.');
    return;
  }

  const ul = document.getElementById('taskList');
  const li = document.createElement('li');

  // Permitir marcar como completada al hacer clic en el texto
  const span = document.createElement('span');
  span.textContent = taskText;
  span.onclick = function() {
    li.classList.toggle('completed');
  };

  // Botón para eliminar la tarea
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function() {
    ul.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  ul.appendChild(li);

  input.value = '';
}

// Permitir agregar presionando la tecla "Enter"
document.getElementById('taskInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

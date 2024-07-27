const addBtn = document.querySelector('.add-btn');
const displayWorkoutLog = document.querySelector('.display-workout-log');
addBtn.addEventListener('click', () => {
  let inputTextValue = document.querySelector('.input-text').value;
  const duration = document.querySelector('.input-duration').value;

  if (!inputTextValue || !duration) {
    document.querySelector(
      '.warning'
    ).innerHTML = `Please fill in both fields.`;
  } else {
    const div = document.createElement('div');
    div.innerHTML = `
    ${inputTextValue} - ${duration} minutes
    `;
    div.className = 'log-container';
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = 'Delete';
    div.appendChild(deleteBtn);
    displayWorkoutLog.appendChild(div);
    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.target.parentNode.remove();
      });
    });
    document.querySelector('.warning').innerHTML = ' ';
    document.querySelector('.input-text').value = '';
    document.querySelector('.input-duration').value = '';
  }
});

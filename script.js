document.getElementById('add-button').addEventListener('click', function() {
    let todo = document.getElementById('todo-input').value;
    if (todo) {
        let li = document.createElement('li');
        li.textContent = todo;
        document.getElementById('todo-list').appendChild(li);
        document.getElementById('todo-input').value = '';
    }
});

document.getElementById('todo-list').addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
        e.target.parentNode.removeChild(e.target);
    }
});

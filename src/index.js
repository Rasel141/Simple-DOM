import './index.css'

window.onload = function() {

    const taskField = document.querySelector('#taskField')
    const addTaskBtn = document.querySelector('#addTaskBtn')
    const allTaskParent = document.querySelector('#allTasks')

    taskField.addEventListener('keypress', event => {

        if(event.keyCode === 13) {
            
            createNewTask(allTaskParent, event.target.value)
            this.value = ""
            
        }
    })
}

function createNewTask(parent, task) {
    
    let col = create({'class': 'col-sm-3'})

    let singleTask = create({'class': 'single-task d-flex'})

    let singleTaskP = create('p')
    singleTaskP.innerHTML = task 
    singleTask.appendChild(singleTaskP)

    col.appendChild(singleTask)
    parent.appendChild(col)

    let span = create('span', {'class': 'ml-auto'})
    span.innerHTML = `<i class="fas fa-times-circle"></i>`

    span.addEventListener('click', event => {
        parent.removeChild(col)
    })

    

    singleTask.appendChild(span)
}



window.create = function () {

    if (arguments.length === 0) {
        return document.createElement('div');
    }

    if (arguments.length === 1 && typeof arguments[0] != 'object') {
        return document.createElement(arguments[0]);
    }

    var tag = arguments[0];
    var attr = arguments[1] || arguments[0];

    if (arguments.length === 1 && typeof arguments[0] === 'object') {
        tag = 'div';
    }

    var element = document.createElement(tag);

    for (var i in attr) {
        element.setAttribute(i, attr[i]);
    }

    return element;
}
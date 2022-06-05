class Task {
    constructor(task, comp) {
        this.task = task;
    }

    static fromJSON(json) {
        return new Task(
          json.task
        );
    }
}

class UI {
    constructor() {
        this.form = document.getElementById('form');
        this.task = document.getElementById('task');
        this.table = document.getElementById('table');
        //this.checked = document.getElementById('checked');

        this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
        
        this.tasks = [];
        this.loadFromLocalStorage();
        this.renderTable();
    }

    onFormSubmit(e) {
        e.preventDefault();
        const task = new Task (this.task.value);
        this.tasks.push(task);
        this.saveToLocalStorage();
        this.renderTable();
        this.task.value = '';
    }

    /*delete(e) {

    }
*/
    /*
    <tr>
        <td>title</td>
        <td>author</td>
        <td>isbn</td>
        <td>action</td>
    </tr>
    */
    renderTable() {
        this.table.innerHTML = [];
        for(let i = 0; i < this.tasks.length; i++) {
            const inp = this.tasks[i];

            const tr = document.createElement('tr');
            const tdtask = document.createElement('td');
            const tdcomp = document.createElement('td');
            const tdact = document.createElement('td');

            const removeButton = this.removeButton(inp);
            tdact.appendChild(removeButton);
            const compButton = this.completeButton(inp);
            tdcomp.appendChild(compButton);

            tdtask.innerHTML = inp.task;
            
            tr.appendChild(tdtask);
            tr.appendChild(tdcomp);
            tr.appendChild(tdact);

            this.table.appendChild(tr);
        }
    }

    removeButton(tas) {
        const button = document.createElement('button');
        
        button.setAttribute('class', 'btn btn-danger btn-sm');
        button.innerHTML = 'X'
        button.addEventListener('click', () => this.onRemoveClicked(tas));
        
        return button;
    }

    completeButton() {
        const checkbox = document.createElement('input');
        checkbox.setAttribute('class', 'form-check-input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', 'checked');
        return checkbox;
    }

    onRemoveClicked(tas) {
        this.tasks = this.tasks.filter((x) => {
            return tas.task !== x.task;
        });
        this.saveToLocalStorage();
        this.renderTable();
      }
    
    saveToLocalStorage() {
      const json = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', json);
    }

    loadFromLocalStorage() {
      const json = localStorage.getItem('tasks');
      if (json) {
        const taskArr = JSON.parse(json);
        this.tasks = taskArr.map(x => Task.fromJSON(x));
        }
    }
}

const ui = new UI();
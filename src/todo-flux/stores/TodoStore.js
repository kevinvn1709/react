import { EventEmitter } from 'events';
import dispatcher from "../dispatcher";
import _ from 'lodash';

class TodoStore extends EventEmitter {
    constructor(props) {
        super(props);
        this.todos = [
            {
                id: 113,
                title: "go home",
                status: false
            }, {
                id: 114,
                title: "go back",
                status: false
            }
        ]
    }

    createTask(title) {
        this.todos.push({
            id: _.uniqueId(),
            title: title,
            status: false
        });
    }

    getAll() {
        return this.todos;
    }

    handleAction(action) {
        switch (action.type) {
            case "CREATE_TODO":
                this.createTask(action.text);
                this.emit("create");
                break;
            case "RECEIVE_TODOS":
                this.todos = action.todos;
                this.emit("change");
                break;
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));

export default todoStore;
import { EventEmitter } from 'events';
import dispatcher from "../dispatcher";
import _ from 'lodash';

class UserStore extends EventEmitter {
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
                console.log('user TODO');
                break;
        }
    }
}

const userStore = new UserStore;
dispatcher.register(userStore.handleAction.bind(userStore));

export default userStore;
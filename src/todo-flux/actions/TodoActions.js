import dispatcher from "../dispatcher";

module.exports = {
    createTodo: function (text) {
        dispatcher.dispatch({
            type: "CREATE_TODO",
            text,
        });
    }
};

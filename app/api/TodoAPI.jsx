module.exports = {
    setTodos: (todos) => {
        if (Array.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos
        }
    },
    getTodos: () => {
        try {
            var todos = JSON.parse(localStorage.getItem('todos'));
        } catch (e) {
            return [];
        }
        return Array.isArray(todos) ? todos : [];
    },
    filterTodos: (todos, showCompleted, searchText) => {
        var filteredTodos = todos;

        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted
        });

        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1;
        });

        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else return 0
        });

        return filteredTodos;
    }
};
/*

    TO DO:
        - Define all the API call to get, add, update and delete task.

    exemple :
        const getAllToDo = (setToDo) => {
            axios
            .get(baseUrl)
            .then(({ data }) => {
                console.log('data ---> ', data);
                setToDo(data)
        })
}

*/

const getAllToDo = (setToDo) => {

}

const addToDo = (text, setText, setToDo) => {

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

}

const deleteToDo = (_id, setToDo) => {

}


export { getAllToDo, addToDo, updateToDo, deleteToDo }
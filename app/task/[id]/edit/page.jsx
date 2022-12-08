import EditTaskForm from "../../../../components/profilePage/EditTask";
const fetchTask = (id) => {
    return fetch(`http://localhost:3001/tasks/${id}`).then((res) => res.json());
}
export default async function EditPage({params}) {
    const {id} = params
    const task = await fetchTask(id)
    return (
        <section>
            <EditTaskForm id={task.id} taskValues={task}/>
        </section>
    )
}
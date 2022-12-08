import Link from "next/link";
import {PersonItem} from "../../../components/homePage/PersonItem";
import {TaskItem} from "../../../components/profilePage/TaskItem";
export const fetchProfile = (id) => {
    return fetch(`http://localhost:3001/people/${id}`).then(res => res.json())
}
const fetchTasks = (id) => {
    return fetch(`http://localhost:3001/people/${id}/tasks`).then(res => res.json())
}
export default async function Page({params}) {
    const {id} = params
    const profile = await fetchProfile(id)
    const tasks = await fetchTasks(id)
    return (

        <article>
            <Link href={`profile/${id}/edit`}>edit profile</Link>
           <PersonItem person={profile}/>
            <section>
                {
                tasks.map((task, index) =>
                    <Link key={index} href={`task/${task.id}/edit`}>
                        <TaskItem task={task}/>
                    </Link>
                  )
                }
            </section>
        </article>
    )
}
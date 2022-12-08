import Link from "next/link";
import {PersonItem} from "../../../components/homePage/PersonItem";
export const fetchProfile = (id) => {
    return fetch(`http://localhost:3001/people/${id}`).then(res => res.json())
}
export default async function Page({params}) {
    const {id} = params
    const profile = await fetchProfile(id)
    return (

        <article>
            <Link href={`profile/${id}/edit`}>
                edit profile
            </Link>
           <PersonItem person={profile}/>
        </article>
    )
}
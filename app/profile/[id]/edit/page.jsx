import EditForm from "../../../../components/editPage/EditForm";
import {fetchProfile} from "../page";
export default async function EditPage({ params}) {
    const { id } = params;
    const profile = await fetchProfile(id)
    return (
        <main>
            <EditForm id={id} profileValues={profile}/>
        </main>
    )
}
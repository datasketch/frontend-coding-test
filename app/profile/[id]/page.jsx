import Image from "next/image";

const fetchProfile = (id) => {
    return fetch(`http://localhost:3001/people/${id}`, {
        next: {
            revalidate: 10
        }
    }).then(res => res.json())
}
export default async function Page({params}) {
    const {id} = params
    const profile = await fetchProfile(id)
    return (
        <article>
            <figure>
                <Image width={30} height={30} src={profile.picture} alt={profile.fullName} />
                <figcaption>
                    <h2>Name: {profile.fullName}</h2>
                    <h3>Age: {profile.age}</h3>
                    <h4>Occupation: {profile.occupation}</h4>
                </figcaption>
            </figure>

        </article>
    )
}
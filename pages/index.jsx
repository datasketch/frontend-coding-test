import PageLayout from "../components/PageLayout";
import ProfileList from "../components/Lists/Profiles/ProfileList";

function HomePage() {
  return (
    <PageLayout title="Home">
      <ProfileList/>
    </PageLayout>
  );
}

export default HomePage;
import useAuth from "../hooks/useAuth";
import ProfileCard from "../components/profile/ProfileCard";

function Profile() {
  const { user } = useAuth();

  return (
    <section className="mx-auto max-w-md px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Your profile
      </h1>
      <div className="mt-8">
        <ProfileCard user={user} />
      </div>
    </section>
  );
}

export default Profile;

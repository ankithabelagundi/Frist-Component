import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Ankitha";
  const age = 24;

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;

import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";

function Sidebar() {
  const {
    user: { docId, fullName, username, userId, following },
  } = useUser();
  console.log(following, "following");
  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} following={following} loggedUserId={docId} />
    </div>
  );
}
export default Sidebar;

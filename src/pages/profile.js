import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import Header from "../components/header";

import UserProfile from "../components/profile";

function Profile() {
  const { username } = useParams();
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkUserExists() {
      const user = await getUserByUsername(username);
      if (user.length > 0) {
        setUser(user[0]);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }
    checkUserExists();
  }, [username, history]);

  return user?.username ? (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}

export default Profile;

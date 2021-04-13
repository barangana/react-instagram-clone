import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { getUserPhotosByUsername } from "../../services/firebase";
import Profile from "../../pages/profile";
import Header from "./header";
import Photos from "./photos";

const reducer = (state, newState) => ({ ...state, ...newState });
const initialState = {
  profile: {},
  photosCollection: [],
  followerCount: 0,
};

function Index({ user }) {
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = getUserPhotosByUsername(user.username);
      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    }
    getProfileInfoAndPhotos();
  }, [user.username]);
  return (
    <div>
      <Header />
      <Photos photos={photosCollection} />
      <p>Hello {user.username}</p>
    </div>
  );
}

Index.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number.isRequired,
    emailAddress: PropTypes.string.isRequired,
    followers: PropTypes.array.isRequired,
    following: PropTypes.array.isRequired,
    fullname: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
};

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
// };
export default Index;

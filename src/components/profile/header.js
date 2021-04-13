import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

function Header() {
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  return <div>i am the profile Header</div>;
}

export default Header;

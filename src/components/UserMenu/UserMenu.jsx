import { useSelector } from "react-redux";
import authSelectors from "redux/auth-selector";
import defaultAvatar from "./avatar.png";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    color: "#ffff",
    marginRight: 12,
  },
};

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUsername);
  return (
    <div className={styles.container}>
      <img className={styles.avatar} width="32" src={defaultAvatar} alt="" />
      <span className={styles.name}>Welcome, {userName}</span>
      <button type="button">Log Out</button>
    </div>
  );
};

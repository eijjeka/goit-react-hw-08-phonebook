import { useSelector, useDispatch } from "react-redux";
import authOperations from "redux/auth-operations";
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
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img className={styles.avatar} width="32" src={defaultAvatar} alt="" />
      <span style={{ color: "#fff" }} className={styles.name}>
        Welcome, {userName}
      </span>
      <button onClick={() => dispatch(authOperations.logOut())} type="button">
        Log Out
      </button>
    </div>
  );
};

import { useSelector, useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import authSelectors from "redux/auth/auth-selector";
import {
  UserContainer,
  AvatarImg,
  UserName,
  ButtonLogOut,
} from "./UserMenu.styled";
import defaultAvatar from "components/images/avatar.png";

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <UserContainer>
      <AvatarImg width="32" src={defaultAvatar} alt="" />
      <UserName style={{ color: "#fff" }}>Welcome, {userName}</UserName>
      <ButtonLogOut
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
      >
        Logout
      </ButtonLogOut>
    </UserContainer>
  );
};

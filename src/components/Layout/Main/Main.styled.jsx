import styled from "styled-components";
import mainBG from "components/images/homePageBg.jpg";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 56px - 62px);
  background: linear-gradient(
      335deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(94, 94, 98, 0.5) 100%
    ),
    url(${mainBG});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
`;

export default Main;

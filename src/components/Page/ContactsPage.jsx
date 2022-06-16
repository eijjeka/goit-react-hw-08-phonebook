import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selector";
import { useGetContactsQuery } from "redux/contacts/contactsApi";
import Container from "components/Container";
import Form from "components/Form";
import List from "components/ContactsList";
import Filter from "components/Filter";
import styled from "styled-components";
import bgImage from "components/images/contactMainBg.jpg";

const ContactsPage = () => {
  const { data, isFetching } = useGetContactsQuery();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <MainContainer>
      <Container>
        <Form />
        {isLoggedIn && data && (data.length > 1 ? <Filter /> : "")}
        <List />
      </Container>
    </MainContainer>
  );
};

export default ContactsPage;

const MainContainer = styled.div`
  background: linear-gradient(
      335deg,
      rgba(9, 5, 47, 0.2) 0%,
      rgba(49, 29, 94, 0.2) 100%
    ),
    url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  overflow-y: scroll;
  max-height: calc(100vh - 56px - 62px);
`;

import Container from "components/Container";
import Form from "components/Form";
import { List } from "components/ContactsList/ContactsList";
import Filter from "components/Filter/FIlter";
import styled from "styled-components";
import bgImage from "components/phone2.jpg";
import { useGetContactsQuery } from "redux/contacts/contactsApi";

const ContactsPage = () => {
  const { data, isFetching } = useGetContactsQuery();
  return (
    <MainContainer>
      <Container>
        {/* <Title>Phonebook &#128211;</Title> */}
        <Form />
        {isFetching ? "" : data.length > 1 && <Filter />}
        <List />
      </Container>
    </MainContainer>
  );
};

export default ContactsPage;

const Title = styled.h1``;

const MainContainer = styled.div`
  background: linear-gradient(
      335deg,
      rgba(9, 5, 47, 0.4) 0%,
      rgba(49, 29, 94, 0.4) 100%
    ),
    url(${bgImage});
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

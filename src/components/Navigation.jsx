import { Navbar, Container, Nav } from "react-bootstrap";

export const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Phonebook</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

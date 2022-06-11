import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selector";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthNav } from "components/UserMenu/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";

export const Header = () => {
  const user = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Phonebook
            </Navbar.Brand>
            ,
            <Nav>
              <Nav.Link active as={NavLink} to="/">
                Home
              </Nav.Link>
              {user && (
                <Nav.Link as={NavLink} to="/contacts">
                  Contacts
                </Nav.Link>
              )}
            </Nav>
            {user ? <UserMenu /> : <AuthNav />}
          </Container>
        </Navbar>
      </motion.div>
    </>
  );
};

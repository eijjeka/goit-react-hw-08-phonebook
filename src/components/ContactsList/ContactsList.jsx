import { useSelector } from "react-redux";
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from "redux/contacts/contactsApi";
import { getFilter } from "redux/contacts/contactsSlice";
import {
  ContainerList,
  Title,
  Wrapper,
  Item,
  ButtonClose,
  TextList,
} from "./ContactList.styled";
import { TailSpin } from "react-loader-spinner";
import Table from "react-bootstrap/Table";

export const List = () => {
  const { data, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const nameFilter = useSelector(getFilter);
  const FilterItems = () => {
    return data.filter((item) => item.name.toLowerCase().includes(nameFilter));
  };

  let contacts = nameFilter === "" ? data : FilterItems();

  return (
    <ContainerList>
      <Title>Contacts</Title>
      {isFetching && <TailSpin color="#427ae4" ariaLabel="loading-indicator" />}
      {data && (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              {/* <th>Favourites</th> */}
              <th>Contact Name</th>
              <th>Phone Number</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(({ id, name, number }, index) => (
              <tr key={id}>
                {/* <td></td> */}
                <td>{name}</td>
                <td>{number}</td>
                <td>
                  <ButtonClose onClick={() => deleteContact(id)}>
                    &#10007;
                  </ButtonClose>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </ContainerList>
  );
};

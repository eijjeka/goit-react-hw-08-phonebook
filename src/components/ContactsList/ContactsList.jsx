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
        <Wrapper>
          {contacts.map(({ id, name, number }, index) => (
            <Item key={id} index={index}>
              {name} : {number}
              <ButtonClose onClick={() => deleteContact(id)}>
                &#10007;
              </ButtonClose>
            </Item>
          ))}
          {contacts.length === 0 && <TextList>No Contacts</TextList>}
        </Wrapper>
      )}
    </ContainerList>
  );
};

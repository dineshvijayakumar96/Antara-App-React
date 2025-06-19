import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton, Filter, TextInput } from 'react-admin';
import getUserDetails from '../../jwt-token/getUserDetails';
import { useState } from 'react';

function HomeContactList(props) {

  const Title = "Antara Admin - Home Contact Forms";
      
  useState(() => {
    document.title = Title;
  }, []);

  const userDetails = getUserDetails();
  const userAccess = userDetails.roles.includes("ROLE_MANAGER", "ROLE_ADMIN") ? "edit" : "show";

  const HomeContactFilter = (props) => (
    <Filter {...props}>
      <TextInput label="Search by Name" source="name" alwaysOn />
      <TextInput label="Search by Email" source="email" />
    </Filter>
  );

  return (
    <div>
        <List filters={<HomeContactFilter/>} {...props}>
            <Datagrid rowClick={userAccess}>
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <TextField source="mobile" />
                <TextField source="gender" />
                <TextField source="country" />
                <TextField source="city" />
                <TextField source="nationality" />
                <TextField source="message" />
                <TextField source="referral" />
                { userDetails.roles.includes("ROLE_MANAGER", "ROLE_ADMIN") ? <EditButton /> : <></> }
                { userDetails.roles.includes("ROLE_ADMIN") ? <DeleteButton /> : <></> }
            </Datagrid>
        </List>
    </div>
  )
}

export default HomeContactList
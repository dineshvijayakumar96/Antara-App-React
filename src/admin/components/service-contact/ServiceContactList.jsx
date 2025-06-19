import { useState } from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton, Filter, TextInput } from 'react-admin';

function ServiceContactList(props) {

  const Title = "Antara Admin - Service Contact Forms";
      
  useState(() => {
    document.title = Title;
  }, []);

  const ServiceContactFilter = (props) => (
      <Filter {...props}>
        <TextInput label="Search by First Name" source="firstName" alwaysOn />
        <TextInput label="Search by Last Name" source="lastName" />
        <TextInput label="Search by Email" source="email" />
      </Filter>
    );

  return (
    <div>
        <List {...props} filters={<ServiceContactFilter/>}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="firstName" />
                <TextField source="lastName" />
                <EmailField source="email" />
                <TextField source="message" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </div>
  )
}

export default ServiceContactList
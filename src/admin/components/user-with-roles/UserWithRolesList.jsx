import { useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ShowButton,
  FunctionField,
} from "react-admin";

function UserWithRolesList(props) {

  const Title = "Antara Admin - Users";
      
  useState(() => {
    document.title = Title;
  }, []);

  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="username" />
        <FunctionField
          label="Roles"
          render={record => record.roles.map(r => r.role).join(', ')}
        />
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

export default UserWithRolesList;

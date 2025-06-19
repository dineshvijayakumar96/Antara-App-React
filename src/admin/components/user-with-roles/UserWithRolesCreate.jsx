import { ArrayInput, Create, SimpleForm, SimpleFormIterator, TextInput, SelectInput } from "react-admin";

function UserWithRolesCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="username" />
        <TextInput source="password" type="password" />
        <ArrayInput source="roles">
          <SimpleFormIterator>
            <SelectInput source="role" label="Role" choices={[
            { id: 'ADMIN', name: 'Admin' },
            { id: 'MANAGER', name: 'Manager' },
            { id: 'USER', name: 'User' },
            ]} />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}

export default UserWithRolesCreate;

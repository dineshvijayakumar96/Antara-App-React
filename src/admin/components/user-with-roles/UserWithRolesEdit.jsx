import { ArrayInput, Edit, SelectInput, SimpleForm, SimpleFormIterator, TextInput } from "react-admin";

function UserWithRolesEdit(props) {
  return (
    <Edit {...props} transform={data => ({ ...data, roles: data.roles.map(role => ({ role: role.role }))})}>
      <SimpleForm>
        <TextInput source="id" disabled />
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
    </Edit>
  );
}

export default UserWithRolesEdit;

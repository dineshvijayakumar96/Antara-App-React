import { Show, SimpleShowLayout, TextField } from "react-admin";

function UserWithRolesShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="username" />
        <TextField source="roles[0].name" label="Role" />
      </SimpleShowLayout>
    </Show>
  );
}

export default UserWithRolesShow;

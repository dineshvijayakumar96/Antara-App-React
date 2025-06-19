import { Edit, SimpleForm, TextInput } from "react-admin";

function HomeContactEdit(props) {

  return (
    <div>
      <Edit {...props} >
        <SimpleForm>
          <TextInput source="id" disabled />
          <TextInput source="name" />
          <TextInput source="email" />
          <TextInput source="mobile" />
          <TextInput source="gender" />
          <TextInput source="country" />
          <TextInput source="city" />
          <TextInput source="nationality" />
          <TextInput source="message" multiline />
          <TextInput source="referral" />
        </SimpleForm>
      </Edit>
    </div>
  );
}

export default HomeContactEdit;

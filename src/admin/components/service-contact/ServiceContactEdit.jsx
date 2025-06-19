import { Edit, SimpleForm, TextInput } from 'react-admin';

function ServiceContactEdit(props) {
  return (
    <div>
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="firstName" />
                <TextInput source="lastName" />
                <TextInput source="email" />
                <TextInput source="message" multiline />
            </SimpleForm>
        </Edit>
    </div>
  )
}

export default ServiceContactEdit
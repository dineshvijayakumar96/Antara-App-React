import { Create, SimpleForm, TextInput } from 'react-admin';


function ServiceContactCreate(props) {
  return (
    <div>
        <Create {...props}>
            <SimpleForm>
                <TextInput source="firstName" />
                <TextInput source="lastName" />
                <TextInput source="email" />
                <TextInput source="message" multiline />
            </SimpleForm>
        </Create>
    </div>
  )
}

export default ServiceContactCreate
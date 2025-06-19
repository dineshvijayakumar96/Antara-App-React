import { Create, SimpleForm, TextInput } from 'react-admin';


function HomeContactCreate(props) {
  return (
    <div>
        <Create {...props}>
            <SimpleForm>
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
        </Create>
    </div>
  )
}

export default HomeContactCreate
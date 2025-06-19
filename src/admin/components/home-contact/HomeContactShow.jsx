import { Show, SimpleShowLayout, TextField, EmailField } from 'react-admin';


function HomeContactShow(props) {
  return (
    <div>
        <Show {...props}>
            <SimpleShowLayout>
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
            </SimpleShowLayout>
        </Show>
    </div>
  )
}

export default HomeContactShow
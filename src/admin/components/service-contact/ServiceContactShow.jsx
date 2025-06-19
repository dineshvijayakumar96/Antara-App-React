import { Show, SimpleShowLayout, TextField, EmailField } from 'react-admin';


function ServiceContactShow(props) {
  return (
    <div>
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="firstName" />
                <TextField source="lastName" />
                <EmailField source="email" />
                <TextField source="message" />
            </SimpleShowLayout>
        </Show>
    </div>
  )
}

export default ServiceContactShow
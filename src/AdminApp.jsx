import { Admin, Resource } from "react-admin";
import authProvider from "./admin/authprovider/authProvider";
import dataProvider from "./admin/dataprovider/dataProvider";
import Dashboard from "./admin/Dashboard";
import Login from "./admin/Login";
import HomeContactList from "./admin/components/home-contact/HomeContactList";
import HomeContactEdit from "./admin/components/home-contact/HomeContactEdit";
import HomeContactCreate from "./admin/components/home-contact/HomeContactCreate";
import HomeContactShow from "./admin/components/home-contact/HomeContactShow";
import ServiceContactList from "./admin/components/service-contact/ServiceContactList";
import ServiceContactEdit from "./admin/components/service-contact/ServiceContactEdit";
import ServiceContactCreate from "./admin/components/service-contact/ServiceContactCreate";
import ServiceContactShow from "./admin/components/service-contact/ServiceContactShow";
import getUserDetails from "./admin/jwt-token/getUserDetails";
import UserWithRolesList from "./admin/components/user-with-roles/UserWithRolesList";
import UserWithRolesEdit from "./admin/components/user-with-roles/UserWithRolesEdit";
import UserWithRolesCreate from "./admin/components/user-with-roles/UserWithRolesCreate";
import UserWithRolesShow from "./admin/components/user-with-roles/UserWithRolesShow";

export default function AdminApp() {

  const userDetails = getUserDetails();
  const roles = userDetails?.roles || [];

  const canEditCreate = roles.includes("ROLE_MANAGER") || roles.includes("ROLE_ADMIN");

  return (
    <Admin basename="/antara-admin" loginPage={Login} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >

      <Resource name="home-contact-forms" list={HomeContactList} show={HomeContactShow} edit={canEditCreate ? HomeContactEdit : undefined} create={canEditCreate ? HomeContactCreate : undefined} />
      <Resource name="service-contact-forms" list={ServiceContactList} show={ServiceContactShow} edit={canEditCreate ? ServiceContactEdit : undefined} create={canEditCreate ? ServiceContactCreate : undefined} />
      { roles.includes("ROLE_ADMIN") ? <Resource name="users" list={UserWithRolesList} edit={UserWithRolesEdit} create={UserWithRolesCreate} show={UserWithRolesShow} /> : <></> }

    </Admin>
  );
}

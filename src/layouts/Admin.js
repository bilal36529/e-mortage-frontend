import React, { useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";

// components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

// views
import Dashboard from "../views/admin/Dashboard";
import Maps from "../views/admin/Maps.js";
import Settings from "../views/admin/Settings.js";
import Tables from "../views/admin/Tables.js";
import { useAuth } from "./AuthContext";
import { Route, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Admin() {
  // const { isAuthenticated } = useAuth();
  // const history=useHistory();
  // useEffect(()=>{
  //   console.log("@23 is working dashbaord")
  //     if(!isAuthenticated) {
  //       history.push("/login");
  //     }
  // },[isAuthenticated])
  return (
    <>
        <>
          <Sidebar />
          <div className="relative md:ml-64 bg-blueGray-100">
            <AdminNavbar />
            {/* Header */}
            <HeaderStats />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <Switch>
                <Route path="/admin/dashboard" exact component={Dashboard} />
                <Route path="/admin/maps" exact component={Maps} />
                <Route path="/admin/settings" exact component={Settings} />
                <Route path="/admin/tables" exact component={Tables} />
                <Redirect from="*" to="/admin/dashboard" />
              </Switch>
              <FooterAdmin />
            </div>
          </div>
        </>
      
    </>
  );
}

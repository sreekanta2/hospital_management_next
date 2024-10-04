import React from "react";
import PatientsLayout from "../_components/PatientsLayout";
import Accounts from "./_componenets/AccountsDetails";
import AccountsDetails from "./_componenets/AccountsDetails";

export default function page() {
  return (
    <PatientsLayout>
      <div className="w-full mx-auto">
        <AccountsDetails />
        <div></div>
      </div>
    </PatientsLayout>
  );
}

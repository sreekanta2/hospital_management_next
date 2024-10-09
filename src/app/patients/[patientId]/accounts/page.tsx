import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PatientsLayout from "../_components/PatientsLayout";
import AccountsDetails from "./_componenets/AccountsDetails";
import AccountsTabsContents from "./_componenets/AccountsTabsContents";
import RefaundsTabsContents from "./_componenets/RefaundsTabsContents";

export default function page() {
  return (
    <PatientsLayout>
      <div className="w-full mx-auto flex flex-col gap-4">
        <AccountsDetails />
        <div className="my-8">
          <Tabs defaultValue="accounts">
            <TabsList>
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="refunds">Refaunds</TabsTrigger>
            </TabsList>
            <hr className="my-4" />
            <AccountsTabsContents />
            <RefaundsTabsContents />
          </Tabs>
        </div>
      </div>
    </PatientsLayout>
  );
}

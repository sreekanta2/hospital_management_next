import LeftSidebar from "./_components/LeftSidebar";

// import "./_components/tailwind.css";
export default function page() {
  return (
    <div className="flex -mt-2 bg-white dark:bg-gray-950 rounded-md mb-4 h-screen ">
      {/* <LeftSidebarMenu /> */}
      {/* <Switicher /> */}
      <LeftSidebar />
      {/* <UserChats /> */}
    </div>
  );
}

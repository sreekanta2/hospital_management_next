import ChatItem from "./ChatItem";

export default function ChatItems() {
  return (
    <ul>
      <li className="md:flex items-center px-3 py-2 hidden md:visible text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
        <input
          type="text"
          placeholder="Search"
          className="block w-full py-2 pl-4 mx-3 bg-gray-100 focus:ring focus:ring-violet-500 rounded-full outline-none focus:text-gray-700"
          name="message"
          required
        />
      </li>

      <li>
        <ChatItem
          avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
          name="Saad Hasan"
          lastMessage="bye"
          lastTime="25 minutes"
        />
        <ChatItem
          avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
          name="Sumit Saha"
          lastMessage="will talk to you later"
          lastTime="10 minutes"
        />
        <ChatItem
          avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
          name="Mehedi Hasan"
          lastMessage="thanks for your support"
          lastTime="15 minutes"
        />
      </li>
    </ul>
  );
}

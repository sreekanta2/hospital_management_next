interface Message {
  justify: string;
  message: string;
}
export default function Message({ justify, message }: Message) {
  return (
    <li className={`flex justify-${justify}`}>
      <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
        <span className="block">{message}</span>
      </div>
    </li>
  );
}

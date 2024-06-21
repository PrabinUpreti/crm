import { ChatLayout } from "./Components/chat-layout";

const ChatDemo = () => {
  const layout = localStorage.getItem("chat-layout");
  const defaultLayout = layout ? JSON.parse(layout) : undefined;
  return (
    <div>
      {" "}
      <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
    </div>
  );
};

export default ChatDemo;

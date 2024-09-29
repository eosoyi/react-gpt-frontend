import { useState } from "react";
import { GptMessage } from "../components/chat-bubbles/GptMessage";
import { MyMessage } from "../components/chat-bubbles/MyMessage";
import { TypingLoader } from "../components/loaders/TypingLoader";
import { TextMessageBox } from "../components/chat-input-boxes/TextMessageBox";

interface Message {
  text: string;
  isGpt: boolean;
}

export const ChatTemplate = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text: text, isGpt: false }]);
    setIsLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessage text="Hola, estoy aqui para ayudarte, tu ReactGtp de confianza" />
          {messages.map((message, index) =>
            message.isGpt ? (
              <GptMessage key={index} text="Esto es OpenAI" />
            ) : (
              <MyMessage key={index} text={message.text} />
            )
          )}

          {isLoading && (
            <div className="col-start-1 col-end-12 ">
              <TypingLoader className="fade-in" />
            </div>
          )}
        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Escribe aqui lo que deseas"
        disableCorrections={true}
      />
    </div>
  );
};

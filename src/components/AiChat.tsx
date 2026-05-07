"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AiChat() {
  const headingText = "Ask Gemini about Jehoon's background!";
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [typedHeading, setTypedHeading] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      index += 1;
      setTypedHeading(headingText.slice(0, index));

      if (index >= headingText.length) {
        timeoutId = setTimeout(() => {
          index = 0;
          setTypedHeading("");
          type();
        }, 5000);
        return;
      }

      timeoutId = setTimeout(type, 45);
    };

    timeoutId = setTimeout(type, 45);

    return () => clearTimeout(timeoutId);
  }, [headingText]);

  const sendMessage = async () => {
    const trimmed = message.trim();
    if (!trimmed || loading) return;

    setLoading(true);

    const res = await fetch("https://portfolio-ai-chat.onrender.com/api/chat/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: trimmed }),
    });

    const data = await res.json();
    setAnswer(data.answer);
    setMessage("");
    setLoading(false);
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-medium text-gray-800">
        <Image
          src="/gemini-logo.png"
          alt="Gemini logo"
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <span>
          {typedHeading}
          <span className="ml-0.5 inline-block animate-pulse text-gray-500">|</span>
        </span>
      </h2>

      <div className="rounded-3xl border border-gray-200 bg-gray-50 px-3 py-2 shadow-inner">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="h-9 w-9 rounded-full text-lg text-gray-500 transition hover:bg-gray-200"
            aria-label="Attach"
          >
            +
          </button>

          <input
            className="h-10 flex-1 bg-transparent px-2 text-gray-800 placeholder:text-gray-500 focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                void sendMessage();
              }
            }}
            placeholder="Ask about my experience, projects..."
          />

          <button
            onClick={sendMessage}
            disabled={loading || !message.trim()}
            className="h-9 rounded-full bg-gray-900 px-4 text-sm font-medium text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </div>
      </div>

      {answer && (
        <div className="mt-4 whitespace-pre-line rounded-2xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-700">
          {answer}
        </div>
      )}

      <p className="mt-3 text-xs text-gray-500">
        [Notice]: First response may take a little longer because the backend server needs to wake up
        (free tier).
      </p>
    </div>
  );
}
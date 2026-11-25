'use client';

import React, { useState, useRef, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import { cn } from './Navbar';

export default function GeminiChat({ initialOpen = false }: { initialOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    {
      role: 'model',
      text: "Hi, I'm BuddyAI. I can help you explore Sadab's portfolio, projects, skills, and experience. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.slice(1).map((msg) => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.text }],
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history }),
      });

      if (!res.body) throw new Error('No stream body');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let modelResponse = '';

      setMessages((prev) => [...prev, { role: 'model', text: '' }]);

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunkValue = decoder.decode(value, { stream: true });
          modelResponse += chunkValue;

          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'model', text: modelResponse };
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'model', text: 'Sorry, I encountered an error while processing your request.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <m.div
            key="chatbox"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            className="w-[calc(100vw-48px)] sm:w-[380px] h-[500px] flex flex-col overflow-hidden rounded-3xl bg-background/90 backdrop-blur-xl border border-border shadow-[0_8px_32px_rgba(0,0,0,0.35)] origin-bottom-right"
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-border bg-gradient-to-r from-primary-dark to-secondary text-white">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-base">BuddyAI</h3>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                      msg.role === 'user'
                        ? "rounded-br-sm bg-primary text-background"
                        : "rounded-bl-sm bg-surface text-foreground border border-border"
                    )}
                  >
                    <p className="whitespace-pre-wrap font-sans">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl rounded-bl-sm bg-surface border border-border">
                    <Loader2 size={16} className="animate-spin text-primary" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-background/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1 bg-surface border border-border rounded-full px-4 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  aria-label="Send message"
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-primary text-background disabled:opacity-50 hover:bg-primary-dark transition-colors rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </m.div>
        ) : (
          <m.button
            key="fab"
            type="button"
            aria-label="Open BuddyAI chat"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            onClick={() => setIsOpen(true)}
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-primary text-white shadow-[0_4px_24px_rgba(0,224,255,0.35)] flex items-center justify-center cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 animate-ping" />
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 drop-shadow-lg">
              <path d="M12 8V4H8" />
              <rect width="16" height="12" x="4" y="8" rx="2" />
              <path d="M2 14h2" />
              <path d="M20 14h2" />
              <path d="M15 13v2" />
              <path d="M9 13v2" />
            </svg>
          </m.button>
        )}
      </AnimatePresence>
    </div>
  );
}

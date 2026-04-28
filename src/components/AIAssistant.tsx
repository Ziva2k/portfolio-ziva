import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { chatWithAssistant } from '../services/geminiService';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      parts: [{ text: "Xin chào! Tôi là trợ lý ảo của Alex. Bạn muốn biết thêm về kinh nghiệm hay các dự án marketing của anh ấy không?" }] 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    const handleOpenChat = (e: any) => {
      setIsOpen(true);
      if (e.detail) {
        setInput(e.detail);
      }
    };
    window.addEventListener('open-ai-chat', handleOpenChat);
    return () => window.removeEventListener('open-ai-chat', handleOpenChat);
  }, []);

  const handleSend = async (messageOverride?: string) => {
    const messageToSend = messageOverride || input;
    if (!messageToSend.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', parts: [{ text: messageToSend }] };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await chatWithAssistant(messageToSend, messages);
    
    setMessages(prev => [...prev, { role: 'model', parts: [{ text: responseText }] }]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isOpen && input && input === 'Hãy kể cho tôi nghe về cách bạn sử dụng Facebook Ads và TikTok Shop để tối ưu doanh thu.') {
      // Auto-send if we opened from the specific skill button
       handleSend(input);
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand-accent/40"
      >
        <MessageSquare size={24} className="md:w-7 md:h-7" />
        <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-brand-dark" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-5 left-5 md:left-auto md:right-8 z-50 md:w-[400px] h-[70vh] md:h-[600px] glass-card flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-accent/20 rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-brand-accent" />
                </div>
                <div>
                  <div className="text-sm font-bold">Thái's AI Assistant</div>
                  <div className="text-[10px] text-green-500 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "flex-row")}>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    msg.role === 'user' ? "bg-white/10" : "bg-brand-accent/20"
                  )}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-brand-accent" />}
                  </div>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' ? "bg-brand-accent text-white" : "bg-white/5 border border-white/10"
                  )}>
                    <div className="prose prose-invert prose-sm">
                      <ReactMarkdown>
                        {msg.parts[0].text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center">
                    <Bot size={14} className="text-brand-accent" />
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-brand-accent" />
                    <span className="text-xs opacity-50">Đang suy nghĩ...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Hỏi về kinh nghiệm của Thái..."
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-accent text-white rounded-full disabled:opacity-50 disabled:scale-95 transition-all"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="mt-2 text-[10px] text-center opacity-30">
                Powered by Gemini AI
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

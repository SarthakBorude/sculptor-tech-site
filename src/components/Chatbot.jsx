import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 Welcome to SculptorTech. How can I help you today?", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Simple "AI" Logic for responses
  const getBotResponse = (text) => {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('hello') || lowerText.includes('hi')) 
      return "Hello! Looking for web development or app services?";
    
    if (lowerText.includes('price') || lowerText.includes('cost')) 
      return "Our pricing depends on the project scope. You can use the 'Enquire Now' button to get a quote!";
    
    if (lowerText.includes('contact') || lowerText.includes('email')) 
      return "You can email us at sculptortechpvtltd@gmail.com or call +91 8623034275.";
      
    if (lowerText.includes('location') || lowerText.includes('where')) 
      return "We are located at Green City, Hadapsar, Pune.";

    return "Thanks for your message! Our team will reach out to you shortly. You can also fill out the contact form below.";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // 1. Add User Message
    const newUserMsg = { id: Date.now(), text: inputText, sender: 'user' };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputText('');
    setIsTyping(true);

    // 2. Simulate Bot Delay
    setTimeout(() => {
      const botResponseText = getBotResponse(newUserMsg.text);
      const newBotMsg = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
      
      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1000); // 1 second delay for realism
  };

  return (
    <>
      {/* 1. The Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-purple-600'
        }`}
      >
        {isOpen ? <X color="white" size={28} /> : <MessageCircle color="white" size={28} />}
      </button>

      {/* 2. The Chat Window */}
      <div className={`fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 origin-bottom-right ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
      }`}>
        
        {/* Header */}
        <div className="bg-slate-900 p-4 flex items-center gap-3">
          <div className="p-2 bg-purple-600 rounded-full">
            <Bot color="white" size={20} />
          </div>
          <div>
            <h3 className="text-white font-bold">Sculptor Assistant</h3>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-gray-300">Online</span>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-80 overflow-y-auto p-4 bg-slate-50 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-purple-600 text-white rounded-tr-none'
                    : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm text-gray-800"
          />
          <button
            type="submit"
            className="p-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
          >
            <Send color="white" size={18} />
          </button>
        </form>

      </div>
    </>
  );
};

export default Chatbot;
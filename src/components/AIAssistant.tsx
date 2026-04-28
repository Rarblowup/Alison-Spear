import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const knowledgeBase: Record<string, string> = {
  'hi': 'Hello! It is a pleasure to meet you. How can I assist you with Alison Spear\'s architecture today?',
  'hello': 'Hi there! Everything is going great. How can I assist you with Alison Spear\'s architecture today?',
  'how are you': 'I am doing wonderful, thank you for asking! How is architectural inspiration treating you today?',
  'contact': 'Our office is located at PO Box 360, Hughsonville, NY 12537. You can reach us at 845.298.0888 or alison@alisonspear.com.',
  'about': 'Alison Spear is an AIA-award-winning architect and interior designer with over thirty years of experience, creating refined, thoughtful living spaces.',
  'projects': 'Alison has worked on projects such as the Obercreek Residence, 69th Street Penthouse, and many more across Residential, Commercial, and Furniture design.',
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: string, text: string | React.ReactNode}[]>([{sender: 'ai', text: 'Hello! I am your assistant. How can I help you?'}]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const handlePayRar = () => {
        setIsOpen(true);
        setMessages(prev => [...prev, {sender: 'ai', text: 'Pay RAR First'}]);
    };
    window.addEventListener('pay-rar-event', handlePayRar);
    return () => window.removeEventListener('pay-rar-event', handlePayRar);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, {sender: 'user', text: userMsg}]);
    
    const lowerMsg = userMsg.toLowerCase();
    
    let response: string | React.ReactNode = '';
    
    if (lowerMsg.includes('hi') || lowerMsg.includes('hello')) response = knowledgeBase['hi'];
    else if (lowerMsg.includes('how are you') || lowerMsg.includes('how is everything')) response = knowledgeBase['how are you'];
    else if (lowerMsg.includes('contact')) response = knowledgeBase['contact'];
    else if (lowerMsg.includes('about')) response = knowledgeBase['about'];
    else if (lowerMsg.includes('projects')) response = knowledgeBase['projects'];
    else {
        response = (
            <span>
                I am not sure about that. Plz contact Our team for this: 
                <Link to="/contact" className="ml-1 underline text-blue-600">Contact Us</Link>
            </span>
        );
    }
    
    setTimeout(() => {
        setMessages(prev => [...prev, {sender: 'ai', text: response}]);
    }, 500);
    setInput('');
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-[#1a1a1a] text-[#fbfaf8] p-4 rounded-full shadow-lg z-[100] hover:bg-[#333] transition"
      >
        <MessageSquare />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-[#fbfaf8] border border-gray-200 shadow-2xl z-[100] rounded-lg overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="bg-[#1a1a1a] text-[#fbfaf8] p-4 flex justify-between items-center">
            <h4 className="font-serif">Assistant</h4>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          <div className="h-64 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <p key={i} className={`text-sm ${m.sender === 'user' ? 'text-right text-gray-500' : 'text-left text-[#1a1a1a]'}`}>{m.text}</p>
            ))}
          </div>
          <div className="p-2 border-t border-gray-200">
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              className="w-full text-sm p-2 bg-[#f4f3f0] rounded focus:outline-none"
              placeholder="Ask me something..."
            />
          </div>
        </div>
      )}
    </>
  );
}

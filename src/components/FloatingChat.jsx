"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Search, UserPlus, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

const agentPersona = {
    name: "Exagic Assistant",
    title: "AI Growth Strategist",
    welcome: "Hello! I'm your Exagic growth strategist. I can help you optimize your brand's visibility in AI-driven search results. What can we look into first?"
};


const FloatingChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('READY'); // READY, PROCESSING
    const [chatHistory, setChatHistory] = useState([
        { type: 'bot', text: agentPersona.welcome }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);
    const [activeAction, setActiveAction] = useState(null);
    const [suggestions, setSuggestions] = useState(['Audit my visibility', 'How SRO works', 'Contact the team']);
    const [stats, setStats] = useState({ latency: '24ms', tokens: '142/s', version: 'Exagic-Prime' });
    const [context, setContext] = useState({ topic: null, depth: 0 });
    const [showIntro, setShowIntro] = useState(false);
    const [hasEmail, setHasEmail] = useState(false);
    const [tempEmail, setTempEmail] = useState('');
    const router = useRouter();

    useEffect(() => {
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        };

        const checkAuth = () => {
            const emailProvided = getCookie('userEmail') !== null;
            setHasEmail(emailProvided);
        };
        checkAuth();
        window.addEventListener('focus', checkAuth);
        return () => {
            window.removeEventListener('focus', checkAuth);
        };
    }, []);

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(tempEmail.trim())) {
            return;
        }

        if (tempEmail.trim()) {
            document.cookie = `userEmail=${encodeURIComponent(tempEmail)}; path=/; max-age=31536000`; // 1 year expiry
            setHasEmail(true);

            try {
                await fetch('/api/chatbot-notify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        email: tempEmail, 
                        path: window.location.pathname 
                    })
                });
            } catch (err) {
                console.error("Failed to send chatbot notification", err);
            }
        }
    };

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowIntro(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    useEffect(() => {
        if (showIntro) {
            const timer = setTimeout(() => {
                setShowIntro(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showIntro]);

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [chatHistory, isTyping, isOpen]);

    const handleSendMessage = (e, presetMsg = null) => {
        if (e) e.preventDefault();
        const userMsg = presetMsg || message.trim();
        if (!userMsg) return;

        setChatHistory(prev => [...prev, { type: 'user', text: userMsg }]);
        setMessage('');
        setIsTyping(true);
        setStatus('THINKING');

        setTimeout(() => {
            let responseText = "Thank you for your message. Chatbot response logic is ready to be implemented here.";
            const lowMsg = userMsg.toLowerCase().trim();

            if (lowMsg.includes('audit')) {
                responseText = "I can help start an AI visibility audit for your brand. I will check how your brand is cited and recommended across models like GPT-4, Claude, and Gemini. Please visit our Audit page to get started.";
            } else if (lowMsg.includes('sro') || lowMsg.includes('optimization') || lowMsg.includes('how sro works')) {
                responseText = "Selection Rate Optimization (SRO) is our proprietary framework. We optimize your digital presence so that AI search engines and answer engines (like Perplexity and SearchGPT) actively select and recommend your brand as the top authority for industry queries.";
            } else if (lowMsg.includes('contact') || lowMsg.includes('team')) {
                responseText = "You can contact our team at any time to schedule a discovery call. Please visit our Contact page to get in touch.";
            } else if (lowMsg.match(/\b(hi|hello|hey|greetings|morning|afternoon)\b/)) {
                responseText = "Hello! I'm here to help you optimize your brand's AI visibility. Feel free to ask about our SRO framework, request a visibility audit, or contact our team.";
            }

            setChatHistory(prev => [...prev, { 
                type: 'bot', 
                text: responseText 
            }]);
            setIsTyping(false);
            setStatus('READY');
        }, 1000);
    };
    const toggleChat = () => {
        setIsOpen(!isOpen);
        setShowIntro(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="w-[350px] sm:w-[400px] max-h-[calc(100dvh-120px)] h-[600px] bg-white dark:bg-zinc-900 backdrop-blur-md rounded-[1.5rem] shadow-xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden no-scrollbar"
                    >
                        {/* Premium Header */}
                        <div className="p-5 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-sm">
                                            <MessageCircle size={20} />
                                        </div>
                                        <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-zinc-900 rounded-full"></span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-zinc-900 dark:text-white leading-tight">{agentPersona.name}</h3>
                                        <p className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5">{agentPersona.title}</p>
                                    </div>
                                </div>
                                <button onClick={toggleChat} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all active:scale-90">
                                    <X size={20} className="text-zinc-400" />
                                </button>
                            </div>

                            {activeAction && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-800 flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-orange-600 dark:text-orange-400">{activeAction}</span>
                                    </div>
                                    <span className="text-[10px] text-zinc-400 uppercase font-medium">In progress</span>
                                </motion.div>
                            )}
                        </div>

                        {/* Conversational Space or Email Gate */}
                        <div className="flex-grow overflow-hidden flex flex-col relative bg-white dark:bg-zinc-900">
                            {!hasEmail ? (
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 border border-orange-500/20">
                                        <MessageCircle size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 leading-tight">Wait! Let's stay connected</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed max-w-[280px] mx-auto">
                                        Please provide your email so that we can reach out if our connection is lost.
                                    </p>
                                    <form onSubmit={handleEmailSubmit} className="w-full space-y-3">
                                        <input 
                                            required
                                            type="email" 
                                            value={tempEmail}
                                            onChange={(e) => setTempEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-5 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-sm"
                                        />
                                        <button 
                                            type="submit"
                                            className="w-full py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                                        >
                                            Continue to Chat
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <>
                                    <div className="flex-grow p-6 overflow-y-auto overflow-x-hidden space-y-6 no-scrollbar scrolling-touch">
                                        {chatHistory.map((msg, idx) => (
                                            <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm transition-all ${
                                                    msg.type === 'user' 
                                                    ? 'bg-orange-500 text-white rounded-tr-none' 
                                                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-none'
                                                }`}>
                                                    {msg.text}
                                                </div>
                                            </div>
                                        ))}
                                        {isTyping && (
                                            <div className="flex justify-start">
                                                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-3xl rounded-tl-none flex gap-1.5 items-center">
                                                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                                </div>
                                            </div>
                                        )}
                                        <div ref={chatEndRef} />
                                    </div>

                                    {/* Integrated Footer Area */}
                                    <div className="bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-100 dark:border-zinc-800">
                                        {chatHistory.filter(msg => msg.type === 'user').length >= 4 ? (
                                            <div className="p-6 text-center">
                                                <div className="inline-flex p-3 bg-orange-500/10 rounded-xl mb-3 border border-orange-500/20">
                                                    <MessageCircle className="text-orange-500" size={20} />
                                                </div>
                                                <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Thanks for chatting!</h4>
                                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[280px] mx-auto">
                                                    Our team will review this conversation and contact you shortly through the provided email.
                                                </p>
                                            </div>
                                        ) : (
                                            <>
                                                {/* Agent Suggestions */}
                                                {suggestions.length > 0 && !isTyping && (
                                                    <div className="px-6 py-4 flex gap-2 overflow-x-auto no-scrollbar mask-fade-right">
                                                        {suggestions.map((s, i) => (
                                                            <button 
                                                                key={i}
                                                                onClick={() => handleSendMessage(null, s)}
                                                                className="whitespace-nowrap px-4 py-2 bg-white dark:bg-zinc-800/80 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 transition-all text-xs font-medium border border-zinc-200/50 dark:border-zinc-700/50 rounded-xl shadow-sm hover:shadow-orange-500/20 active:scale-95 text-zinc-600 dark:text-zinc-300"
                                                            >
                                                                {s}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Modern Input */}
                                                <div className="px-6 pb-6 pt-2">
                                                    <form className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 rounded-xl p-1.5 border border-zinc-200 dark:border-zinc-800" onSubmit={(e) => handleSendMessage(e)}>
                                                        <input 
                                                            type="text"
                                                            value={message}
                                                            onChange={(e) => setMessage(e.target.value)}
                                                            placeholder="Ask a question..."
                                                            className="flex-grow bg-transparent text-zinc-900 dark:text-white px-4 py-2 text-sm focus:outline-none placeholder:text-zinc-400"
                                                        />
                                                        <button 
                                                            type="submit"
                                                            disabled={!message.trim()}
                                                            className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 transition-colors flex items-center justify-center"
                                                        >
                                                            <Send size={16} />
                                                        </button>
                                                    </form>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Intro Message Bubble */}
            <AnimatePresence>
                {showIntro && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: 20, y: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, x: 20, y: 20 }}
                        className="absolute bottom-20 right-0 mb-4 mr-2"
                    >
                        <div className="relative group">
                            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 rounded-[1.5rem] sm:rounded-3xl rounded-br-sm shadow-2xl min-w-[170px] sm:min-w-[200px] max-w-[210px] sm:max-w-[250px]">
                                <button 
                                    onClick={() => setShowIntro(false)}
                                    className="absolute -top-1.5 -right-1.5 w-5 h-5 sm:w-6 sm:h-6 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity border border-zinc-200 dark:border-zinc-700 shadow-sm"
                                >
                                    <X size={10} className="sm:size-3" />
                                </button>
                                <p className="text-zinc-900 dark:text-white text-[11px] sm:text-sm font-bold mb-0.5 sm:mb-1">
                                    {agentPersona.name}
                                </p>
                                <p className="text-zinc-600 dark:text-zinc-400 text-[10px] sm:text-xs leading-[1.4] sm:leading-relaxed">
                                    Hi! Need help optimizing your visibility?
                                </p>
                                <div className="mt-1.5 sm:mt-2 flex gap-2">
                                    <button 
                                        onClick={toggleChat}
                                        className="text-[9px] sm:text-[10px] font-bold text-orange-500 uppercase tracking-wider hover:text-orange-600 transition-colors"
                                    >
                                        Chat now
                                    </button>
                                </div>
                            </div>
                            {/* Speech bubble arrow */}
                            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white dark:bg-zinc-900 border-r border-b border-zinc-200 dark:border-zinc-800 transform rotate-45" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Agent Toggle Bubble */}
            <button
                onClick={toggleChat}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 border border-zinc-200 dark:border-zinc-800 relative ${
                    isOpen ? 'bg-white dark:bg-zinc-900 text-orange-500' : 'bg-orange-500 text-white'
                }`}
            >
                {isOpen ? (
                    <X size={24} />
                ) : (
                    <>
                        <div className="relative z-10 flex items-center justify-center">
                            <MessageCircle size={24} />
                        </div>
                        {showIntro && (
                            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white dark:border-zinc-900 rounded-full animate-bounce z-20" />
                        )}
                    </>
                )}
            </button>
        </div>
    );
};

export default FloatingChat;

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Search } from 'lucide-react';
import { chatData } from '../data/chatData';

const agentPersona = {
    name: "Exagic Assistant",
    title: "AI Growth Strategist",
    welcome: "Hello! I'm your Exagic growth strategist. I can help you optimize your brand's visibility in AI-driven search results. What can we look into first?"
};

const STOP_WORDS = new Set(['a', 'an', 'the', 'and', 'or', 'do', 'does', 'how', 'is', 'are', 'can', 'you', 'me', 'i', 'to', 'for', 'with', 'about', 'what', 'where']);

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
            const rawTokens = userMsg.toLowerCase().replace(/[?.,!]/g, '').split(/\s+/);
            const tokens = rawTokens.filter(t => !STOP_WORDS.has(t));
            const lowMsg = userMsg.toLowerCase().trim();
            
            let responseText = "";
            let newSuggestions = [];
            let action = null;
            let currentTopic = context.topic;

            // 1. Intent Detection (Enhanced)
            const intents = {
                greetings: {
                    patterns: ['hi', 'hello', 'hey', 'yo', 'greetings', 'sup', 'morning', 'evening'],
                    responses: ["Hi there! I'm online and ready to help. What would you like to focus on today?"],
                    topic: 'general'
                },
                wellbeing: {
                    patterns: ['how are you', 'hows it going', 'you okay', 'status'],
                    responses: ["I'm doing great, thank you! Ready to dive into your strategy. How can I help?"],
                    topic: 'internal'
                },
                identity: {
                    patterns: ['who are you', 'what are you', 'your name', 'exagic'],
                    responses: ["I'm the Exagic AI Assistant. I help brands improve their authority and visibility across AI search models."],
                    topic: 'identity'
                }
            };

            for (const [key, data] of Object.entries(intents)) {
                if (data.patterns.some(p => lowMsg.includes(p))) {
                    responseText = data.responses[0];
                    newSuggestions = ['Audit my visibility', 'How SRO works', 'Contact the team'];
                    currentTopic = data.topic;
                    break;
                }
            }

            // 2. Mission/Action Detection
            if (!responseText) {
                if (tokens.some(t => ['audit', 'analyze', 'scan', 'check'].includes(t))) {
                    responseText = "I'll start a visibility audit for you. I'm checking how your brand is mentioned across models like GPT-4 and Claude to find areas for improvement.";
                    action = "Analyzing Visibility";
                    newSuggestions = ['View live progress', 'See weak points', 'Stop analysis'];
                    currentTopic = 'audit';
                } else if (tokens.some(t => ['so', 'sro', 'aeo', 'optimization', 'engine'].includes(t))) {
                    responseText = "Selection Rate Optimization (SRO) is our specialized framework. We ensure your brand is chosen as the primary authority for industry-specific queries in AI search.";
                    newSuggestions = ['See case studies', 'How it works', 'Contact us'];
                    currentTopic = 'sro';
                }
            }

            // 3. Knowledge Base Weighted Search (Intelligent Matching)
            if (!responseText) {
                let bestMatch = null;
                let maxScore = 0;

                chatData.forEach(item => {
                    let score = 0;
                    const qTokens = item.question.toLowerCase().replace(/[?.,!]/g, '').split(/\s+/);
                    const tagTokens = item.tags || [];

                    tokens.forEach(userToken => {
                        if (qTokens.includes(userToken)) score += 3;
                        if (tagTokens.includes(userToken)) score += 5;
                        // Boost for previous context
                        if (currentTopic && tagTokens.includes(currentTopic)) score += 2;
                    });

                    if (score > maxScore) {
                        maxScore = score;
                        bestMatch = item;
                    }
                });

                if (maxScore > 2 && bestMatch) {
                    responseText = bestMatch.answer;
                    currentTopic = bestMatch.tags?.[0] || 'general';
                    newSuggestions = chatData
                        .filter(i => i.question !== bestMatch.question && i.tags?.some(t => bestMatch.tags?.includes(t)))
                        .slice(0, 3)
                        .map(i => i.question);
                } else {
                    // Context-aware fallback
                    if (currentTopic === 'sro') {
                        responseText = "I'm not finding that specific detail in our SRO database, but it might be a specialized case. Would you like to check our guides or message our support team?";
                        newSuggestions = ['See SRO guide', 'Message Support', 'Reset'];
                    } else {
                        responseText = "I don't have enough information on that yet. I've noted it for our team to improve my responses. Is there something else I can help with?";
                        newSuggestions = ['Start Audit', 'Talk to a human', 'SEO Basics'];
                    }
                }
            }

            setChatHistory(prev => [...prev, { type: 'bot', text: responseText }]);
            setIsTyping(false);
            setStatus('READY');
            setSuggestions(newSuggestions.length > 0 ? newSuggestions : ['Audit my visibility', 'How SRO works', 'Contact the team']);
            setActiveAction(action);
            setContext({ topic: currentTopic, depth: context.depth + 1 });
        }, 1200);
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
                        className="w-[350px] sm:w-[400px] h-[600px] bg-white dark:bg-zinc-900 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-zinc-200/50 dark:border-zinc-800 flex flex-col overflow-hidden no-scrollbar"
                    >
                        {/* Premium Header */}
                        <div className="p-6 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent border-b border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 to-orange-400 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                                            <MessageCircle size={24} />
                                        </div>
                                        <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-white dark:border-zinc-900 rounded-full"></span>
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
                                    className="mt-4 p-3 bg-orange-500/5 rounded-2xl border border-orange-500/10 flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-orange-600 dark:text-orange-400">{activeAction}</span>
                                    </div>
                                    <span className="text-[10px] text-zinc-400 uppercase font-medium">In progress</span>
                                </motion.div>
                            )}
                        </div>

                        {/* Conversational Space */}
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
                                <form className="flex items-center gap-2 bg-white dark:bg-zinc-800 rounded-2xl p-1.5 border border-zinc-200/50 dark:border-zinc-700/50 shadow-inner" onSubmit={(e) => handleSendMessage(e)}>
                                    <input 
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Ask a question..."
                                        className="flex-grow bg-transparent text-zinc-900 dark:text-white px-4 py-2.5 text-sm focus:outline-none placeholder:text-zinc-400"
                                    />
                                    <button 
                                        type="submit"
                                        disabled={!message.trim()}
                                        className="p-2.5 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 disabled:opacity-50 disabled:shadow-none transition-all active:scale-90"
                                    >
                                        <Send size={18} />
                                    </button>
                                </form>
                            </div>
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
                            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-3xl rounded-br-sm shadow-2xl min-w-[200px] max-w-[250px]">
                                <button 
                                    onClick={() => setShowIntro(false)}
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity border border-zinc-200 dark:border-zinc-700"
                                >
                                    <X size={12} />
                                </button>
                                <p className="text-zinc-900 dark:text-white text-sm font-semibold mb-1">
                                    {agentPersona.name}
                                </p>
                                <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
                                    Hi! Need help optimizing your brand's visibility for AI search?
                                </p>
                                <div className="mt-2 flex gap-2">
                                    <button 
                                        onClick={toggleChat}
                                        className="text-[10px] font-bold text-orange-500 uppercase tracking-wider hover:text-orange-600 transition-colors"
                                    >
                                        Chat with us
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
            <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all border-4 relative ${
                    isOpen ? 'bg-white dark:bg-zinc-900 border-orange-500' : 'bg-orange-500 border-white/20'
                }`}
            >
                {isOpen ? (
                    <X size={28} className="text-orange-500" />
                ) : (
                    <>
                        <div className="relative z-10">
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                className="absolute -inset-4 border border-white/30 rounded-full border-dashed"
                            />
                            <MessageCircle size={30} className="text-white" />
                        </div>
                        {showIntro && (
                            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white dark:border-zinc-900 rounded-full animate-bounce z-20" />
                        )}
                    </>
                )}
            </motion.button>
        </div>
    );
};

export default FloatingChat;

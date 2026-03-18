"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Search } from 'lucide-react';
import { chatData } from '../data/chatData';

const agentPersona = {
    name: "Exagic Prime",
    title: "Strategic Visibility Agent",
    welcome: "Protocol initiated. I am Exagic Prime. My mission is to optimize your brand's authority in some of the world's most sophisticated AI ecosystems. What is our first objective?"
};

const STOP_WORDS = new Set(['a', 'an', 'the', 'and', 'or', 'do', 'does', 'how', 'is', 'are', 'can', 'you', 'me', 'i', 'to', 'for', 'with', 'about', 'what', 'where']);

const FloatingChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('READY'); // READY, THINKING, EXECUTING
    const [chatHistory, setChatHistory] = useState([
        { type: 'bot', text: agentPersona.welcome }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);
    const [activeMission, setActiveMission] = useState(null);
    const [suggestions, setSuggestions] = useState(['Audit my visibility', 'Explain SRO Strategy', 'Contact SF Team']);
    const [stats, setStats] = useState({ latency: '24ms', tokens: '142/s', version: 'Exagic-Prime' });
    const [context, setContext] = useState({ topic: null, depth: 0 });

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

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
            let mission = null;
            let currentTopic = context.topic;

            // 1. Intent Detection (Enhanced)
            const intents = {
                greetings: {
                    patterns: ['hi', 'hello', 'hey', 'yo', 'greetings', 'sup', 'morning', 'evening'],
                    responses: ["Hello. Protocol established. I am online and ready to optimize. What's our primary objective?"],
                    topic: 'general'
                },
                wellbeing: {
                    patterns: ['how are you', 'hows it going', 'you okay', 'status'],
                    responses: ["Internal systems are at peak efficiency. Latency is sub-20ms. Ready for strategic briefing."],
                    topic: 'internal'
                },
                identity: {
                    patterns: ['who are you', 'what are you', 'your name', 'exagic'],
                    responses: ["I am Exagic Prime, the strategic interface for Exagic's AI-SEO and SRO frameworks. I map and steer brand authority."],
                    topic: 'identity'
                }
            };

            for (const [key, data] of Object.entries(intents)) {
                if (data.patterns.some(p => lowMsg.includes(p))) {
                    responseText = data.responses[0];
                    newSuggestions = ['Audit my visibility', 'Explain SRO Strategy', 'Contact SF Team'];
                    currentTopic = data.topic;
                    break;
                }
            }

            // 2. Mission/Action Detection
            if (!responseText) {
                if (tokens.some(t => ['audit', 'analyze', 'scan', 'check'].includes(t))) {
                    responseText = "Mission Directive: Strategic Audit. I am initiating a mechanistic scan of your brand's citation density across Llama-3, GPT-4o, and Claude-3.5 inference paths. High-density nodes will be identified for steering.";
                    mission = "Active Visibility Audit";
                    newSuggestions = ['View Real-time Logs', 'Identify Weak Nodes', 'Cancel Mission'];
                    currentTopic = 'audit';
                } else if (tokens.some(t => ['so', 'sro', 'aeo', 'optimization', 'engine'].includes(t))) {
                    responseText = "Selection Rate Optimization (SRO) is our signature framework. We don't just 'rank'—we steer model weights so your brand is selected as the primary authoritative source for high-intent industrial queries.";
                    newSuggestions = ['See Benchmarks', 'How Steering Works', 'Contact Page'];
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
                        responseText = "I'm not finding that specific parameter in our SRO database, but it likely relates to mechanistic steering. Would you like me to run an exploratory scan or contact the SF engineering team?";
                        newSuggestions = ['Run Exploratory Scan', 'Contact SF Team', 'Reset Mission'];
                    } else {
                        responseText = "Parameter Mismatch: I've logged this query as an 'Edge Case' in my knowledge graph. While I don't have an immediate response, I can synthesize a strategy report if you provide more context.";
                        newSuggestions = ['Start Audit', 'Talk to Human', 'View AI SEO Basics'];
                    }
                }
            }

            setChatHistory(prev => [...prev, { type: 'bot', text: responseText }]);
            setIsTyping(false);
            setStatus('READY');
            setSuggestions(newSuggestions.length > 0 ? newSuggestions : ['Audit my visibility', 'Explain SRO Strategy', 'Contact SF Team']);
            setActiveMission(mission);
            setContext({ topic: currentTopic, depth: context.depth + 1 });
            setStats(prev => ({ ...prev, latency: `${Math.floor(Math.random() * 20) + 12}ms` }));
        }, 1200);
    };
    const toggleChat = () => setIsOpen(!isOpen);

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

                            {activeMission && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 p-3 bg-orange-500/5 rounded-2xl border border-orange-500/10 flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-orange-600 dark:text-orange-400">{activeMission}</span>
                                    </div>
                                    <span className="text-[10px] text-zinc-400 uppercase font-medium">Status: Active</span>
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
                                        placeholder="Brief your agent..."
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

            {/* Agent Toggle Bubble */}
            <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all border-4 ${
                    isOpen ? 'bg-white dark:bg-zinc-900 border-orange-500' : 'bg-orange-500 border-white/20'
                }`}
            >
                {isOpen ? (
                    <X size={28} className="text-orange-500" />
                ) : (
                    <div className="relative">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                            className="absolute -inset-4 border border-white/30 rounded-full border-dashed"
                        />
                        <MessageCircle size={30} className="text-white" />
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default FloatingChat;

'use client'

import { useState } from 'react'

interface Message {
  id: number
  text: string
  isUser: boolean
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm Swift Plumbing's AI assistant. How can I help you today?", isUser: false }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isUser: true
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    
    // Call backend API with RAG
    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      })
      const data = await response.json()
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.response,
        isUser: false
      }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting. Please call us at (555) 123-4567.",
        isUser: false
      }
      setMessages(prev => [...prev, botMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window absolute bottom-20 right-0 w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#1a365d] px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#ed8936] rounded-full flex items-center justify-center text-xl">🤖</div>
            <div>
              <h4 className="text-white font-semibold text-sm">Swift Plumbing AI</h4>
              <span className="text-white/70 text-xs">Always here to help</span>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.isUser 
                    ? 'bg-[#ed8936] text-white ml-auto rounded-br-sm' 
                    : 'bg-gray-100 text-[#2d3748] rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="max-w-[85%] px-4 py-3 rounded-2xl text-sm bg-gray-100 text-[#2d3748] rounded-bl-sm">
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                </span>
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="p-4 border-t border-gray-200 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#ed8936] transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="w-11 h-11 bg-[#ed8936] text-white rounded-full flex items-center justify-center hover:bg-[#dd6b20] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ➤
            </button>
          </div>
        </div>
      )}
      
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#ed8936] text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform"
      >
        💬
      </button>
    </div>
  )
}
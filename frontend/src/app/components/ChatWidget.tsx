'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Droplets } from 'lucide-react'

interface Message {
  id: number
  text: string
  isUser: boolean
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm Swift Plumbing's AI assistant. How can I help you today?", isUser: false },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { id: Date.now(), text: input, isUser: true }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })
      const data = await response.json()
      setMessages(prev => [...prev, { id: Date.now() + 1, text: data.response, isUser: false }])
    } catch {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, text: "Sorry, I'm having trouble connecting. Please call us at (555) 123-4567.", isUser: false },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* ── Chat Window ─────────────────────────────────── */}
      {isOpen && (
        <div
          className="chat-window w-[360px] sm:w-[380px] h-[520px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-black/8"
          role="dialog"
          aria-label="Swift Plumbing AI Chat"
          aria-modal="false"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(249,115,22,0.35)] shrink-0">
              <Droplets size={18} className="text-white" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-semibold text-sm leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Swift Plumbing AI
              </h4>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" aria-hidden="true" />
                <span className="text-white/55 text-xs">Online · Always here to help</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer shrink-0"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 px-4 py-5 overflow-y-auto space-y-3 bg-[#F8FAFC]"
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!msg.isUser && (
                  <div className="w-7 h-7 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-full flex items-center justify-center mr-2 mt-auto mb-0.5 shrink-0">
                    <Droplets size={12} className="text-white" aria-hidden="true" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.isUser
                      ? 'bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white rounded-br-sm shadow-[0_4px_12px_rgba(249,115,22,0.25)]'
                      : 'bg-white text-[#334155] rounded-bl-sm shadow-sm border border-[#E2E8F0]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="w-7 h-7 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-full flex items-center justify-center mr-2 mt-auto mb-0.5 shrink-0" aria-hidden="true">
                  <Droplets size={12} className="text-white" />
                </div>
                <div className="bg-white border border-[#E2E8F0] px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1" aria-label="AI is typing">
                  {[0, 0.15, 0.3].map((delay, i) => (
                    <span
                      key={i}
                      className="w-2 h-2 bg-[#94A3B8] rounded-full"
                      style={{ animation: `pulse-dot 1.2s ease-in-out ${delay}s infinite` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} aria-hidden="true" />
          </div>

          {/* Input */}
          <div className="px-4 py-3 bg-white border-t border-[#E2E8F0] flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              aria-label="Chat message input"
              className="flex-1 min-w-0 px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="w-10 h-10 bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white rounded-full flex items-center justify-center hover:shadow-[0_4px_12px_rgba(249,115,22,0.35)] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all cursor-pointer shrink-0"
            >
              <Send size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* ── Toggle Button ────────────────────────────────── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open AI chat assistant'}
        aria-expanded={isOpen}
        className="w-14 h-14 bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(249,115,22,0.4)] hover:shadow-[0_8px_28px_rgba(249,115,22,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        {isOpen
          ? <X size={22} aria-hidden="true" />
          : <MessageCircle size={22} aria-hidden="true" />
        }
      </button>
    </div>
  )
}

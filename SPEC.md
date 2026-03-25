# Local Business AI Chat Website - Specification

## Project Overview

**Name:** LocalBiz AI Chat  
**Type:** Full-stack web application (Next.js + FastAPI)  
**Core Functionality:** A professional website for a fictional local business (plumbing company) with an AI-powered chatbot that answers customer questions using RAG (Retrieval-Augmented Generation).  
**Target Users:** Potential customers visiting the business website  
**Interview Value:** Demonstrates full-stack skills + RAG/AI integration — directly relevant to Hello Patient's AI assistant work

---

## Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Backend:** FastAPI (Python), PostgreSQL + pgvector
- **AI:** OpenAI (GPT-4o-mini) + text-embedding-3-small
- **Deployment:** Docker, Docker Compose

---

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Next.js    │────▶│   FastAPI   │────▶│ PostgreSQL  │
│  Frontend  │     │   Backend   │     │ (pgvector)  │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  OpenAI API │
                    │ (LLM + Emb) │
                    └─────────────┘
```

---

## Feature List

### Frontend (Completed ✅)
- Landing page with hero section, badges, CTA buttons
- Services section (6 cards with descriptions and bullet points)
- Trust signals / Why Choose Us section
- FAQ section with 8 expandable Q&A cards
- Testimonials section with customer photos
- Contact form with fields
- Floating AI chat widget
- Responsive design with Tailwind CSS
- Images generated via MiniMax Image API

### Backend (In Progress)
- ✅ FastAPI server setup with CORS
- ✅ API endpoints: /api/chat, /api/health
- ✅ Knowledge base with structured business info
- ✅ Simple RAG search (cosine similarity)
- ✅ LLM service with OpenAI integration
- ⏳ Needs: OpenAI API key, PostgreSQL (optional for production)

### API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/chat` | Send message, get RAG-powered AI response |
| GET | `/api/health` | Health check |

### Chat Flow
1. User sends message via frontend widget
2. Backend searches knowledge base for relevant info
3. Retrieved context injected into LLM prompt
4. LLM generates response using RAG context
5. Response returned to frontend

---

## Page Structure

### Landing Page Sections
1. **Hero** — Business name, tagline, "Get a Quote" CTA
2. **Services** — List of services offered (drain cleaning, leak repair, water heater, etc.)
3. **Why Choose Us** — Trust signals (licensed, fast response, upfront pricing)
4. **Testimonials** — Fake customer reviews
5. **Contact** — Phone, hours, service area map placeholder
6. **Footer** — Copyright, links

### Chat Widget
- Collapsed: floating button with chat icon
- Expanded: chat window (400px wide, 500px tall)
- Header: Business name + "AI Assistant"
- Messages: user (right), bot (left)
- Input: text field + send button

---

## Knowledge Base (RAG Content)

```
Services:
- Drain Cleaning ($85-$250)
- Leak Detection & Repair
- Water Heater Installation/Repair
- Toilet Repair & Replacement
- Faucet & Sink Repair
- Garbage Disposal Service

Policies:
- Emergency calls: Available 24/7 for urgent issues
- Service area: Within 25 miles of city center
- Scheduling: Same-day available for routine, next-day for complex
- Payments: Visa, Mastercard, checks accepted
- Warranty: 90-day parts warranty on all repairs

FAQs:
- Do you charge for estimates? → No, free estimates
- Are you licensed? → Yes, fully licensed and insured
- Do you offer warranties? → 90-day warranty on parts
- What are your hours? → Mon-Fri 8am-6pm, Emergency 24/7
```

---

## API Endpoints

### Backend (FastAPI)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/chat` | Send message, get AI response |
| POST | `/api/chat/embed` | Re-embed knowledge base (admin) |
| GET | `/api/health` | Health check |
| GET | `/api/logs` | Get chat logs (admin) |

### Request/Response

**POST /api/chat**
```json
// Request
{
  "message": "Do you offer emergency service?",
  "session_id": "abc-123"
}

// Response
{
  "response": "Yes! We offer 24/7 emergency service for urgent issues like major leaks, clogs, and water heater failures. Emergency calls may have an after-hours fee. Call us anytime at (555) 123-4567.",
  "session_id": "abc-123"
}
```

---

## Acceptance Criteria

1. ✅ Landing page loads with all sections (hero, services, about, contact)
2. ✅ Chat widget opens and closes smoothly
3. ✅ Can send a message and receive AI response
4. ✅ AI responses are relevant to the business (not generic)
5. ✅ RAG is working — responses pull from knowledge base
6. ✅ Mobile responsive — looks good on phone
7. ✅ Project runs locally with `docker-compose up`
8. ✅ Code is clean, well-organized, TypeScript + Python types

---

## Project Structure

```
local-ai-chat/
├── frontend/          # Next.js app
│   ├── src/
│   │   ├── app/      # App router pages
│   │   ├── components/
│   │   └── lib/      # API calls
│   └── package.json
├── backend/          # FastAPI app
│   ├── app/
│   │   ├── main.py
│   │   ├── api/
│   │   ├── services/
│   │   └── rag/
│   └── requirements.txt
├── docker-compose.yml
└── README.md
```

---

## Timeline Estimate

- **Day 1:** Setup, frontend skeleton, landing page
- **Day 2:** Chat widget UI + backend skeleton
- **Day 3:** RAG pipeline + knowledge base
- **Day 4:** Connect frontend to backend, test RAG
- **Day 5:** Polish, Dockerize, demo prep

Total: ~1 week of focused work
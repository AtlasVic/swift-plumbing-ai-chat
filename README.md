# Swift Plumbing - AI Chat Website

A full-stack local business website with an RAG-powered AI chatbot built with Next.js, FastAPI, and Anthropic Claude.

## Features

- **Professional Business Website** - Complete landing page with services, testimonials, FAQ, and contact form
- **AI-Powered Chat** - Intelligent chatbot that answers customer questions using RAG (Retrieval-Augmented Generation)
- **Knowledge Base** - Business information stored locally (services, policies, hours, pricing)
- **Stays On Topic** - RAG ensures AI only answers questions related to the business

## Tech Stack

- **Frontend:** Next.js 16, TypeScript, Tailwind CSS
- **Backend:** FastAPI (Python)
- **AI:** Anthropic Claude Haiku (or OpenAI GPT-4o-mini)
- **RAG:** Custom embedding + cosine similarity search

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.10+
- Anthropic API key (or OpenAI API key)

### Quick Start

#### 1. Clone the Repository

```bash
git clone https://github.com/AtlasVic/swift-plumbing-ai-chat.git
cd swift-plumbing-ai-chat
```

#### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:3000`

#### 3. Backend Setup

**Option A: Direct (for development)**

```bash
cd backend

# Create virtual environment (recommended)
python -m venv venv

# Activate — Mac/Linux:
source venv/bin/activate
# Activate — Windows CMD:
# venv\Scripts\activate.bat
# Activate — Windows PowerShell:
# venv\Scripts\Activate.ps1

# Install dependencies
pip install -r requirements.txt

# Configure API Key (REQUIRED)
# Create a file named .env in the backend/ directory with this content:
#   ANTHROPIC_API_KEY=your-api-key-here

# Run the server
uvicorn app.main:app --reload
```

The backend runs at `http://localhost:8000`

**Option B: Docker**

```bash
# Configure your API key in .env first
cp backend/.env.example backend/.env
# Edit .env and add your ANTHROPIC_API_KEY or OPENAI_API_KEY

# Run with Docker Compose
docker-compose up
```

### API Key Configuration

You need at least one API key to enable AI responses. The backend will return a fallback message without a key.

The backend auto-detects which provider to use based on which key is present. `ANTHROPIC_API_KEY` takes priority if both are set.

**Anthropic (Claude Haiku):**

```
# backend/.env
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxx
```

Get your key at: https://console.anthropic.com/

**OpenAI (GPT-4o mini):**

```
# backend/.env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
```

Get your key at: https://platform.openai.com/api-keys

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | One of these | Anthropic API key — uses Claude Haiku |
| `OPENAI_API_KEY` | is required | OpenAI API key — uses GPT-4o mini |

## Project Structure

```
swift-plumbing-ai-chat/
├── frontend/               # Next.js application
│   ├── src/
│   │   ├── app/          # App router pages
│   │   └── components/   # React components
│   └── public/images/    # Generated images
├── backend/               # FastAPI application
│   ├── app/
│   │   ├── api/          # API endpoints
│   │   ├── rag/          # RAG knowledge base
│   │   └── services/     # LLM service
│   └── requirements.txt
├── docker-compose.yml
└── SPEC.md               # Project specification
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/chat` | Send message to AI |

### Chat Endpoint Example

```bash
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Do you offer emergency service?"}'
```

Response:
```json
{
  "response": "Yes, we do offer emergency plumbing services...",
  "session_id": "default"
}
```

## Customization

### Updating the Knowledge Base

Edit `backend/app/rag/knowledge_base.py` to add or modify business information:

```python
{
    "id": "unique_id",
    "category": "services",  # services, policies, contact, hours
    "content": "Your business information here..."
}
```

### Changing the AI Model

Edit `backend/app/services/llm.py` to use a different model:

```python
# For Claude
model="claude-3-haiku-20240307"

# For OpenAI
model="gpt-4o-mini"
```

## License

MIT License - Feel free to use this as a reference or starting point for your own projects.

## Notes

- Branch protection requires GitHub Pro for private repos
- The AI uses RAG to stay on-topic - it won't answer questions unrelated to the business
- Images were generated using MiniMax Image API

## Author

Victor Gutierrez
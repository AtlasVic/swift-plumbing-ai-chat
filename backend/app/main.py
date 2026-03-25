from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import chat, health

app = FastAPI(
    title="Swift Plumbing API",
    description="AI-powered chat backend with RAG for local business website",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3005", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(chat.router, prefix="/api/chat", tags=["chat"])
app.include_router(health.router, prefix="/api", tags=["health"])

@app.on_event("startup")
async def startup_event():
    """Initialize RAG on startup"""
    from app.rag.knowledge_base import knowledge_base
    print("Initializing knowledge base...")
    await knowledge_base.load_knowledge()
    print(f"Knowledge base loaded with {len(knowledge_base.documents)} documents!")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
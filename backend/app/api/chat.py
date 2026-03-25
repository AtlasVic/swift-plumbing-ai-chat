from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from app.services.llm import get_chat_response

router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    response: str
    session_id: str

@router.post("", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """Send a message to the AI and get a response using RAG"""
    if not request.message.strip():
        raise HTTPException(status_code=400, message="Message cannot be empty")
    
    try:
        response = await get_chat_response(
            message=request.message,
            session_id=request.session_id or "default"
        )
        return ChatResponse(
            response=response,
            session_id=request.session_id or "default"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
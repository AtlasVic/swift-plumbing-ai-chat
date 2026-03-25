"""
LLM Service - Handles chat responses with RAG using Anthropic Claude
"""
import os
import anthropic

# Initialize Anthropic client
client = anthropic.AsyncAnthropic(api_key=os.getenv("ANTHROPIC_API_KEY", ""))

# System prompt for the AI assistant
SYSTEM_PROMPT = """You are Swift Plumbing's AI assistant. Your role is to help potential customers with their plumbing questions.

Guidelines:
- Be friendly, helpful, and professional
- Only answer questions related to plumbing services, scheduling, pricing, policies
- If asked about non-plumbing topics, politely redirect to plumbing topics
- Use the provided context from our knowledge base to answer questions accurately
- If you don't have specific information, suggest contacting us at (555) 123-4567
- Keep responses concise but informative
- Don't mention that you're an AI or that you have limited knowledge

Context from our knowledge base:
{context}
"""

async def get_chat_response(message: str, session_id: str) -> str:
    """
    Get a chat response using RAG to retrieve relevant context
    """
    from app.rag.knowledge_base import knowledge_base
    
    # Search knowledge base for relevant information
    relevant_docs = knowledge_base.search(message, top_k=3)
    
    # Build context from retrieved documents
    context = "\n\n".join([
        f"[{doc['category']}]: {doc['content']}"
        for doc in relevant_docs
    ])
    
    # Get response from Anthropic Claude Haiku
    try:
        response = await client.messages.create(
            model="claude-3-haiku-20240307",
            max_tokens=500,
            temperature=0.7,
            system=SYSTEM_PROMPT.format(context=context),
            messages=[
                {"role": "user", "content": message}
            ]
        )
        
        return response.content[0].text
    
    except Exception as e:
        print(f"Error getting response from Anthropic: {e}")
        # Fallback response if API fails
        return f"I'm having trouble processing your request right now. Please call us at (555) 123-4567 for immediate assistance, or try again later."
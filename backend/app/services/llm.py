"""
LLM Service - Handles chat responses with RAG.
Supports Anthropic Claude or OpenAI — whichever key is configured in .env.
"""
import os

ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY", "")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")

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

FALLBACK_RESPONSE = (
    "I'm having trouble processing your request right now. "
    "Please call us at (555) 123-4567 for immediate assistance, or try again later."
)


async def get_chat_response(message: str, session_id: str) -> str:
    """
    Get a chat response using RAG to retrieve relevant context.
    Automatically uses Anthropic if ANTHROPIC_API_KEY is set, otherwise OpenAI.
    """
    from app.rag.knowledge_base import knowledge_base

    # Search knowledge base for relevant information
    relevant_docs = knowledge_base.search(message, top_k=3)

    # Build context from retrieved documents
    context = "\n\n".join([
        f"[{doc['category']}]: {doc['content']}"
        for doc in relevant_docs
    ])

    system_prompt = SYSTEM_PROMPT.format(context=context)

    if ANTHROPIC_API_KEY:
        return await _respond_anthropic(message, system_prompt)
    elif OPENAI_API_KEY:
        return await _respond_openai(message, system_prompt)
    else:
        print("No API key configured. Set ANTHROPIC_API_KEY or OPENAI_API_KEY in .env")
        return FALLBACK_RESPONSE


async def _respond_anthropic(message: str, system_prompt: str) -> str:
    import anthropic
    client = anthropic.AsyncAnthropic(api_key=ANTHROPIC_API_KEY)
    try:
        response = await client.messages.create(
            model="claude-3-haiku-20240307",
            max_tokens=500,
            temperature=0.7,
            system=system_prompt,
            messages=[{"role": "user", "content": message}]
        )
        return response.content[0].text
    except Exception as e:
        print(f"Anthropic error: {e}")
        return FALLBACK_RESPONSE


async def _respond_openai(message: str, system_prompt: str) -> str:
    from openai import AsyncOpenAI
    client = AsyncOpenAI(api_key=OPENAI_API_KEY)
    try:
        response = await client.chat.completions.create(
            model="gpt-4o-mini",
            max_tokens=500,
            temperature=0.7,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": message}
            ]
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"OpenAI error: {e}")
        return FALLBACK_RESPONSE

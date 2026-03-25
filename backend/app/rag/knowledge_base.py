"""
Knowledge Base for Swift Plumbing
Contains all the business information for RAG retrieval
"""

# Business knowledge in structured format
KNOWLEDGE_BASE = [
    # Services
    {
        "id": "services_1",
        "category": "services",
        "content": "Emergency Repairs - Available 24/7 for urgent plumbing issues including burst pipes, gas leaks, flooding, and no hot water. Fast response times guaranteed."
    },
    {
        "id": "services_2", 
        "category": "services",
        "content": "Leak Detection & Repair - Advanced technology to find and fix leaks before they cause major damage. We handle hidden leaks, pipe repairs, faucet fixes, and toilet repairs."
    },
    {
        "id": "services_3",
        "category": "services",
        "content": "Drain Cleaning - Professional drain cleaning services to keep your plumbing flowing smoothly. Services include clogged drains, sewer lines, hydro jetting, and camera inspection."
    },
    {
        "id": "services_4",
        "category": "services",
        "content": "Water Heater Services - Installation, repair, and maintenance of all water heater types including tank and tankless systems."
    },
    {
        "id": "services_5",
        "category": "services",
        "content": "Bathroom Plumbing - Complete bathroom plumbing solutions from fixtures to full remodels including fixture installation, shower repairs, toilet installation, and remodeling."
    },
    {
        "id": "services_6",
        "category": "services",
        "content": "General Plumbing - Comprehensive plumbing services for all residential and commercial needs including pipe installation, fixture repairs, inspections, and maintenance."
    },
    
    # Policies
    {
        "id": "policy_1",
        "category": "policies",
        "content": "Emergency Service - We offer 24/7 emergency plumbing services. Call our emergency line anytime for immediate assistance with burst pipes, major leaks, or other urgent issues."
    },
    {
        "id": "policy_2",
        "category": "policies",
        "content": "Service Area - We service the greater metro area within 25 miles of our location. Contact us to confirm we service your specific area."
    },
    {
        "id": "policy_3",
        "category": "policies",
        "content": "Scheduling - Same-day service available for most requests. Emergency calls responded within 1-2 hours. Scheduled appointments available at your convenience."
    },
    {
        "id": "policy_4",
        "category": "policies",
        "content": "Licensing - All our plumbers are fully licensed, insured, and background-checked. We take pride in our professional team."
    },
    {
        "id": "policy_5",
        "category": "policies",
        "content": "Pricing - We offer upfront pricing with no hidden fees. You'll always know the cost before we start any work. Free estimates on all projects."
    },
    {
        "id": "policy_6",
        "category": "policies",
        "content": "Payments - We accept Visa, Mastercard, American Express, and checks. We also offer payment plans for larger projects."
    },
    {
        "id": "policy_7",
        "category": "policies",
        "content": "Warranty - We offer a 90-day warranty on all parts and labor. Extended warranties are available for certain services."
    },
    {
        "id": "policy_8",
        "category": "policies",
        "content": "Commercial Services - We handle both residential and commercial plumbing projects including restaurants, offices, and retail spaces."
    },
    
    # Contact
    {
        "id": "contact_1",
        "category": "contact",
        "content": "Phone: (555) 123-4567 - Available for calls 24/7 for emergencies. Regular hours Mon-Fri 8am-6pm."
    },
    {
        "id": "contact_2",
        "category": "contact",
        "content": "Email: info@swiftplumbing.com - We respond within 24 hours to all email inquiries."
    },
    {
        "id": "contact_3",
        "category": "contact",
        "content": "Address: 123 Main Street, City, State 12345 - Our service center is open Monday through Friday."
    },
    
    # Hours
    {
        "id": "hours_1",
        "category": "hours",
        "content": "Business Hours: Monday-Friday 8am-6pm, Saturday 9am-4pm, Sunday Emergency Only. Emergency service available 24/7."
    },
]

# Simple embedding function (placeholder - in production use OpenAI embeddings)
def get_embedding(text: str) -> list[float]:
    """
    Generate a simple embedding for text.
    In production, this would use OpenAI's text-embedding-3-small
    For now, using a simple hash-based approach for demonstration
    """
    import hashlib
    hash_obj = hashlib.sha256(text.encode())
    hash_bytes = hash_obj.digest()
    # Convert to float list (simplified)
    return [b / 255.0 for b in hash_bytes[:16]] + [0.0] * 16

class KnowledgeBase:
    def __init__(self):
        self.documents = []
        self.embeddings = []
    
    async def load_knowledge(self):
        """Load knowledge base and generate embeddings"""
        print(f"Loading {len(KNOWLEDGE_BASE)} documents...")
        
        for doc in KNOWLEDGE_BASE:
            self.documents.append({
                "id": doc["id"],
                "category": doc["category"],
                "content": doc["content"],
                "embedding": get_embedding(doc["content"])
            })
        
        print(f"Knowledge base loaded with {len(self.documents)} documents")
    
    def search(self, query: str, top_k: int = 3) -> list[dict]:
        """Search knowledge base for relevant documents"""
        query_embedding = get_embedding(query)
        
        # Calculate similarity scores
        results = []
        for doc in self.documents:
            # Cosine similarity (simplified)
            similarity = sum(
                a * b for a, b in zip(query_embedding, doc["embedding"])
            )
            results.append({
                "id": doc["id"],
                "category": doc["category"],
                "content": doc["content"],
                "score": similarity
            })
        
        # Sort by score and return top_k
        results.sort(key=lambda x: x["score"], reverse=True)
        return results[:top_k]

# Global knowledge base instance
knowledge_base = KnowledgeBase()
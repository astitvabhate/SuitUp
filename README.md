# SuitUp

Evidence-grounded case memory for lawyers. Upload a case's documents, ask questions, and get answers with file and page citations.

> SuitUp is an AI-powered document research and case-memory assistant. It is not a substitute for professional legal judgment or legal advice.

## Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 15, TypeScript, Tailwind |
| Backend | Python 3.12, FastAPI, SQLAlchemy |
| Database | PostgreSQL 16 + pgvector (Docker, host port **5433**) |
| Embeddings | `BAAI/bge-small-en-v1.5`, run locally |
| LLM | Groq (`llama-3.3-70b-versatile`), configurable |

## Run locally

```bash
# 1. Secrets
cp .env.example .env            # then put your GROQ_API_KEY in .env

# 2. Database
docker compose up -d

# 3. Backend  (http://localhost:8000, docs at /docs)
cd backend
python -m uv venv --python 3.12 .venv
python -m uv pip install --python .venv/Scripts/python.exe -r requirements.txt
.venv/Scripts/python.exe -m uvicorn app.main:app --reload --port 8000

# 4. Frontend (http://localhost:3000)
cd frontend
npm install
npm run dev
```

Check: `curl localhost:8000/health` → `{"status":"ok","db":"connected"}`

Port 5433 is used on the host so the app doesn't collide with a locally installed PostgreSQL on 5432.

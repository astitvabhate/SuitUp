from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.db import check_connection

app = FastAPI(title="SuitUp API", version="0.1.0")

# Only the local frontend may call this API from a browser.
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    db_ok = check_connection()
    return {"status": "ok" if db_ok else "degraded", "db": "connected" if db_ok else "unreachable"}

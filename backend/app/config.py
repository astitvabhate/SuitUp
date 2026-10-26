"""Central configuration, loaded from the root .env file.

All secrets (DB password, API keys) live in .env and are read here.
Nothing else in the codebase should read environment variables directly.
"""
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

ROOT_DIR = Path(__file__).resolve().parents[2]  # suitup/


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=ROOT_DIR / ".env", extra="ignore")

    database_url: str = "postgresql+psycopg://suitup:suitup_dev_password@localhost:5433/suitup"

    llm_provider: str = "groq"
    llm_model: str = "llama-3.3-70b-versatile"
    groq_api_key: str = ""

    embedding_model: str = "BAAI/bge-small-en-v1.5"
    embedding_dim: int = 384

    storage_dir: str = "./storage"

    cors_origins: list[str] = ["http://localhost:3000"]


settings = Settings()

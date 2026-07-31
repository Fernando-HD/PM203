from fastapi import FastAPI
from app.routers import usuarios
from app.data.db import engine
from app.data import usuarioDB
from fastapi.middleware.cors import CORSMiddleware

usuarioDB.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="API usuarios ",
    description="Ivan Isay Guerra",
    version="1.0.0"
)

# Actualiza con tu NUEVA IP
origins = [
    "http://localhost:8081",
    "http://127.0.0.1:8081",
    "http://localhost:8082",  
    "http://127.0.0.1:8082",  
    "http://localhost:5001",
    "http://127.0.0.1:5001",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.1.48:8081",   
    "http://192.168.1.48:8082",  
    "http://192.168.1.48:5001",   
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(usuarios.router)
from fastapi import FastAPI
from app.routers import usuarios
from app.data.db import engine
from app.data import usuarioDB
from fastapi.middleware.cors import CORSMiddleware

#pertenece al funcionamiento del ORM de SQLAlchemy y sirve para 
#crear automáticamente las tablas en la base de datos si aún no existen.
usuarioDB.Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="API usuarios ",
    description="Ivan Isay Guerra",
    version="1.0.0"
)

#clientes con autorización a usar la API
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

# OPCIÓN RECOMENDADA PARA DESARROLLO: Permitir todos los orígenes
# (Comenta los origins de arriba y usa esto si sigues teniendo problemas)
# origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # O usa ["*"] para permitir todos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(usuarios.router)
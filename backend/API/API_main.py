from fastapi import FastAPI
from login import router as login_router
import uvicorn


app = FastAPI()

app.include_router(login_router, prefix="/api")


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
    
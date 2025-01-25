from fastapi import APIRouter, HTTPException, Query
import requests


router = APIRouter()

# 微信小程序的 AppID 和 AppSecret
appid = 'wx45d8ec9ad8f69d07'
secret = 'e79a66e7cae12b0ca595b358f2878c0c'

jscode2session = 'https://api.weixin.qq.com/sns/jscode2session'

@router.get("/onlogin")
async def login(code:str = Query(...)):
    params = {
        'appid': appid,
        'secret': secret,
        'js_code': code,
        'grant_type': 'authorization_code'
    }

    # 调用微信 API
    response = requests.get(jscode2session, params=params)

    if response.status_code != 200:
        raise HTTPException(status_code=500, detail="微信登录失败")
    data = response.json()

    if data.get('errcode'):
        raise HTTPException(status_code=400, detail=data.get('errmsg', '登录失败'))
    
    # 返回登录结果
    return data

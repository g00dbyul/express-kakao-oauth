import express from 'express';
import axios from "axios";
import qs from "qs";

const app = express();

const rest_api_key = 'ce047adcaeead4714a08e57de73e41f3';
const redirect_url = 'http://localhost:3000/token';
const secret = 'DQez3tcKYF5QwcLGoMN8j0JMhYVxtnuR';

// get
app.get('/login', (req, res) => {
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${rest_api_key}&redirect_uri=${redirect_url}`
    res.redirect(kakaoAuthURL)
});

app.get('/token', async (req, res) => {
    let token;
    try {
        token = await axios({//token
            method: 'POST',
            url: 'https://kauth.kakao.com/oauth/token',
            headers:{
                'content-type':'application/x-www-form-urlencoded'
            },
            data:qs.stringify({
                grant_type: 'authorization_code',//특정 스트링
                client_id: rest_api_key,
                client_secret:secret,
                redirectUri:redirect_url,
                code:req.query.code,//결과값을 반환했다. 안됐다.
            })//객체를 string 으로 변환
        })
    } catch (e) {
        return res.json(e.data)
    }
    res.send(token.data)
});


app.listen(3000, () => {
    console.log('실행중');
});
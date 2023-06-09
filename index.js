import express from "express" //express 라이브러리 불러옴
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser";
import dotEnv from "dotenv"

//불러오기
import connectDB from "./config/database.js";
import productRoute from "./routes/product.js";

dotEnv.config()

//복습
import orderRoute from "./routes/order.js"

const app= express() //const 상수

// DB 연결
connectDB()

// middleware 설정
app.use(cors()) //외부 api 접근 허용 라이브러리
app.use(morgan('dev')) //terminal 에 log 작성
//data 넘겨주기 middleware 설정
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//routing
app.use("/product", productRoute) //product 로 요청이 들어오면 이쪽으로 넘겨줄게
//복습
app.use("/order", orderRoute)

//request response test
app.get("/test", (req, res) => {
    res.json({
        msg: "test api"
    })
})


const port= process.env.PORT || 9090

app.listen(port, console.log(`server started at ${port}`))//` 변수 추가하고 싶을 때 사용

//코드 빌드 순서
//js java python ruby swift ...
//1. 위에서 아래 방향
//2. = 기준으로 오른쪽에서 왼쪽으로 치환
//3. . 하위 메소드 호출
//4. , 그리고로 해석
//5. () 함수의 모음을 해석
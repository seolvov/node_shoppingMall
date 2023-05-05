//1
import express from "express";
const router = express.Router()

//3 CRUD
//정보 가져오기
router.get("/get", (req, res) => {
    res.json({
        msg: "order get all"
    })
})
//생성
router.post("/create", (req, res) => {
    const userInput = {
        id: req.body.orderId,
        pw: req.body.orderPw
    }

    res.json({
        msg: "created a order",
        order: userInput
    })
})
//수정
router.put("/update", (req, res) => {
    res.json({
        msg: "updated a order"
    })
})
//삭제
router.delete("/delete", (req, res) => {
    res.json({
        msg: "deleted a order"
    })
})

//2
export default router

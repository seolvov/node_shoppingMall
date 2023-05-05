//1
import express from "express";
const router = express.Router()

//3 product 와 관련된 CRUD
// product 전체 정보 가져오는 api
router.get("/all", (req, res) => {
    res.json({
        msg: "product get all"
    })
})

//product 를 생성하는 api
router.post("/create", (req, res) => {
    res.json({
        msg: "created a product"
    })
})

//product 를 수정하는 api
router.put("/update", (req, res) => {
    res.json({
        msg: "updated a product"
    })
})

//product 를 삭제하는 api
router.delete("/delete", (req, res) => {
    res.json({
        msg: "deleted a product"
    })
})

//2
export default router
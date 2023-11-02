import express from "express";
import * as schools from "../controllers/schools.controller.js";

const schoolsRouter = express.Router();

schoolsRouter.get("/:id?", async (req, res, next) => {
  try {
    const {id} = req.params;
    let data;
    if (id) {
        data = await schools.findOne(id);
    } else {
        data = await schools.findAll();
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
});

schoolsRouter.post("/", async (req, res, next) => {
    try{
        let schoolsDTO = req.body;
        let data = await schools.addOne(schoolsDTO);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

schoolsRouter.put("/:id", async (req, res, next) => {
    try{
        let { id } = req.params;
        let schoolsDTO = req.body;
        let data = await schools.updateOne(id, schoolsDTO);
        res.json(data);
    } catch (err) {
    next(err);
    }
});

schoolsRouter.delete("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let data = await schools.removeOne(id);        
        res.json(data);
    } catch (err) {
        next(err);
    }
});

export default schoolsRouter;
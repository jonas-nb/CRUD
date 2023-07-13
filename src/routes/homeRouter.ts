import { Router } from "express";
import * as myRouter from "../Controller/homeController";

const router = Router();

router.get("/", myRouter.homePageRender);
router.post("/", myRouter.enviaDados);
router.get("/addAge/:slug", myRouter.addIdade);
router.get("/seleciona/:nome/:idade", myRouter.seleciona);
router.get("/removeAge/:slug", myRouter.removeIdade);
router.get("/remove/:slug", myRouter.deletado);

export default router;

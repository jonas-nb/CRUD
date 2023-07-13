import { Request, Response } from "express";
import { alunoInfo } from "../Models/Alunos";

export const homePageRender = async (req: Request, res: Response) => {
  //sempre atualiza a page
  const infoList = await alunoInfo.findAll({
    order: [["id", "ASC"]],
  });
  res.render("home", { info: infoList });
};

export const enviaDados = async (req: Request, res: Response) => {
  const nome = req.body.nome;
  const idade = req.body.idade;
  const addInfo = await alunoInfo.create({
    nome: nome,
    idade: idade,
  });

  console.log(nome, idade);
  const infoList = await alunoInfo.findAll({
    order: [["id", "ASC"]],
  });
  res.render("home", { info: infoList });
};

export const addIdade = async (req: Request, res: Response) => {
  const addAge = await alunoInfo.findByPk(req.params.slug);

  if (addAge) {
    addAge.idade += 1;
    await addAge.save();
  } else {
    console.log("falha");
  }

  //sempre atualiza a page
  const infoList = await alunoInfo.findAll({
    order: [["id", "ASC"]],
  });
  res.render("home", { info: infoList });
};

export const removeIdade = async (req: Request, res: Response) => {
  const removeAge = await alunoInfo.findByPk(req.params.slug);

  if (removeAge) {
    removeAge.idade -= 1;
    await removeAge.save();
  } else {
    console.log("falha");
  }

  //sempre atualiza a page
  const infoList = await alunoInfo.findAll({
    order: [["id", "ASC"]],
  });
  res.render("home", { info: infoList });
};

export const seleciona = async (req: Request, res: Response) => {
  const nome = req.params.nome;
  const idade = req.params.idade;

  //sempre atualiza a page
  res.render("select", { nome: nome, idade: idade });
};

export const deletado = async (req: Request, res: Response) => {
  const deleta = await alunoInfo.findByPk(req.params.slug);
  try {
    if (deleta) {
      const deletar = await deleta.destroy();
    } else {
      console.log("falha");
    }
  } catch (error) {
    console.log(error);
  }

  //sempre atualiza a page
  const infoList = await alunoInfo.findAll({
    order: [["id", "ASC"]],
  });
  res.render("home", { info: infoList });
};

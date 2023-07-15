import { Request, Response } from "express";
import { alunoInfo } from "../Models/Alunos";

// Renderiza a página inicial
export const homePageRender = async (req: Request, res: Response) => {
  // Obtém a lista de informações dos alunos
  const infoList = await alunoInfo.findAll({
    order: [["id", "ASC"]],
  });
  res.render("home", { info: infoList });
};

// Envia os dados do formulário
export const enviaDados = async (req: Request, res: Response) => {
  const nome = req.body.nome;
  const idade = req.body.idade;

  // Cria uma nova entrada de informações do aluno
  const addInfo = await alunoInfo.create({
    nome: nome,
    idade: idade,
  });

  console.log(nome, idade);

  // Obtém a lista atualizada de informações dos alunos
  const infoList = await alunoInfo.findAll({
    order: [["id", "ASC"]],
  });
  res.render("home", { info: infoList });
};

// Adiciona 1 à idade do aluno
export const addIdade = async (req: Request, res: Response) => {
  const aluno = await alunoInfo.findByPk(req.params.slug);

  if (aluno) {
    aluno.idade += 1;
    await aluno.save();
  } else {
    console.log("Falha ao encontrar aluno");
  }

  // Obtém a lista atualizada de informações
  const infoList = await alunoInfo.findAll({
    order: [["id", "ASC"]],
  });
  res.render("home", { info: infoList });
};

// Subtrai 1 da idade
export const removeIdade = async (req: Request, res: Response) => {
  const aluno = await alunoInfo.findByPk(req.params.slug);

  if (aluno) {
    aluno.idade -= 1;
    await aluno.save();
  } else {
    console.log("Falha ao encontrar aluno");
  }

  // Obtém a lista atualizada de informações dos alunos
  const infoList = await alunoInfo.findAll({
    order: [["id", "ASC"]],
  });
  res.render("home", { info: infoList });
};

// Seleciona um aluno específico
export const seleciona = async (req: Request, res: Response) => {
  const nome = req.params.nome;
  const idade = req.params.idade;

  res.render("select", { nome: nome, idade: idade });
};

// Deleta um aluno
export const deletado = async (req: Request, res: Response) => {
  const aluno = await alunoInfo.findByPk(req.params.slug);

  try {
    if (aluno) {
      await aluno.destroy();
    } else {
      console.log("Falha ao encontrar aluno");
    }
  } catch (error) {
    console.log(error);
  }

  // Obtém a lista atualizada de informações dos alunos
  const infoList = await alunoInfo.findAll({
    order: [["id", "ASC"]],
  });
  res.render("home", { info: infoList });
};

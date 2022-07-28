import chalk from "chalk";
import fs from "fs";

const extrairLinks = (texto) => {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) != null) {
    arrayResultados.push({[temp[1]]: temp[2]});
  }
  return arrayResultados;
};

const trataErro = (erro) => {
  throw new Error(chalk.red(erro.code, 'Arquivo Inexistente!!'));
};

const pegaArquivo = async (caminhoDoArquivo) => {
  const encoding = "utf-8";
    
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(extrairLinks(texto));
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow('Operação concluída'));
  }

};

pegaArquivo("./arquivos/texto1.md");

import chalk from "chalk";
import fs from "fs";

const extrairLinks = (texto) => {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) != null) {
    arrayResultados.push({[temp[1]]: temp[2]});
  }
  return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
};

const trataErro = (erro) => {
  throw new Error(chalk.red(erro.code, 'Arquivo Inexistente!!'));
};

async function pegaArquivo (caminhoDoArquivo){
  const encoding = "utf-8";
    
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extrairLinks(texto);
  } catch (erro) {
    return trataErro(erro);
  }

};

export default pegaArquivo;
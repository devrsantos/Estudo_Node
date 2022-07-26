import chalk from "chalk";
import fs from "fs";

const trataErro = (erro) => {
  throw new Error(chalk.red(erro.code, 'Arquivo Inexistente!!'));
};

const pegaArquivo = async (caminhoDoArquivo) => {
  const encoding = "utf-8";
    
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow('Operação concluída'));
  }

};

pegaArquivo("./arquivos/texto1.md");

import inquirer from 'inquirer';
import { Data } from '../types';

const getInput = async (): Promise<Data> => {
  try {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'genero',
        message: 'Qual o sexo da pessoa?',
        choices: ['M', 'F'],
      },
      {
        type: 'input',
        name: 'idade',
        message: 'Qual a idade da pessoa?',
        // validate(value: any) {
        //   const valid = !isNaN(parseInt(value))
        //   return valid || 'Entrada inválida, digite um número'
        // },
        filter(value) {
          if (value <= 25) {
            return 'a - Ate 25 anos ';
          } else if (value >= 26 && value <= 35) {
            return 'b - 26 a 35 anos';
          } else if (value >= 36 && value <= 45) {
            return 'c - 36 a 45 anos';
          } else if (value >= 46 && value <= 55) {
            return 'd - 46 a 55 anos';
          } else if (value >= 56) {
            return 'e - Mais 56 anos';
          }
        },
      },
      {
        type: 'list',
        name: 'escolaridade',
        message: 'Qual escolaridade da pessoa?',
        choices: ['Fundamental', 'Medio', 'Superior', 'Pos-graduacao'],
      },
      {
        type: 'list',
        name: 'profissao',
        message: 'Qual a profissão da pessoa?',
        choices: ['a', 'b', 'c', 'd', 'e'],
      },
    ]);

    return answer;
  } catch (error: any) {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log('deu erro: ', error);
    } else {
      // Something else went wrong
      console.log('vish');
    }

    throw new Error();
  }
};

export default getInput;

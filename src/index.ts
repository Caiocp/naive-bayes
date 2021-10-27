import { Data } from './types';
import getInput from './utils/interactiveCli';
import readFile from './utils/readFile';

const main = async () => {
  let yesEntries: Data[] = [];
  let noEntries: Data[] = [];
  let totalEntries = 0;
  let input: { [index: string]: Data | any };

  input = await getInput();

  const hNum = (row: Data) => {
    parseInt(row.target) === 0 ? noEntries.push(row) : yesEntries.push(row);
  };

  const hFunction = (rowCount: number) => {
    totalEntries = rowCount;
    console.log(yesEntries.length, noEntries.length, totalEntries);
    calcHValue();
  };

  readFile(hNum, hFunction);

  const hValue = (entry: Array<Data>) => {
    let hNo = 1;
    for (let key of Object.keys(input)) {
      let count = 0;
      let data: { [index: string]: Data | any };
      for (data of entry) {
        if (input[key] === data[key]) {
          count += 1;
        }
      }
      hNo *= count / entry.length;
    }
    return (hNo *= entry.length / totalEntries);
  };

  const calcHValue = () => {
    const hYes = hValue(yesEntries);
    const hNo = hValue(noEntries);

    console.log('hYes:', hYes);
    console.log('hNo:', hNo);

    console.log(hYes > hNo ? 'target 1' : 'target 0');
  };
};

main();

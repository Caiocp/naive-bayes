import fs from 'fs';
import path from 'path';
import { parse } from '@fast-csv/parse';

import { Data } from '../types';

const readFile = (onData: Function, endData: Function) => {
  const stream = fs.createReadStream(
    path.resolve(__dirname, '..', '..', 'naive-bayes-classificador-2.csv')
  );

  const csvStream = parse({ headers: true, delimiter: ',' })
    .on('data', (data: Data) => onData(data))
    .on('end', (rowCount: number) => endData(rowCount));

  stream.pipe(csvStream);
};

export default readFile;

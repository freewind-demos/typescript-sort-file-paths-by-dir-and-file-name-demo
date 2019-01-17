import * as path from 'path';

const files = [
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/5/508976.json",
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/5/507637.json",
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/5/508325.json",
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/5/508006.json",
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/5/509579.json",
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/5/509102.json",
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/5/507313.json",
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/5/508844.json",
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/10/506852.json",
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/10/509291.json",
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/10/507849.json",
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/10/508365.json",
  "workspace/blockchain-com-btc-json-fetcher/converted-btc-data/10/505039.json",
]

function getDirName(filePath: string): string {
  return path.basename(path.dirname(filePath));
}

function getFileNameNoExt(filePath: string): string {
  return path.basename(filePath, path.extname(filePath));
}

function compareAsInt(a: string, b: string): number {
  return parseInt(a) - parseInt(b);
}

const sorted = files.sort((filePath1, filePath2) => {
  const dirCompare = compareAsInt(getDirName(filePath1), getDirName(filePath2));
  if (dirCompare === 0) {
    return compareAsInt(filePath1, filePath2);
  } else {
    return dirCompare;
  }
});

console.log(sorted);



// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

function epochTime(dates){
  return (Date.parse(dates)/1000).toString();
}

// TODO: Buatlah fungsi createDate
const createDate = (dates, posisi) => {
  if(posisi!=null){
    let date = dates[posisi];
    return epochTime(date);
  }
  let arrayDate = [];
  for(let counter=0;counter<dates.length;counter++){
    arrayDate.push(epochTime(dates[counter]));
  }
  return arrayDate.sort().join('-');
};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};

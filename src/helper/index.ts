import {sections} from '../constants';

export const getSections = (_list: []) => {
  let finalarr: any = [];
  sections.map(n => {
    let arr = _list?.filter((f: string) => f.charAt(0).toUpperCase() === n);
    if (arr.length > 0) {
      finalarr.push({
        title: n,
        data: arr,
      });
    } else {
      finalarr.push({
        title: n,
        data: [],
      });
    }
  });
  return finalarr;
};

/**
 * Created by bby on 18/3/26.
 */
function solution(S) {
  let newS = S.replace(/\s|−/g, '');
  const length = newS.length;
  let n = Math.floor(length / 3);
  let m = length % 3;
  if(m === 1){
    --n
    m += 3;
  }
  const nArr = new Array(n).fill(1).map((e, i) => {
    return newS.slice(i*3, (i+1)*3);
  });
  const mArr = new Array(m/2).fill(1).map((e, i) => {
    return newS.slice(-m).slice(i*2, (i+1)*2);
  });

  return nArr.concat(mArr).join('-');

}

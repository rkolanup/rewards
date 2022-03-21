export default function calRewards(amount){
    let rewards = 0;
    if(amount > 100){
      let n = amount - 100;
      rewards = (2*n) + 50;

    }
    if(amount >= 50 && amount < 100){
      rewards = amount - 50;
    } 
    return rewards
  }
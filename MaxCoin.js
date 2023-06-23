var maxCoins = function(piles) {
    piles.sort((a,b)=>a-b)
    let j=piles.length-2,
	ans=0;
    for(let i=0;i<piles.length/3;i++){
        ans+=piles[j];
        j=j-2;
    }
    return ans;
};
console.log(maxCoins([1,4,5,6,3,9]))
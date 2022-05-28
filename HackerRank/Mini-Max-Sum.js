function miniMaxSum(arr){
    let sum = 0;
    let min = 0;
    let max = 0;
    arr.sort((a, b) => a - b);
        for(let n=0; n<arr.length; n++){
            if(arr[n] > 0){
                sum = sum + arr[n];
            }
        }
        min = sum - arr[arr.length-1];
        max = sum - arr[0];
        console.log(`${min} ${max}`);
}

function main(){
    let arr=[7,69,2,221,8974];
    miniMaxSum(arr);
}
main();

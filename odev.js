let nums = [2,7,11,15];
let target = 9;

let twoSum = function (nums, target) {

    let sonuc = [];


    let indexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let fark = target - nums[i];
        if (indexMap.has(fark)) {
            sonuc[1] = i;
            sonuc[0] = indexMap.get(fark);
            break;
        } else {
            indexMap.set(nums[i], i);
        }
    }
    return sonuc;
};
let s = twoSum(nums,target);
console.log(s);
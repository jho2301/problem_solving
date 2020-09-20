function productExceptSelf(nums: number[]): number[] {
    const output = [];
    let leftMult = 1;
    let rightMult = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        output[i] *= leftMult;
        leftMult *= nums[i];
    }
    return output;
};

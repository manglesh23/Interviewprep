const a = [3, -1, 2, 5, -3, -2, 1];

const maxproductsub = (a) => {
    let maxpro = a[0];  // track the max product
    let minpro = a[0];  // track the min product
    let res = a[0];     // store the result
    let start = 0;      // start of subarray
    let end = 0;        // end of subarray
    let tempStart = 0;  // temporary start index

    for (let i = 1; i < a.length; i++) {
        // If the current number is negative, swap maxpro and minpro
        if (a[i] < 0) {
            [maxpro, minpro] = [minpro, maxpro];
        }

        // Update maxpro and minpro
        maxpro = Math.max(a[i], a[i] * maxpro);
        minpro = Math.min(a[i], a[i] * minpro);

        // Update start index when new subarray starts
        if (maxpro === a[i]) {
            tempStart = i;
        }

        // Update result and subarray indices
        if (res < maxpro) {
            res = maxpro;
            start = tempStart;
            end = i;
        }
    }

    console.log(`Subarray from index ${start} to ${end} has the maximum product of ${res}`);
};

maxproductsub(a);

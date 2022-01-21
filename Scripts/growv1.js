/** @param {NS} ns **/
// not as useful as hackv2 but it is more simple and doesn't wait or anything, just grows. I would recommend hack v2 over this one but i thought i would enclude it as it was what I first started with. 
// Usage is just run grow.js servername 
export async function main(ns) {while (true) await ns.grow(ns.args[0]);}
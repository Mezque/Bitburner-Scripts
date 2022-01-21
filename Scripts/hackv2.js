/**
* @param {import(".").NS } ns
* @param {NS} ns
**/
export async function main(ns) {
    ns.tprint("\n'  ██   ██  █████   ██████ ██   ██     ███████  ██████ ██████  ██ ██████  ████████     ██    ██ ██████  \n'  ██   ██ ██   ██ ██      ██  ██      ██      ██      ██   ██ ██ ██   ██    ██        ██    ██      ██ \n'  ███████ ███████ ██      █████       ███████ ██      ██████  ██ ██████     ██        ██    ██  █████  \n'  ██   ██ ██   ██ ██      ██  ██           ██ ██      ██   ██ ██ ██         ██         ██  ██  ██      \n'  ██   ██ ██   ██  ██████ ██   ██     ███████  ██████ ██   ██ ██ ██         ██          ████   ███████ \n");
    ns.tprint("https://github.com/Mezque/Bitburner-Scripts/tree/master/Scripts")
    var target = ns.args[0];
    ns.tprint("The target server is ",target);
    var moneyThresh = ns.getServerMaxMoney(target) * 0.50;
    ns.tprint("Hack will take place at ", ns.getServerMaxMoney(target)*0.50 , " current money amount is " , ns.getServerMoneyAvailable(target) , " Server needs ", ns.getServerMaxMoney(target)*0.50 - ns.getServerMoneyAvailable(target) , " more money before hack is possible");
    var securityThresh = ns.getServerMinSecurityLevel(target) + 5;
    ns.tprint("and a secuirty thresh hold of ",securityThresh);
    var maxMoney = ns.getServerMaxMoney(target);
    ns.tprint("and with a max money count of ",maxMoney);
    if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(target);
        ns.tprint("Brute SSH ran");
    }
    while (true) {
        if (ns.getServerSecurityLevel(target) > securityThresh) {
            await ns.weaken(target);
            ns.tprint("Weaken Server on " , (target));
        } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            await ns.grow(target);
            ns.tprint("Grow Server on " , (target));
        } else {
            await ns.hack(target);
            ns.tprint("Hack Server ran on " , (target));
        }
    }
}
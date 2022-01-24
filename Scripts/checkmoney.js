/** @param {NS} ns **/
export async function main(ns) {
    ns.tprint("\n    ██████ ██   ██ ███████  ██████ ██   ██     ███    ███  ██████  ███    ██ ███████ ██    ██ \n   ██      ██   ██ ██      ██      ██  ██      ████  ████ ██    ██ ████   ██ ██       ██  ██  \n   ██      ███████ █████   ██      █████       ██ ████ ██ ██    ██ ██ ██  ██ █████     ████   \n   ██      ██   ██ ██      ██      ██  ██      ██  ██  ██ ██    ██ ██  ██ ██ ██         ██    \n    ██████ ██   ██ ███████  ██████ ██   ██     ██      ██  ██████  ██   ████ ███████    ██    \n")
    ns.tprint("https://github.com/Mezque/Bitburner-Scripts/tree/master/Scripts")
    var target = ns.args[0];
    var targetMoney = ns.getServerMaxMoney(target);
    ns.tprint("The target server has ", targetMoney ," dollars on it.");
}
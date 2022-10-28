const os = require("os");

setInterval(() => {
    const {platform, arch, totalmem, freemem} = os;

    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const inUse = (fRam/tRam * 100);

    const status = {
        plataforma: platform(),
        arquitetura: arch(),
        totalRam: `${parseInt(tRam)}`,
        livreRam: `${parseInt(fRam)}`,
        use: `${inUse.toFixed(2)} %`
    }

    console.clear();
    console.table(status);

    exports.statusRam = status;
}, 1000)
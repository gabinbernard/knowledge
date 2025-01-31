function rgb2cmyk(r, g, b) {
    const normR = r / 255;
    const normG = g / 255;
    const normB = b / 255;

    const k = 1 - Math.max(normR, normG, normB);

    if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };

    return {
        c: Math.round((1 - normR - k) / (1 - k) * 100),
        m: Math.round((1 - normG - k) / (1 - k) * 100),
        y: Math.round((1 - normB - k) / (1 - k) * 100),
        k: Math.round(k * 100)
    };
}

function cmyk2rgb(c, m, y, k) {
    if (k === 100) return { r: 0, g: 0, b: 0 };

    const normC = c / 100;
    const normM = m / 100;
    const normY = y / 100;
    const normK = k / 100;

    return {
        r: Math.round((1 - normC) * (1 - normK) * 255),
        g: Math.round((1 - normM) * (1 - normK) * 255),
        b: Math.round((1 - normY) * (1 - normK) * 255)
    };
}

const funcs = {
    rgb2cmyk, 
    cmyk2rgb
}

const [,,func,...args] = process.argv; 

if (!funcs[func]) {
    console.log(`/!\\ Invalid function name.\nUsage: <function> <...args>`);
    return;
}

console.log(funcs[func](...args));
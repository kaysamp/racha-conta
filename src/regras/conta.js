export function paraCentavos(Reais) {
    return Math.round (Reais * 100)
}

export function calcularGorjeta(x, percentual = 10) {
    return Math.round (x * percentual / 100)
}
export function formatarReais (y) {
 return `R$ ${(y / 100).toFixed(2)}`
}
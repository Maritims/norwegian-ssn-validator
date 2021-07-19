const getFirstControlDigit = (d1: number, d2: number, m1: number, m2: number, y1: number, y2: number, i1: number, i2: number, i3: number): number => {
    const firstControlDigit = 11 - ((3 * d1 + 7 * d2 + 6 * m1 + 1 * m2 + 8 * y1 + 9 * y2 + 4 * i1 + 5 * i2 + 2 * i3) % 11)
    return firstControlDigit === 11 ? 0 : firstControlDigit
}

const getSecondControlDigit = (d1: number, d2: number, m1: number, m2: number, y1: number, y2: number, i1: number, i2: number, i3: number, c1: number): number => {
    const secondControlDigit = 11 - ((5 * d1 + 4 * d2 + 3 * m1 + 2 * m2 + 7 * y1 + 6 * y2 + 5 * i1 + 4 * i2 + 3 * i3 + 2 * c1) % 11)
    return secondControlDigit === 11 ? 0 : secondControlDigit
}

const getControlDigitsFromSsn = (ssn: string): Array<number> => {
    const d1 = Number(ssn.slice(0, 1))
    const d2 = Number(ssn.slice(1, 2))
    const m1 = Number(ssn.slice(2, 3))
    const m2 = Number(ssn.slice(3, 4))
    const y1 = Number(ssn.slice(4, 5))
    const y2 = Number(ssn.slice(5, 6))
    const i1 = Number(ssn.slice(6, 7))
    const i2 = Number(ssn.slice(7, 8))
    const i3 = Number(ssn.slice(8, 9))
    const c1 = getFirstControlDigit(d1, d2, m1, m2, y1, y2, i1, i2, i3)
    const c2 = getSecondControlDigit(d1, d2, m1, m2, y1, y2, i1, i2, i3, c1)

    return [c1, c2]
}

export const validateControlDigits = (ssn: string): boolean => {
    const firstControlDigit = Number(ssn.slice(9, 10))
    const secondControlDigit = Number(ssn.slice(10, 11))
    const actualControlDigits = getControlDigitsFromSsn(ssn)

    return firstControlDigit === actualControlDigits[0] && secondControlDigit === actualControlDigits[1]
}
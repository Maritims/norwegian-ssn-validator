export const getDateOfBirthFromSsn = (value: string): Date => {
    const dayOfBirth = value.slice(0, 2)
    const monthOfBirth = value.slice(2, 4).padStart(2, '0')
    let yearOfBirth = Number(value.slice(4, 6))
    yearOfBirth += yearOfBirth > 50 ? 1900 : 2000

    return new Date(`${yearOfBirth}-${monthOfBirth}-${dayOfBirth}T00:00:00.000Z`)
}
export const getDateOfBirthFromSsn = (value: string): Date => {
    // D-number support
    let dayOfBirth = Number(value.slice(0, 2))
    if(dayOfBirth > 31) dayOfBirth -= 40

    // H-number support
    let monthOfBirth = Number(value.slice(2, 4))
    if(monthOfBirth > 40) monthOfBirth -= 40
    
    let yearOfBirth = Number(value.slice(4, 6))
    yearOfBirth += yearOfBirth > 50 ? 1900 : 2000

    return new Date(`${yearOfBirth}-${monthOfBirth.toString().padStart(2, '0')}-${dayOfBirth.toString().padStart(2, '0')}T00:00:00.000Z`)
}

export const validateDateOfBirth = (dateOfBirth: Date): boolean => dateOfBirth instanceof Date && !isNaN(dateOfBirth.getTime())
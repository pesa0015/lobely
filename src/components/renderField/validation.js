const isEmpty = value => !value || typeof value !== 'string' ? true : false
const minLength = (min, value) => value.length < min ? false : true

export const name = value => {
    if (isEmpty(value)) {
        return 'Välj namn'
    } else if (!minLength(4, value)) {
        return 'Namnet måste vara minst 4 tecken'
    }

    return undefined
}

export const email = value => {
    if (isEmpty(value)) {
        return 'Välj email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Ogiltig emailadress'
    }
}

export const gender = value => isEmpty(value) ? 'Välj kön' : undefined

export const password = value => {
    if (isEmpty(value)) {
        return 'Välj lösenord'
    } else if (!minLength(6, value)) {
        return 'Lösenordet måste vara minst 6 tecken'
    }
}

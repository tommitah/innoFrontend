const storageKey = 'loggedInnoAppUser'

export const saveUser = (user) => {
  try {
    const serializedUser = JSON.stringify(user)
    localStorage.setItem(storageKey, serializedUser)
  } catch (err) {
    console.error('storage print\n', err)
  }
}

export const loadUser = () => {
  try {
    const serializedUser = localStorage.getItem(storageKey)
    if (serializedUser === null) {
      return undefined
    }
    return JSON.parse(serializedUser)
  } catch (err) {
    localStorage.removeItem(storageKey)
    console.error('storage print\n', err)
    return undefined
  }
}

export const logoutUser = () =>
  localStorage.removeItem(storageKey)
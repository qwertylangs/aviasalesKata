const BASE_URL = "https://aviasales-test-api.kata.academy/"

export const getCarrierLogoUrl = (code: string) => `https://pics.avs.io/99/36/${code}.png`

export const searchIdUrl = BASE_URL + "search"
export const getTicketsUrl = (id: string) => BASE_URL + `tickets?searchId=${id}`

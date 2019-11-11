const BASE_API_URL = '.'
const APPS_URL = `${BASE_API_URL}/apps.json`

export const apiRequest = async (requestMethod, args) => {
  const promise = args.length === 0 ? requestMethod() : requestMethod(...args)
  const response = await promise.catch(() => null)
  const requestError = await handleRequestError(response)
  const json = !requestError && (await response.json())
  return { json, requestError }
}

const handleRequestError = async response =>
  response.ok
    ? undefined
    : {
        code: response.status,
        message: response.statusText,
      }

const apiGetRequest = async url =>
  await fetch(url, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    method: 'get',
  })

export const apiGetApps = () => apiGetRequest(APPS_URL)

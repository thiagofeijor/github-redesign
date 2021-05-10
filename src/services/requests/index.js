import * as githubApi from './github-api'

const getApi = () => {
  switch (process.env.POI_APP_MIDDLEWARE) {
    default:
      return githubApi
  }
}

export default getApi()

import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: process.env.POI_APP_GITHUB_TOKEN
})

export const getUsers = async q => {
  const { data } = await octokit.rest.search.users({
    q,
  })
  return data
}

export const getRepositories = async username => {
  const { data } = await octokit.rest.repos.listForUser({
    username,
    per_page: 100, 
  })
  return data
}

export const getLanguages = async (owner, repo ) => {
  const { data } = await octokit.rest.repos.listLanguages({
    owner,
    repo, 
  })
  return data
}

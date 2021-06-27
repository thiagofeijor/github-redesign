import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

export const getUsers = async q => {
  const { data } = await octokit.rest.search.users({
    q,
  })
  return data
}

export const getRepositories = async (username, page = 1) => {
  const { data } = await octokit.rest.activity.listReposStarredByUser({
    username,
    page,
    per_page: 100,
  })
  return data
}

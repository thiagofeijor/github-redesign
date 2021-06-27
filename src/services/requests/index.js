import * as github from './github-api'

const moduleExport = {}

switch (process.env.API_KIND) {
  default:
    moduleExport.getRepositories = github.getRepositories
    moduleExport.getUsers = github.getUsers
}

export const getRepositories = moduleExport.getRepositories
export const getUsers = moduleExport.getUsers

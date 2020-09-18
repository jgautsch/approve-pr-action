const core = require('@actions/core')
const { getOctokit, context } = require('@actions/github')

async function main () {
  const token = core.getInput('github-token')
  const number = core.getInput('pr-number')

  const octokit = getOctokit(token)

  await octokit.pulls.createReview({
    ...context.repo,
    pull_number: number,
    event: 'APPROVE'
  })
}

main().catch(err => core.setFailed(err.message))

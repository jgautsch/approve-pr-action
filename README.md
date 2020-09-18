# approve-pr-action

GitHub action that approves PRs.

## Usage

```yaml
on: pull_request
steps:
  - name: Approve Pull Request
    uses: jgautsch/approve-pr-action@v1
    with:
      github-token: ${{ secrets.GITHUB_TOKEN }}
      number: ${{github.event.number}}
```

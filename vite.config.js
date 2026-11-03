import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project sites are served from /<repository-name>/.
// User/organization sites (username.github.io) are served from /.
// Locally, use / so `npm run dev` works without a repository path.
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.GITHUB_ACTIONS === 'true' && repositoryName
  ? (repositoryName.endsWith('.github.io') ? '/' : `/${repositoryName}/`)
  : '/'

export default defineConfig({
  plugins: [react()],
  base,
})

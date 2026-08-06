import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/*.md', {
  excerpt: true,
  transform(data) {
    return data
      .filter(p => !p.url.endsWith('/blog/'))
      .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  }
})

---
title: Novidades
---

<script setup>
import { data as posts } from './posts.data.mjs'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
}
</script>

# Novidades do App UniRadio

Atualizações e melhorias semanais do aplicativo.

<div class="blog-list">
  <article v-for="post in posts" :key="post.url" class="blog-post">
    <h2><a :href="post.url">{{ post.frontmatter.title }}</a></h2>
    <time>{{ formatDate(post.frontmatter.date) }}</time>
    <div v-if="post.excerpt" v-html="post.excerpt" class="excerpt" />
    <a :href="post.url" class="read-more">Leia mais →</a>
  </article>
</div>

<style scoped>
.blog-list { margin-top: 2rem; }
.blog-post {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}
.blog-post h2 { margin-top: 0; }
time { color: var(--vp-c-text-2); font-size: 0.9rem; display: block; margin: 0.25rem 0 1rem; }
.excerpt { margin-bottom: 1rem; }
.read-more { font-weight: 500; color: var(--vp-c-brand-1); }
.read-more:hover { color: var(--vp-c-brand-2); }
</style>

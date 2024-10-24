import * as path from 'path';
import { defineConfig } from 'rspress/config';
import fileTree from 'rspress-plugin-file-tree';
import sitemap from "rspress-plugin-sitemap";

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: "Richard's Notes",
  description: '关于AI、数据分析、及实用工具的实践和经验分享',
  icon: '/rspress-icon.png',
  // logo: {
  // light: '/rspress-light-logo.png',
  // dark: '/rspress-dark-logo.png',
  // },
  globalStyles: path.join(__dirname, 'styles', 'index.css'),
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/i-Richard-me' },
    ],
  },
  plugins: [
    fileTree(),
    sitemap({
      domain: "https://blog.richardwang.me",
      defaultChangeFreq: "weekly",
    }),
  ],
});

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Blaise Sebagabo | Personal Portfolio',
    siteDescription: 'A simple portfolio theme for Gridsome powered by Tailwind CSS v1',
    siteUrl: 'https://seblaise.dev',
    plugins: [{
            use: 'gridsome-plugin-tailwindcss',
        },
        {
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: 'UA-157315379-1'
            }
        },
        {
            use: '@gridsome/vue-remark',
            options: {
                typeName: 'Documentation', // Required
                baseDir: './docs', // Where .md files are located
                pathPrefix: '/docs', // Add route prefix. Optional
                template: './src/templates/Documentation.vue', // Optional
                plugins: [
                    ['gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true }]
                ],
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'blog/**/*.md',
                typeName: 'Post',
                refs: {
                    tags: {
                        typeName: 'Tag',
                        create: true
                    }
                }
            }
        },
        {
            use: 'gridsome-plugin-rss',
            options: {
                contentTypeName: 'Post',
                feedOptions: {
                    title: 'Gridsome Portfolio Starter Blog',
                    feed_url: 'https://seblaise.dev/rss.xml',
                    site_url: 'https://seblaise.dev/'
                },
                feedItemOptions: node => ({
                    title: node.title,
                    description: node.summary,
                    url: 'https://seblaise.dev' + node.path,
                    author: 'Blaise Sebagabo',
                    date: node.date
                }),
                output: {
                    dir: './static',
                    name: 'rss.xml'
                }
            }
        },
        {
            use: '@gridsome/plugin-sitemap',
            options: {
                cacheTime: 600000, // default
            }
        },
    ],
    templates: {
        Tag: '/tag/:id'
    },
    transformers: {
        remark: {
            plugins: [
                ['gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true }]
            ],
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
        }
    },
}
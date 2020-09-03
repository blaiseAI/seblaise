// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)

    Vue.use(VueScrollTo, {
        duration: 500,
        easing: "ease",
    })

    Vue.use(VueFuse)

    head.meta.push({
        name: 'keywords',
        content: 'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
    })

    head.meta.push({
        name: 'description',
        content: 'Personal Portfolio website'
    })

    head.meta.push({
        name: 'author',
        content: 'Blaise Sebagabo'
    })

    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
    })

    // Add an external JavaScript before the closing </body> tag
    head.script.push({
            src: 'https://some-server.com/external-script.js',
            body: true
        })
        // Added convertkit script
    head.script.push({ src: '<script src="https://f.convertkit.com/ckjs/ck.5.js"</script>' })
}
<template>
  <Layout>
    <div class="hero container-inner mx-auto py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-snug">/Uses</div>
      </div>
      <p>
        A list of hardware and software I use in my day to day life as a web
        developer.
      </p>
      <p>
        More of these pages from other developers can be found
        <a href="https://uses.tech/">here</a>.
      </p>
      <div
        class="flex flex-col sm:flex-row text-center justify-between w-full sm:text-left py-10"
      >
        <div class="leading-snug">
          <h1 class="text-2xl font-bold">Hardware</h1>
          <ul class="list-disc">
            <li>MacBook Pro 15", Late 2017</li>
            <li>Iphone X</li>
          </ul>
        </div>
        <div class="leading-snug">
          <h1 class="text-2xl font-bold">Development</h1>
          <ul class="list-disc">
            <li>Editor: Visual Studio Code</li>
            <li>Main browser: Chrome</li>
            <li>Terminal: iTerm2</li>
          </ul>
        </div>
        <div class="leading-snug">
          <h1 class="text-2xl font-bold">Other tools</h1>
          <ul class="list-disc">
            <li>Note Taking: Notion</li>
            <li>Music: Spotify</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Uses",
  },
};
</script>


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  server: {
    port: 3000,
    host: "0",
  },
  target: "static",
  router: {
    base: "/Portfolio/",
  },
  app: {
    head: {
      title: "Lerts Portfolio",
      meta: [
        {
          name: "description",
          content:
            "Lerts Portfolio. Стрельников Дмитрий Алексеевич, frontend developer. Портфолио",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/Logo.svg",
        },
      ],
    },
  },
  css: [`@/assets/styles/global.scss`],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/_color.scss" as *;
            @use "@/assets/styles/_fonts.scss" as *;
          `,
        },
      },
    },
  },
});

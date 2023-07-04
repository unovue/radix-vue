export default defineAppConfig({
  docus: {
    title: "Radix Vue",
    description: "An open-source Vue component library for building unstyled, high-quality and accessible components.",
    image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
      twitter: "radix_vue",
      github: "radix-vue/radix-vue",
    },
    github: {
      dir: "docs/content",
      branch: "main",
      repo: "radix-vue",
      owner: "radix-vue",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
});

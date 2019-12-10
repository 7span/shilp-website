module.exports = {
  title: "Shilp",
  description: "Just playing around",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/alert.md" },
      { text: "External", link: "https://google.com" }
    ],
    sidebar: {
      "/components/": ["alert", "button"]
    }
  }
};

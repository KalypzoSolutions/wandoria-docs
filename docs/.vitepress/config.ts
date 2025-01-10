import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wandoria.net Wiki",
  description: "Hilfe und Dokumentation für Wandoria - Realms Minecraft",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: 'https://wandoria.net' }
    ],

    sidebar: [
      {
        text: 'Spawn',
        items: [
          {
            text: 'NPCs',
            items: [
              { text: 'Celina', link: '/spawn/npc/celina' },
              { text: 'Schmied', link: '/spawn/npc/blacksmith' },
              { text: 'Bibilothekarin', link: '/spawn/npc/librarian' },
              { text: 'Barkeeper', link: '/spawn/npc/barkeeper' },
              { text: 'Pilot', link: '/spawn/npc/pilot' },
              { text: 'Mechaniker', link: '/spawn/npc/mechanic' },
              { text: 'Jobs', link: '/spawn/npc/jobs' },
              { text: 'Shop', link: '/spawn/npc/shop' },
            ]
          }
        ]
      },
      {
        text: 'Items',
        items: [
          { text: 'Stahlplatten', link: '/items/stealplate' }
        ]
      },
      {
        text: 'Realms',
        items: [
          { text: 'Realm erstellen', link: '/realms/create' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KalypzoSolutions/' },
      { icon: 'discord', link: 'https://dc.wandoria.net' }
    ]
  }
})

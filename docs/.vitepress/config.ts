import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wandoria.net Wiki",
  description: "Hilfe und Dokumentation für Wandoria - Realms Minecraft",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/assets/logo.png',

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
          { text: 'Stahlplatten', link: '/items/stealplate' },
          { text: 'Laser MP-7', link: '/items/laser_mp' },
          { text: 'Laser MG-30', link: '/items/laser_mg' },
        ]
      },
      {
        text: 'Realms',
        items: [
          { text: 'Realm erstellen', link: '/realms/create' }
        ]
      },
      {
        text: 'Commands',
        link: "/commands/commands",
        items: [
          { text: 'Warp-Command', link: '/commands/warp' },
          { text: 'Fly-Command', link: '/commands/fly' },
          { text: 'Feed-Command', link: '/commands/feed' },
          { text: 'Playtime-Command', link: '/commands/playtime' },
          { text: 'Coins-Command', link: '/commands/coins' },
          { text: 'Pay-Command', link: '/commands/pay' },
          { text: 'Bits-Command', link: '/commands/bits' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KalypzoSolutions/' },
      { icon: 'discord', link: 'https://dc.wandoria.net' }
    ]
  }
})

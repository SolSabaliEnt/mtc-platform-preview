export const photos = {
  artist: "https://images.unsplash.com/photo-1614010966237-74489a16848b?auto=format&fit=crop&w=800&q=85",
  curator1: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&w=500&q=80",
  curator2: "https://images.unsplash.com/photo-1693188584549-bbf6e28d09e0?auto=format&fit=crop&w=500&q=80",
  curator3: "https://images.unsplash.com/photo-1542583701-20d3be307eba?auto=format&fit=crop&w=500&q=80",
};

export const curators = [
  { name: "Maya Okafor", role: "BBC 1Xtra · Radio DJ", genres: "Alté · R&B · Afro-fusion", city: "London, UK", cred: 94, price: 25, response: "98%", image: photos.curator1, tone: "orange", outcome: "31 radio plays" },
  { name: "Jules Bennett", role: "Founder · Open Ear", genres: "Indie · Electronic · Leftfield", city: "Berlin, DE", cred: 91, price: 18, response: "96%", image: photos.curator2, tone: "lime", outcome: "86 playlist adds" },
  { name: "Dante Rivers", role: "Music Editor · RIFT", genres: "Hip-hop · R&B · Jazz", city: "New York, US", cred: 88, price: 30, response: "93%", image: photos.curator3, tone: "blue", outcome: "24 editorial features" },
];

export const tracks = [
  { artist: "Kai Nova", title: "Slow Motion", genre: "ALT R&B", time: "3:24", ago: "2h", art: "art-one", urgent: true },
  { artist: "Ama Soleil", title: "Say Less", genre: "ALTÉ", time: "2:58", ago: "5h", art: "art-two", urgent: false },
  { artist: "The Dial Tones", title: "Static Bloom", genre: "INDIE", time: "4:11", ago: "1d", art: "art-three", urgent: false },
  { artist: "Miro Vale", title: "After Image", genre: "ELECTRONIC", time: "3:48", ago: "1d", art: "art-four", urgent: false },
];

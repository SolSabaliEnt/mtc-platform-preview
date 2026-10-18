import { useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "check"
  | "chevron"
  | "close"
  | "disc"
  | "headphones"
  | "home"
  | "menu"
  | "more"
  | "pause"
  | "play"
  | "proof"
  | "search"
  | "spark"
  | "star"
  | "wallet";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
    disc: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2" /></>,
    headphones: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M18 19h-1a2 2 0 0 1-2-2v-3h5v3a2 2 0 0 1-2 2ZM6 19H5a2 2 0 0 1-2-2v-3h5v3a2 2 0 0 1-2 2Z" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    more: <><circle cx="5" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" /></>,
    pause: <><path d="M9 5v14" /><path d="M15 5v14" /></>,
    play: <path d="m8 5 11 7-11 7Z" />,
    proof: <><path d="M12 3 4 7v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V7l-8-4Z" /><path d="m8.5 12 2.2 2.2 4.8-4.8" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    spark: <><path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" /><path d="m18.5 15 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" /></>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
    wallet: <><path d="M4 6h14a2 2 0 0 1 2 2v10H4a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h12" /><path d="M16 11h4v4h-4a2 2 0 0 1 0-4Z" /></>,
  };
  return (
    <svg aria-hidden="true" className="icon" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">{paths[name]}</g>
    </svg>
  );
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`logo ${inverse ? "logo-inverse" : ""}`} aria-label="Make The Crate">
      <div className="mark"><b>M</b><b>T</b><strong>C<span>.</span></strong></div>
      <small>MAKE THE CRATE</small>
    </div>
  );
}

function Button({
  children,
  className = "",
  icon,
  onClick,
  variant = "dark",
}: {
  children: ReactNode;
  className?: string;
  icon?: IconName;
  onClick?: () => void;
  variant?: "dark" | "orange" | "outline" | "ghost";
}) {
  return <button className={`btn btn-${variant} ${className}`} onClick={onClick}>{children}{icon && <Icon name={icon} />}</button>;
}

const photos = {
  artist: "https://images.unsplash.com/photo-1614010966237-74489a16848b?auto=format&fit=crop&w=800&q=85",
  curator1: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&w=500&q=80",
  curator2: "https://images.unsplash.com/photo-1693188584549-bbf6e28d09e0?auto=format&fit=crop&w=500&q=80",
  curator3: "https://images.unsplash.com/photo-1542583701-20d3be307eba?auto=format&fit=crop&w=500&q=80",
};

const curators = [
  { name: "Maya Okafor", role: "BBC 1Xtra · Radio DJ", genres: "Alté · R&B · Afro-fusion", city: "London, UK", cred: 94, price: 25, response: "98%", image: photos.curator1, tone: "orange", outcome: "31 radio plays" },
  { name: "Jules Bennett", role: "Founder · Open Ear", genres: "Indie · Electronic · Leftfield", city: "Berlin, DE", cred: 91, price: 18, response: "96%", image: photos.curator2, tone: "lime", outcome: "86 playlist adds" },
  { name: "Dante Rivers", role: "Music Editor · RIFT", genres: "Hip-hop · R&B · Jazz", city: "New York, US", cred: 88, price: 30, response: "93%", image: photos.curator3, tone: "blue", outcome: "24 editorial features" },
];

function Pill({ children, active = false, onClick }: { children: ReactNode; active?: boolean; onClick?: () => void }) {
  return <button className={`pill ${active ? "active" : ""}`} onClick={onClick}>{children}</button>;
}

function ArtistHeader({ page, setPage, setMode }: { page: string; setPage: (p: string) => void; setMode: (m: "artist" | "curator") => void }) {
  return (
    <header className="artist-header">
      <Logo />
      <nav className="desktop-nav">
        <button className={page === "discover" ? "active" : ""} onClick={() => setPage("discover")}>Discover</button>
        <button className={page === "tracking" ? "active" : ""} onClick={() => setPage("tracking")}>Submissions</button>
        <button className={page === "proof" ? "active" : ""} onClick={() => setPage("proof")}>CrateProof</button>
      </nav>
      <div className="header-actions">
        <button className="mode-switch" onClick={() => setMode("curator")}><Icon name="spark" size={15} /> Curator view</button>
        <button className="avatar">KN</button>
      </div>
    </header>
  );
}

function MobileNav({ page, setPage }: { page: string; setPage: (p: string) => void }) {
  const items: { id: string; label: string; icon: IconName }[] = [
    { id: "discover", label: "Discover", icon: "home" },
    { id: "tracking", label: "Submissions", icon: "headphones" },
    { id: "proof", label: "CrateProof", icon: "proof" },
  ];
  return <nav className="mobile-nav">{items.map((item) => <button className={page === item.id ? "active" : ""} key={item.id} onClick={() => setPage(item.id)}><Icon name={item.icon} /><span>{item.label}</span></button>)}</nav>;
}

function CuratorCard({ curator, onOpen }: { curator: typeof curators[number]; onOpen: () => void }) {
  return (
    <article className="curator-card" onClick={onOpen}>
      <div className={`curator-image tone-${curator.tone}`}>
        <img alt={`${curator.name}, verified curator`} src={curator.image} />
        <span className="verified"><Icon name="check" size={13} /> Verified</span>
        <button className="card-arrow" aria-label={`View ${curator.name}`}><Icon name="arrow" /></button>
      </div>
      <div className="card-body">
        <div className="card-kicker"><span>{curator.role}</span><b>{curator.city}</b></div>
        <h3>{curator.name}</h3>
        <p>{curator.genres}</p>
        <div className="outcome"><Icon name="spark" size={15} /><strong>{curator.outcome}</strong><span>in the last 12 months</span></div>
        <div className="card-stats">
          <div><b>{curator.cred}</b><small>CrateCred</small></div>
          <div><b>{curator.response}</b><small>Response</small></div>
          <div className="price"><b>${curator.price}</b><small>per track</small></div>
        </div>
      </div>
    </article>
  );
}

function Discover({ onCurator }: { onCurator: (curator: typeof curators[number]) => void }) {
  const [genre, setGenre] = useState("For you");
  return (
    <main className="artist-main">
      <section className="artist-hero">
        <div>
          <span className="eyebrow">DISCOVER / 01</span>
          <h1>Right ears.<br /><em>Real outcomes.</em></h1>
        </div>
        <p>Send your best record to verified music professionals who listen, respond and open doors.</p>
      </section>
      <section className="signal-strip">
        <div><Icon name="proof" /><span>Every listen verified</span></div>
        <div><b>18.4K</b><span>Opportunities created</span></div>
        <div><b>4.8/5</b><span>Artist rating</span></div>
      </section>
      <section className="discovery">
        <div className="section-heading">
          <div><span className="eyebrow">MATCHED TO YOUR SOUND</span><h2>Recommended curators</h2></div>
          <button className="filter-button"><Icon name="menu" size={16} /> Filters <b>2</b></button>
        </div>
        <div className="pills">
          {["For you", "R&B", "Radio", "Playlists", "Under $30", "CrateCred 85+"].map((item) => <Pill active={genre === item} key={item} onClick={() => setGenre(item)}>{item}</Pill>)}
        </div>
        <div className="curator-grid">{curators.map((curator) => <CuratorCard curator={curator} key={curator.name} onOpen={() => onCurator(curator)} />)}</div>
      </section>
    </main>
  );
}

function Tracking() {
  const stages = ["Submitted", "Heard", "Rated", "Crated", "Opportunity", "Proof"];
  const [expanded, setExpanded] = useState(0);
  const submissions = [
    { curator: "Maya Okafor", role: "BBC 1Xtra · Radio DJ", stage: 4, status: "RADIO OPPORTUNITY", note: "Maya wants to premiere “Slow Motion” on her Friday night show.", date: "Today, 10:42", image: photos.curator1 },
    { curator: "Jules Bennett", role: "Founder · Open Ear", stage: 3, status: "CRATED", note: "Rated 8.7 — added to Jules’ electronic crate.", date: "18 Jun", image: photos.curator2 },
    { curator: "Dante Rivers", role: "Music Editor · RIFT", stage: 1, status: "HEARD", note: "Your track was listened to in full.", date: "16 Jun", image: photos.curator3 },
  ];
  return (
    <main className="artist-main tracking-main">
      <div className="page-title"><span className="eyebrow">YOUR MUSIC IN MOTION</span><h1>Submission<br /><em>tracker.</em></h1><p>A clear line from first listen to real-world proof.</p></div>
      <div className="tracking-summary"><div><b>08</b><span>Active</span></div><div><b>05</b><span>Crated</span></div><div><b>03</b><span>Opportunities</span></div></div>
      <div className="tracking-list">
        {submissions.map((sub, index) => (
          <article className={`submission-row ${expanded === index ? "expanded" : ""}`} key={sub.curator} onClick={() => setExpanded(index)}>
            <div className="submission-head">
              <img alt="" src={sub.image} /><div><small>{sub.role}</small><h3>{sub.curator}</h3></div>
              <div className="submission-status"><b>{sub.status}</b><small>{sub.date}</small></div><Icon name="chevron" />
            </div>
            <div className="progress-track">{stages.map((stage, stageIndex) => <div className={stageIndex <= sub.stage ? "done" : ""} key={stage}><span>{stageIndex < sub.stage ? <Icon name="check" size={11} /> : stageIndex + 1}</span><small>{stage}</small></div>)}</div>
            {expanded === index && <div className="submission-note"><Icon name="spark" /><p>{sub.note}</p>{index === 0 && <Button variant="orange" icon="arrow">View opportunity</Button>}</div>}
          </article>
        ))}
      </div>
    </main>
  );
}

function Proof() {
  return (
    <main className="artist-main proof-main">
      <section className="proof-hero">
        <div className="proof-intro"><span className="eyebrow">VERIFIED ARTIST RECORD</span><h1>Your work.<br /><em>Receipts included.</em></h1><p>CrateProof turns curator activity into verified music-industry momentum you can share anywhere.</p><Button variant="outline" icon="arrow">Share public proof</Button></div>
        <div className="proof-card">
          <div className="proof-card-head"><div><span>MTC / CRATEPROOF</span><b>KAI NOVA</b></div><Icon name="proof" size={38} /></div>
          <div className="proof-score"><b>82</b><span>PROOF<br />SCORE</span></div>
          <div className="proof-metrics"><div><b>36</b><span>Verified listens</span></div><div><b>08</b><span>Crated</span></div><div><b>04</b><span>Opportunities</span></div></div>
          <small>Verified by Make The Crate · Updated today</small>
        </div>
      </section>
      <section className="evidence">
        <div className="section-heading"><div><span className="eyebrow">PROOF, NOT PROMISES</span><h2>Recent evidence</h2></div></div>
        <div className="evidence-grid">
          <article><span className="evidence-icon"><Icon name="headphones" /></span><small>RADIO PLAY · VERIFIED</small><h3>BBC 1Xtra<br />Friday Nights</h3><p>“Slow Motion” aired in full</p><div><b>21 JUN 2025</b><Icon name="proof" /></div></article>
          <article><span className="evidence-icon"><Icon name="star" /></span><small>EDITORIAL RATING</small><h3>8.7 / 10<br />by Open Ear</h3><p>“An assured, future-facing record.”</p><div><b>18 JUN 2025</b><Icon name="proof" /></div></article>
          <article className="orange-evidence"><span className="evidence-icon"><Icon name="spark" /></span><small>OPPORTUNITY · ACCEPTED</small><h3>RIFT Magazine<br />artist profile</h3><p>Interview scheduled for July issue</p><div><b>15 JUN 2025</b><Icon name="proof" /></div></article>
        </div>
      </section>
    </main>
  );
}

function CuratorProfile({ curator, onClose, onSubmit }: { curator: typeof curators[number]; onClose: () => void; onSubmit: () => void }) {
  return (
    <div className="overlay" onClick={onClose}>
      <aside className="profile-drawer" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><Icon name="close" /></button>
        <div className={`profile-visual tone-${curator.tone}`}><img alt="" src={curator.image} /><span className="profile-number">CRATECRED / {curator.cred}</span></div>
        <div className="profile-content">
          <span className="verified-line"><Icon name="check" size={13} /> Identity + role verified</span>
          <h2>{curator.name}</h2><p className="profile-role">{curator.role}<br />{curator.city}</p>
          <div className="profile-stats"><div><b>{curator.response}</b><span>Response rate</span></div><div><b>3.2 days</b><span>Avg. response</span></div><div><b>1.4M</b><span>Monthly reach</span></div></div>
          <div className="profile-section"><small>LOOKING FOR</small><p>Forward-thinking R&B, Alté and Afro-fusion with a strong point of view. Radio-ready, but never predictable.</p></div>
          <div className="tag-row"><span>Detailed feedback</span><span>Radio play</span><span>Interviews</span></div>
          <div className="outcome-list"><small>RECENT VERIFIED OUTCOMES</small><div><Icon name="proof" /><p><b>31 tracks played on radio</b><span>Last 12 months</span></p></div><div><Icon name="proof" /><p><b>12 artist interviews</b><span>Last 12 months</span></p></div></div>
        </div>
        <div className="sticky-submit"><div><b>${curator.price}</b><span>Guaranteed response</span></div><Button variant="orange" icon="arrow" onClick={onSubmit}>Submit a track</Button></div>
      </aside>
    </div>
  );
}

function SubmitFlow({ curator, onClose }: { curator: typeof curators[number]; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [complete, setComplete] = useState(false);
  if (complete) return (
    <div className="overlay"><section className="submission-modal complete-modal"><span className="success-disc"><Icon name="check" size={32} /></span><span className="eyebrow">SUBMISSION CONFIRMED</span><h2>Your record is<br /><em>in the right hands.</em></h2><p>{curator.name} has 5 days to listen and respond. We’ll track every step.</p><Button variant="orange" icon="arrow" onClick={onClose}>Track submission</Button></section></div>
  );
  return (
    <div className="overlay" onClick={onClose}>
      <section className="submission-modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><Icon name="close" /></button>
        <div className="submit-progress"><span>SUBMIT TO {curator.name.toUpperCase()}</span><b>{step} / 3</b><i><em style={{ width: `${step * 33.333}%` }} /></i></div>
        {step === 1 && <div className="submit-step"><span className="eyebrow">01 / THE RECORD</span><h2>What are you<br /><em>sending?</em></h2><label className="upload-art"><div className="album-art mini-art">KN</div><div><b>Slow Motion</b><span>Kai Nova · Single · 2025</span><small>Change release</small></div><Icon name="chevron" /></label><div className="audio-preview"><button><Icon name="play" /></button><div><b>Slow Motion.wav</b><span><i /></span></div><small>03:24</small></div><div className="form-grid"><label><span>Primary genre</span><input defaultValue="Alternative R&B" /></label><label><span>Similar artists</span><input defaultValue="Kelela, Ojerime, Sampha" /></label></div></div>}
        {step === 2 && <div className="submit-step"><span className="eyebrow">02 / THE CONTEXT</span><h2>Give the music<br /><em>a little context.</em></h2><label><span>Artist bio</span><textarea defaultValue="Kai Nova is a South London artist making warm, leftfield R&B about distance, desire and becoming." /></label><label><span>Private note to {curator.name.split(" ")[0]}</span><textarea defaultValue="I think the late-night energy of this record could fit your Friday show. Thank you for listening." /></label><div className="form-grid"><label><span>Instagram</span><input defaultValue="@kainovamusic" /></label><label><span>Music link</span><input defaultValue="open.spotify.com/kainova" /></label></div></div>}
        {step === 3 && <div className="submit-step"><span className="eyebrow">03 / REVIEW + PAY</span><h2>One step from<br /><em>the right ears.</em></h2><div className="checkout-line"><div className="album-art mini-art">KN</div><div><b>Slow Motion</b><span>to {curator.name}</span></div><strong>${curator.price}.00</strong></div><div className="guarantee"><Icon name="proof" /><p><b>Response guaranteed</b><span>Full listen and response within 5 days, or your credit is returned.</span></p></div><label><span>Payment method</span><div className="payment-field"><b>VISA</b><span>•••• 4242</span><small>Change</small></div></label><div className="total"><span>Submission fee</span><b>${curator.price}.00</b></div></div>}
        <div className="submit-footer">{step > 1 ? <Button variant="ghost" onClick={() => setStep(step - 1)}>Back</Button> : <span />}<Button variant="orange" icon="arrow" onClick={() => step < 3 ? setStep(step + 1) : setComplete(true)}>{step === 3 ? `Pay $${curator.price} + submit` : "Continue"}</Button></div>
      </section>
    </div>
  );
}

const tracks = [
  { artist: "Kai Nova", title: "Slow Motion", genre: "ALT R&B", time: "3:24", ago: "2h", art: "art-one", urgent: true },
  { artist: "Ama Soleil", title: "Say Less", genre: "ALTÉ", time: "2:58", ago: "5h", art: "art-two", urgent: false },
  { artist: "The Dial Tones", title: "Static Bloom", genre: "INDIE", time: "4:11", ago: "1d", art: "art-three", urgent: false },
  { artist: "Miro Vale", title: "After Image", genre: "ELECTRONIC", time: "3:48", ago: "1d", art: "art-four", urgent: false },
];

function CuratorDashboard({ setMode }: { setMode: (m: "artist" | "curator") => void }) {
  const [tab, setTab] = useState("To Listen");
  const [selected, setSelected] = useState<(typeof tracks)[number] | null>(null);
  return (
    <div className="curator-app">
      <aside className="curator-sidebar">
        <Logo inverse />
        <nav><span>WORKSPACE</span><button className="active"><Icon name="headphones" /> Review queue <b>12</b></button><button><Icon name="proof" /> Opportunities <b>4</b></button><button><Icon name="wallet" /> Wallet</button><span>ACCOUNT</span><button onClick={() => setMode("artist")}><Icon name="spark" /> Artist view</button></nav>
        <div className="curator-user"><img alt="" src={photos.curator1} /><div><b>Maya Okafor</b><span>BBC 1Xtra</span></div><Icon name="more" /></div>
      </aside>
      <main className="queue-main">
        <header className="queue-header"><div><span className="eyebrow">MONDAY, 23 JUNE</span><h1>Review queue<span>.</span></h1></div><div className="queue-stats"><div><span>RESPONSE</span><b>98%</b><i><em style={{ width: "98%" }} /></i></div><div><span>CRATECRED</span><b>94</b><i><em style={{ width: "94%" }} /></i></div><div><span>THIS MONTH</span><b>$1,240</b></div></div></header>
        <section className="queue-toolbar"><div className="queue-tabs">{["To Listen", "To Complete", "Urgent", "Done"].map((item) => <button className={tab === item ? "active" : ""} key={item} onClick={() => setTab(item)}>{item}<b>{item === "To Listen" ? 12 : item === "To Complete" ? 3 : item === "Urgent" ? 2 : 48}</b></button>)}</div><button className="search-button"><Icon name="search" /> Search</button></section>
        <section className="queue-list">
          <div className="queue-labels"><span>TRACK / ARTIST</span><span>FIT</span><span>SUBMITTED</span><span>DEADLINE</span><span /></div>
          {tracks.map((track, index) => <article className="track-row" key={track.title} onClick={() => setSelected(track)}><div className={`track-art ${track.art}`}><span>{String(index + 1).padStart(2, "0")}</span><button><Icon name="play" /></button></div><div className="track-title"><b>{track.title}</b><span>{track.artist} · {track.genre} · {track.time}</span></div><div className="fit-score"><b>{95 - index * 6}%</b><span>match</span></div><span className="submitted">{track.ago} ago</span><span className={track.urgent ? "deadline urgent" : "deadline"}>{track.urgent ? "18h left" : `${3 + index}d left`}</span><button className="open-track"><Icon name="arrow" /></button></article>)}
        </section>
        <div className="queue-foot"><span>Showing 4 of 12 submissions</span><Button variant="outline">Load more</Button></div>
      </main>
      {selected && <ReviewModal track={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function ReviewModal({ track, onClose }: { track: typeof tracks[number]; onClose: () => void }) {
  const [playing, setPlaying] = useState(false);
  const [action, setAction] = useState<"feedback" | "crate" | "opportunity">("crate");
  const [done, setDone] = useState(false);
  if (done) return <div className="queue-overlay"><div className="review-success"><span><Icon name="check" size={34} /></span><small>REVIEW COMPLETE</small><h2>{track.title} is<br /><em>{action === "opportunity" ? "an opportunity." : action === "crate" ? "in your crate." : "reviewed."}</em></h2><p>The artist has been notified and your verified action is now part of their CrateProof.</p><Button variant="orange" icon="arrow" onClick={onClose}>Back to queue</Button></div></div>;
  return (
    <div className="queue-overlay" onClick={onClose}>
      <section className="review-modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close light" onClick={onClose}><Icon name="close" /></button>
        <div className="review-left">
          <span className="eyebrow">NOW REVIEWING / 01 OF 12</span>
          <div className={`hero-art ${track.art}`}><span>KN<br /><b>Slow Motion</b></span></div>
          <div className="player">
            <button onClick={() => setPlaying(!playing)}><Icon name={playing ? "pause" : "play"} /></button>
            <div><div><b>{track.title}</b><span>{track.artist}</span></div><i><em className={playing ? "playing" : ""} /></i><small>01:42 <span>/ {track.time}</span></small></div>
          </div>
          <div className="artist-mini"><img alt="" src={photos.artist} /><div><small>ARTIST</small><b>{track.artist}</b><span>South London, UK · @kainovamusic</span></div><button><Icon name="arrow" /></button></div>
        </div>
        <div className="review-right">
          <div className="release-head"><div><span className="eyebrow">SINGLE · RELEASED 06 JUNE 2025</span><h2>{track.title}</h2><p>by {track.artist}</p></div><div className="score-ring"><b>95%</b><span>FIT</span></div></div>
          <div className="release-tags"><span>Alternative R&B</span><span>Electronic soul</span><span>UK</span></div>
          <div className="release-copy"><small>ARTIST NOTE</small><p>“Slow Motion” is about the strange calm after leaving something you thought would last. Made with analog synths, chopped vocals and a lot of late nights.</p></div>
          <div className="release-info"><div><span>SIMILAR TO</span><b>Kelela · Ojerime · Sampha</b></div><div><span>LINKS</span><b>Spotify · Apple Music · Instagram</b></div></div>
          <div className="review-action">
            <small>YOUR DECISION</small>
            <div className="decision-tabs"><button className={action === "feedback" ? "active" : ""} onClick={() => setAction("feedback")}><Icon name="headphones" />Feedback only</button><button className={action === "crate" ? "active" : ""} onClick={() => setAction("crate")}><Icon name="disc" />Crate it</button><button className={action === "opportunity" ? "active" : ""} onClick={() => setAction("opportunity")}><Icon name="spark" />Offer opportunity</button></div>
            {action === "opportunity" ? <div className="opportunity-options">{["Radio play", "Interview", "Playlist add", "Social feature", "Live event", "Request more music"].map((option, index) => <Pill active={index === 0} key={option}>{option}</Pill>)}</div> : <textarea placeholder={action === "crate" ? "Tell the artist why this record made your crate…" : "Leave concise, useful feedback…"} />}
            <div className="rating-row"><span>TRACK RATING</span><div>{[1, 2, 3, 4, 5].map((star) => <Icon key={star} name="star" />)}</div><b>8.7 / 10</b></div>
            <Button variant="orange" icon="arrow" onClick={() => setDone(true)}>{action === "opportunity" ? "Send opportunity" : action === "crate" ? "Add to crate + complete" : "Send feedback"}</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState<"artist" | "curator">("artist");
  const [page, setPage] = useState("discover");
  const [curator, setCurator] = useState<(typeof curators)[number] | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (mode === "curator") return <CuratorDashboard setMode={setMode} />;
  return (
    <div className="artist-app">
      <ArtistHeader page={page} setMode={setMode} setPage={setPage} />
      {page === "discover" && <Discover onCurator={setCurator} />}
      {page === "tracking" && <Tracking />}
      {page === "proof" && <Proof />}
      <MobileNav page={page} setPage={setPage} />
      {curator && !submitting && <CuratorProfile curator={curator} onClose={() => setCurator(null)} onSubmit={() => setSubmitting(true)} />}
      {curator && submitting && <SubmitFlow curator={curator} onClose={() => { setSubmitting(false); setCurator(null); setPage("tracking"); }} />}
    </div>
  );
}

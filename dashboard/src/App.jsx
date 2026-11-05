// ---------------------------------------------------------------
// FlowPad landing page.
// Contributors: most content lives in the 3 lists below.
// To add a feature or roadmap item, just add a line to the list.
// status can be: "done" | "in-progress" | "planned"
// ---------------------------------------------------------------

// TODO: replace with your real GitHub repo URL
const GITHUB_URL = "https://github.com/your-username/flowpad";

const features = [
  { title: "Floating notes panel", text: "Open a draggable notes panel on any webpage.", status: "in-progress" },
  { title: "Keyboard shortcut", text: "Show or hide FlowPad without touching the mouse.", status: "planned" },
  { title: "Rich-text and Markdown", text: "Write notes the way you prefer.", status: "planned" },
  { title: "Autosave", text: "Notes are saved locally as you type.", status: "planned" },
  { title: "Screenshots", text: "Attach a screenshot of the page to your note.", status: "planned" },
  { title: "YouTube timestamps", text: "Link a note to the exact moment in a video.", status: "planned" },
  { title: "Web dashboard", text: "Search, organize and export all your notes.", status: "planned" },
  { title: "Cloud sync", text: "Optional account-based sync across devices.", status: "planned" },
];

const roadmap = [
  { title: "Landing page on Vercel", status: "done" },
  { title: "Set up Chrome extension (Manifest V3)", status: "in-progress" },
  { title: "Build floating notes interface", status: "planned" },
  { title: "Add editor and local saving", status: "planned" },
  { title: "Screenshots and YouTube timestamps", status: "planned" },
  { title: "Web dashboard", status: "planned" },
  { title: "Cloud synchronization", status: "planned" },
  // TODO: add more steps here
];

const ways = [
  { title: "Good first issues", text: "Small tasks such as fixing text, styling or docs." },
  { title: "Build a feature", text: "Pick anything marked Planned above and open a pull request." },
  { title: "Report bugs and ideas", text: "Open an issue on GitHub. Every idea helps." },
];

const statusStyle = {
  done: "bg-green-100 text-green-800",
  "in-progress": "bg-amber-100 text-amber-800",
  planned: "bg-slate-100 text-slate-600",
};

const statusLabel = {
  done: "Done",
  "in-progress": "In progress",
  planned: "Planned",
};

function Badge({ status }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle[status]}`}>
      {statusLabel[status]}
    </span>
  );
}

// A static picture of what the floating panel will look like.
// TODO: replace with a real screenshot or live demo later.
function PanelPreview() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white shadow-lg">
      <div className="flex items-center justify-between rounded-t-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
        <span>FlowPad</span>
        <span className="text-indigo-200">drag me</span>
      </div>
      <div className="space-y-2 p-4 text-sm text-slate-700">
        <p className="font-semibold">React Hooks – Lecture 4</p>
        <p>useEffect runs after every render unless you pass a dependency array.</p>
        <p className="text-xs text-indigo-600">youtube.com · 12:45</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold text-indigo-600">FlowPad</span>
          <div className="flex gap-6 text-sm">
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#roadmap" className="hover:text-indigo-600">Roadmap</a>
            <a href="#contribute" className="hover:text-indigo-600">Contribute</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="grid items-center gap-10 py-16 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Take notes without leaving the page.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              FlowPad is an open-source floating notepad for students, developers and online
              learners. It opens over any webpage with a keyboard shortcut.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={GITHUB_URL}
                className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white hover:bg-indigo-700"
              >
                View on GitHub
              </a>
              <a
                href="#contribute"
                className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-medium hover:bg-slate-100"
              >
                Start contributing
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <PanelPreview />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-12">
          <h2 className="text-2xl font-bold">Features</h2>
          <p className="mt-1 text-slate-600">What FlowPad will do, and where we are today.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold">{f.title}</h3>
                  <Badge status={f.status} />
                </div>
                <p className="mt-2 text-sm text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-12">
          <h2 className="text-2xl font-bold">Roadmap</h2>
          <ol className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
            {roadmap.map((item, i) => (
              <li key={item.title} className="flex items-center justify-between px-5 py-3">
                <span>
                  {i + 1}. {item.title}
                </span>
                <Badge status={item.status} />
              </li>
            ))}
          </ol>
        </section>

        {/* Contribute */}
        <section id="contribute" className="py-12">
          <h2 className="text-2xl font-bold">How to contribute</h2>
          <p className="mt-1 text-slate-600">
            All skill levels are welcome. Read CONTRIBUTING.md in the repository to get started.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {ways.map((w) => (
              <div key={w.title} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{w.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        FlowPad · MIT License · Project admin: Ishta P Jain
      </footer>
    </div>
  );
}
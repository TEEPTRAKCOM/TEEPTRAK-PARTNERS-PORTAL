'use client';
import { useState, useEffect, createContext, useContext } from 'react';
import { LayoutDashboard, Target, GraduationCap, BookOpen, FolderOpen, Trophy, FileSignature, Calendar, DollarSign, Menu, X, Bell, Search, ChevronDown, ChevronRight, CheckCircle, Circle, Clock, Star, TrendingUp, Play, Download, Building, LogOut, ExternalLink, Key, Lock, Copy, Check, Eye, MessageCircle, Award, Users } from 'lucide-react';

const translations = {
  en: { welcome: 'Welcome back', dashboard: 'Dashboard', deals: 'Deal Registration', training: 'Training', academy: 'Academy Access', resources: 'Resources', quiz: 'Certification', agreement: 'Agreement', kickoff: 'Schedule Call', commissions: 'Commissions', search: 'Search...', logout: 'Sign Out', score: 'Partner Score', activeDeals: 'Active Deals', pipeline: 'Pipeline Value', commission: 'Earned Commission', progress: 'Onboarding Progress', quickActions: 'Quick Actions', yourPipeline: 'Your Pipeline', protection: 'days protection', chat: 'Chat with Teepy' },
  fr: { welcome: 'Bienvenue', dashboard: 'Tableau de Bord', deals: 'Enregistrement Deals', training: 'Formation', academy: 'Accès Académie', resources: 'Ressources', quiz: 'Certification', agreement: 'Contrat', kickoff: 'Planifier Appel', commissions: 'Commissions', search: 'Rechercher...', logout: 'Déconnexion', score: 'Score Partenaire', activeDeals: 'Deals Actifs', pipeline: 'Pipeline', commission: 'Commission', progress: 'Progression', quickActions: 'Actions Rapides', yourPipeline: 'Votre Pipeline', protection: 'jours protection', chat: 'Discuter avec Teepy' },
  zh: { welcome: '欢迎回来', dashboard: '仪表板', deals: '商机注册', training: '培训', academy: '学院入口', resources: '资源', quiz: '认证', agreement: '协议', kickoff: '预约会议', commissions: '佣金', search: '搜索...', logout: '退出', score: '合作伙伴评分', activeDeals: '活跃商机', pipeline: '管道价值', commission: '已获佣金', progress: '入职进度', quickActions: '快速操作', yourPipeline: '您的管道', protection: '天保护期', chat: '与Teepy聊天' }
};

const AppContext = createContext();
const useApp = () => useContext(AppContext);

const partner = { name: 'Jean Dupont', company: 'Actemium Bordeaux', tier: 'gold', score: 78, deals: 4, pipeline: 185000, commission: 24500, onboarding: [true, true, true, true, false, false, false], academyUser: 'jean.dupont@partner.teeptrak.net', academyPass: 'TT-Partner-2025-JD' };
const deals = [
  { company: 'Stellantis Rennes', value: 45000, status: 'Negotiation', protection: 67, contact: 'Marie Laurent' },
  { company: 'Safran Aerospace', value: 72000, status: 'Proposal', protection: 45, contact: 'Pierre Martin' },
  { company: 'Danone Production', value: 38000, status: 'Qualified', protection: 82, contact: 'Sophie Dubois' },
  { company: "L'Oréal Factory", value: 30000, status: 'Registered', protection: 90, contact: 'Lucas Bernard' }
];

export default function App() {
  const [lang, setLang] = useState('en');
  const [page, setPage] = useState('dashboard');
  const [sidebar, setSidebar] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const t = translations[lang] || translations.en;

  useEffect(() => {
    const browserLang = navigator.language?.split('-')[0];
    if (translations[browserLang]) setLang(browserLang);
  }, []);

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: t.dashboard },
    { id: 'deals', icon: Target, label: t.deals },
    { id: 'training', icon: GraduationCap, label: t.training },
    { id: 'academy', icon: BookOpen, label: t.academy, badge: 'NEW' },
    { id: 'resources', icon: FolderOpen, label: t.resources },
    { id: 'quiz', icon: Trophy, label: t.quiz },
    { id: 'agreement', icon: FileSignature, label: t.agreement },
    { id: 'kickoff', icon: Calendar, label: t.kickoff },
    { id: 'commissions', icon: DollarSign, label: t.commissions }
  ];

  return (
    <AppContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen bg-slate-50 flex">
        {sidebar && <div className="lg:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setSidebar(false)} />}
        <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col transition-transform ${sidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">T</span></div>
              <span className="text-xl font-bold"><span className="text-slate-800">teep</span><span className="text-red-600">trak</span></span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Partner Portal</p>
          </div>
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map(item => (
              <button key={item.id} onClick={() => { setPage(item.id); setSidebar(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${page === item.id ? 'bg-red-50 text-red-600 font-medium' : 'text-slate-600 hover:bg-slate-50'}`}>
                <item.icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-bold rounded-full">{item.badge}</span>}
              </button>
            ))}
          </nav>
          <div className="p-4 border-t border-slate-100">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold">JD</div>
              <div className="flex-1 min-w-0"><p className="text-sm font-semibold text-slate-800 truncate">{partner.name}</p><p className="text-xs text-slate-500 truncate">{partner.company}</p></div>
            </div>
          </div>
        </aside>

        <div className="flex-1 flex flex-col min-h-screen">
          <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-100 px-4 lg:px-8 py-4">
            <div className="flex items-center gap-4">
              <button className="lg:hidden p-2 hover:bg-slate-100 rounded-xl" onClick={() => setSidebar(true)}><Menu className="w-5 h-5 text-slate-600" /></button>
              <div className="flex-1 max-w-md relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" /><input placeholder={t.search} className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-red-500" /></div>
              <select value={lang} onChange={e => setLang(e.target.value)} className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"><option value="en">🇬🇧 EN</option><option value="fr">🇫🇷 FR</option><option value="zh">🇨🇳 ZH</option></select>
              <button className="relative p-2.5 hover:bg-slate-100 rounded-xl"><Bell className="w-5 h-5 text-slate-600" /><span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full" /></button>
            </div>
          </header>

          <main className="flex-1 p-4 lg:p-8">
            {page === 'dashboard' && <Dashboard t={t} setPage={setPage} />}
            {page === 'academy' && <Academy t={t} />}
            {page === 'deals' && <Deals t={t} />}
            {page === 'training' && <Training />}
            {page === 'resources' && <Resources />}
            {page === 'commissions' && <Commissions />}
            {page === 'quiz' && <Quiz />}
            {page === 'agreement' && <Agreement />}
            {page === 'kickoff' && <Kickoff />}
          </main>
        </div>

        <button onClick={() => setChatOpen(true)} className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition">
          <MessageCircle className="w-5 h-5" /><span className="hidden sm:inline font-medium">{t.chat}</span>
        </button>

        {chatOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg h-96 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between p-4 bg-red-600 text-white">
                <div className="flex items-center gap-3"><MessageCircle className="w-6 h-6" /><span className="font-semibold">Teepy Assistant</span></div>
                <button onClick={() => setChatOpen(false)} className="p-1 hover:bg-white/20 rounded"><X className="w-5 h-5" /></button>
              </div>
              <div className="flex-1 p-4 flex items-center justify-center text-slate-500">
                <p>Teepy chatbot iframe goes here</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}

function Dashboard({ t, setPage }) {
  const steps = ['Application', 'Welcome Video', 'Product Training', 'Certification', 'Sign Agreement', 'Kickoff Call', 'First Deal'];
  const progress = Math.round((partner.onboarding.filter(Boolean).length / steps.length) * 100);
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-slate-800">{t.welcome}, {partner.name.split(' ')[0]}! 👋</h1></div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">🥇 Gold Partner</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Star} label={t.score} value={`${partner.score} pts`} trend="+12%" color="red" />
        <StatCard icon={Target} label={t.activeDeals} value={partner.deals} trend="+25%" color="blue" />
        <StatCard icon={TrendingUp} label={t.pipeline} value={`€${(partner.pipeline/1000)}K`} trend="+18%" color="green" />
        <StatCard icon={DollarSign} label={t.commission} value={`€${(partner.commission/1000).toFixed(1)}K`} trend="+32%" color="purple" />
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6"><h2 className="text-lg font-semibold text-slate-800">{t.progress}</h2><div className="text-2xl font-bold text-red-600">{progress}%</div></div>
          <div className="space-y-3">{steps.map((step, i) => (<div key={step} className={`flex items-center gap-4 p-3 rounded-xl ${partner.onboarding[i] ? 'bg-green-50' : i === partner.onboarding.filter(Boolean).length ? 'bg-red-50 border border-red-200' : 'bg-slate-50 opacity-60'}`}>{partner.onboarding[i] ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Circle className="w-5 h-5 text-slate-300" />}<span className="flex-1 text-sm">{step}</span></div>))}</div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">{t.quickActions}</h2>
          <div className="space-y-3">
            {[{ icon: Target, label: 'Register Deal', page: 'deals' }, { icon: BookOpen, label: 'Access Academy', page: 'academy' }, { icon: GraduationCap, label: 'Continue Training', page: 'training' }, { icon: FolderOpen, label: 'Download Resources', page: 'resources' }].map(a => (
              <button key={a.label} onClick={() => setPage(a.page)} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition text-left"><div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center"><a.icon className="w-5 h-5 text-red-600" /></div><span className="text-sm font-medium text-slate-700">{a.label}</span><ChevronRight className="w-4 h-4 text-slate-400 ml-auto" /></button>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">{t.yourPipeline}</h2>
        <div className="overflow-x-auto">
          <table className="w-full"><thead><tr className="text-left text-xs text-slate-500 border-b border-slate-100"><th className="pb-3">Company</th><th className="pb-3">Value</th><th className="pb-3">Status</th><th className="pb-3">Protection</th></tr></thead>
            <tbody>{deals.map((d, i) => (<tr key={i} className="border-b border-slate-50"><td className="py-3"><p className="font-medium text-slate-800">{d.company}</p><p className="text-xs text-slate-500">{d.contact}</p></td><td className="py-3 font-semibold">€{d.value.toLocaleString()}</td><td className="py-3"><span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100">{d.status}</span></td><td className="py-3 text-sm text-slate-600">{d.protection} {t.protection}</td></tr>))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, trend, color }) {
  const colors = { red: 'bg-red-50 text-red-600', blue: 'bg-blue-50 text-blue-600', green: 'bg-green-50 text-green-600', purple: 'bg-purple-50 text-purple-600' };
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="flex items-start justify-between"><div className={`w-10 h-10 rounded-xl ${colors[color]} flex items-center justify-center`}><Icon className="w-5 h-5" /></div><span className="text-xs font-medium px-2 py-1 rounded-full bg-green-50 text-green-600">{trend}</span></div>
      <div className="mt-4"><p className="text-2xl font-bold text-slate-800">{value}</p><p className="text-sm text-slate-500 mt-1">{label}</p></div>
    </div>
  );
}

function Academy({ t }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState('');
  const copy = (text, field) => { navigator.clipboard.writeText(text); setCopied(field); setTimeout(() => setCopied(''), 2000); };
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div><h1 className="text-2xl font-bold text-slate-800">{t.academy}</h1><p className="text-slate-500 mt-1">Access comprehensive training materials and certifications</p></div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6"><div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center"><Key className="w-6 h-6 text-red-600" /></div><div><h2 className="font-semibold text-slate-800">Your Credentials</h2><p className="text-sm text-slate-500">academy.teeptrak.net</p></div></div>
          <div className="space-y-4">
            <div><label className="block text-sm font-medium text-slate-600 mb-2">Username</label><div className="flex gap-2"><div className="flex-1 p-3 bg-slate-50 rounded-xl font-mono text-sm">{partner.academyUser}</div><button onClick={() => copy(partner.academyUser, 'user')} className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl">{copied === 'user' ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-slate-500" />}</button></div></div>
            <div><label className="block text-sm font-medium text-slate-600 mb-2">Password</label><div className="flex gap-2"><div className="flex-1 p-3 bg-slate-50 rounded-xl font-mono text-sm flex items-center justify-between"><span>{show ? partner.academyPass : '••••••••••••'}</span><button onClick={() => setShow(!show)}><Eye className="w-4 h-4 text-slate-400" /></button></div><button onClick={() => copy(partner.academyPass, 'pass')} className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl">{copied === 'pass' ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-slate-500" />}</button></div></div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3"><Lock className="w-5 h-5 text-amber-600" /><p className="text-sm text-amber-700">Keep your credentials secure. Do not share them with others.</p></div>
          <a href="https://academy.teeptrak.net" target="_blank" className="mt-6 w-full py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2"><ExternalLink className="w-5 h-5" />Access Academy Portal</a>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="font-semibold text-slate-800 mb-6">Academy Features</h2>
          <div className="space-y-4">{[{ icon: BookOpen, label: 'Product Deep Dives', desc: '15+ in-depth courses' }, { icon: Target, label: 'Sales Methodology', desc: 'Sales certification path' }, { icon: Award, label: 'Technical Certifications', desc: 'Expert-level badges' }, { icon: Users, label: 'Live Webinars', desc: 'Weekly sessions' }].map((f, i) => (<div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl"><div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm"><f.icon className="w-6 h-6 text-red-600" /></div><div><p className="font-medium text-slate-800">{f.label}</p><p className="text-sm text-slate-500">{f.desc}</p></div></div>))}</div>
        </div>
      </div>
    </div>
  );
}

function Deals({ t }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between"><div><h1 className="text-2xl font-bold text-slate-800">{t.deals}</h1></div><button className="px-5 py-2.5 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 flex items-center gap-2"><Target className="w-5 h-5" />Register New Deal</button></div>
      <div className="space-y-4">{deals.map((d, i) => (<div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center justify-between"><div className="flex items-center gap-4"><div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center"><Building className="w-6 h-6 text-slate-500" /></div><div><p className="font-semibold text-slate-800">{d.company}</p><p className="text-sm text-slate-500">{d.contact}</p></div></div><div className="text-right"><p className="text-xl font-bold text-slate-800">€{d.value.toLocaleString()}</p><p className="text-sm text-slate-500">{d.protection} {t.protection}</p></div></div>))}</div>
    </div>
  );
}

function Training() {
  const modules = [{ title: 'Welcome to TeepTrak', duration: 5, status: 'completed' }, { title: 'Product Deep Dive', duration: 25, status: 'completed' }, { title: 'OEE Fundamentals', duration: 20, status: 'completed' }, { title: 'Sales Methodology', duration: 30, status: 'in_progress', progress: 65 }, { title: 'ROI Calculator Training', duration: 15, status: 'not_started' }];
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-slate-800">Training Academy</h1>
      <div className="space-y-4">{modules.map((m, i) => (<div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-5"><div className={`w-14 h-14 rounded-xl flex items-center justify-center ${m.status === 'completed' ? 'bg-green-100 text-green-600' : m.status === 'in_progress' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-400'}`}>{m.status === 'completed' ? <CheckCircle className="w-7 h-7" /> : <Play className="w-7 h-7" />}</div><div className="flex-1"><p className="font-semibold text-slate-800">{m.title}</p><p className="text-sm text-slate-500">{m.duration} min {m.progress && `• ${m.progress}%`}</p></div><button className={`px-5 py-2.5 rounded-xl font-medium ${m.status === 'completed' ? 'bg-slate-100 text-slate-600' : 'bg-red-600 text-white'}`}>{m.status === 'completed' ? 'Review' : m.status === 'in_progress' ? 'Continue' : 'Start'}</button></div>))}</div>
    </div>
  );
}

function Resources() {
  const resources = [{ title: 'Sales Presentation 2025', type: 'PPTX', size: '5.2 MB', icon: '📊' }, { title: 'Competitive Battlecards', type: 'PDF', size: '1.8 MB', icon: '⚔️' }, { title: 'ROI Calculator', type: 'XLSX', size: '890 KB', icon: '📈' }, { title: 'Product Brochure', type: 'PDF', size: '4.5 MB', icon: '📰' }];
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-slate-800">Resource Center</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{resources.map((r, i) => (<div key={i} className="bg-white rounded-2xl border border-slate-200 p-5"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl">{r.icon}</div><div><p className="font-semibold text-slate-800">{r.title}</p><p className="text-sm text-slate-500">{r.type} • {r.size}</p></div></div><button className="w-full mt-4 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl font-medium text-slate-700 flex items-center justify-center gap-2"><Download className="w-4 h-4" />Download</button></div>))}</div>
    </div>
  );
}

function Commissions() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-slate-800">Commission Center</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-2xl p-6 text-white"><DollarSign className="w-8 h-8 mb-4 opacity-80" /><p className="text-3xl font-bold">€4,000</p><p className="text-sm opacity-80">Available Balance</p><button className="mt-4 w-full py-2.5 bg-white/20 hover:bg-white/30 rounded-xl font-medium">Request Withdrawal</button></div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6"><Clock className="w-8 h-8 text-amber-500 mb-4" /><p className="text-3xl font-bold text-slate-800">€4,000</p><p className="text-sm text-slate-500">Pending</p></div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6"><CheckCircle className="w-8 h-8 text-green-500 mb-4" /><p className="text-3xl font-bold text-slate-800">€20,500</p><p className="text-sm text-slate-500">Total Paid</p></div>
      </div>
    </div>
  );
}

function Quiz() { return <div className="max-w-2xl mx-auto text-center py-12"><div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6"><Trophy className="w-10 h-10 text-red-600" /></div><h1 className="text-2xl font-bold text-slate-800 mb-2">Certification Quiz</h1><p className="text-slate-500 mb-8">Validate your expertise and earn badges</p><button className="px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700">Start Quiz</button></div>; }
function Agreement() { return <div className="max-w-2xl mx-auto text-center py-12"><div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6"><FileSignature className="w-10 h-10 text-red-600" /></div><h1 className="text-2xl font-bold text-slate-800 mb-2">Partner Agreement</h1><p className="text-slate-500 mb-8">Review and sign your partnership terms</p><button className="px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700">Sign Agreement</button></div>; }
function Kickoff() { return <div className="max-w-2xl mx-auto text-center py-12"><div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6"><Calendar className="w-10 h-10 text-red-600" /></div><h1 className="text-2xl font-bold text-slate-800 mb-2">Schedule Meeting</h1><p className="text-slate-500 mb-8">Book time with your Partnership Manager</p><button className="px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700">Book Meeting</button></div>; }

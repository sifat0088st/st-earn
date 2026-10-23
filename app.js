const translations = {
  en: {
    tagline:"Tasks • Rewards • Bigger Future", welcome:"WELCOME TO ST EARN", headline:"Complete tasks.<br>Collect rewards.", subhead:"Your task and reward dashboard starts here.",
    balance:"Demo points balance", demo:"Preview only — not real money", tasks:"Available tasks", sample:"SAMPLES",
    task1:"Visit a website", task1desc:"Open the demo task details", task2:"Join a community", task2desc:"Example task — verification not connected",
    task3:"Daily check-in", task3desc:"Reward flow will be added later", view:"View", next:"Next steps", secure:"Secure setup needed",
    note:"This is a visual demo. Real tasks, referrals, admin controls and withdrawals must be connected to a verified server and database before launch.",
    home:"Home", navtasks:"Tasks", referrals:"Referrals", profile:"Profile"
  },
  bn: {
    tagline:"টাস্ক • রিওয়ার্ড • সুন্দর ভবিষ্যৎ", welcome:"ST EARN-এ স্বাগতম", headline:"টাস্ক সম্পন্ন করুন।<br>রিওয়ার্ড সংগ্রহ করুন।", subhead:"আপনার টাস্ক ও রিওয়ার্ড ড্যাশবোর্ড এখান থেকে শুরু।",
    balance:"ডেমো পয়েন্ট ব্যালেন্স", demo:"শুধু প্রিভিউ — আসল টাকা নয়", tasks:"উপলভ্য টাস্ক", sample:"নমুনা",
    task1:"ওয়েবসাইট ভিজিট করুন", task1desc:"ডেমো টাস্কের বিবরণ দেখুন", task2:"কমিউনিটিতে যোগ দিন", task2desc:"নমুনা টাস্ক — যাচাই ব্যবস্থা যুক্ত নয়",
    task3:"দৈনিক চেক-ইন", task3desc:"রিওয়ার্ড ব্যবস্থা পরে যুক্ত হবে", view:"দেখুন", next:"পরবর্তী ধাপ", secure:"নিরাপদ সেটআপ প্রয়োজন",
    note:"এটি একটি ডিজাইন ডেমো। চালুর আগে আসল টাস্ক, রেফারেল, অ্যাডমিন নিয়ন্ত্রণ ও উত্তোলন যাচাইকৃত সার্ভার এবং ডেটাবেসের সঙ্গে যুক্ত করতে হবে।",
    home:"হোম", navtasks:"টাস্ক", referrals:"রেফারেল", profile:"প্রোফাইল"
  }
};
let lang = "en";
const tg = window.Telegram?.WebApp;
if (tg) { tg.ready(); tg.expand(); }
document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "en" ? "bn" : "en";
  document.documentElement.lang = lang;
  document.getElementById("langBtn").textContent = lang === "en" ? "বাংলা" : "English";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[lang][el.dataset.i18n];
    if (value) el.innerHTML = value;
  });
});
document.querySelectorAll("[data-task]").forEach(btn => btn.addEventListener("click", () => {
  const message = lang === "bn"
    ? "এটি ST Earn-এর ডেমো টাস্ক। এখনো কোনো রিওয়ার্ড বা পেমেন্ট চালু নেই।"
    : "This is a demo task in ST Earn. Rewards and payments are not enabled yet.";
  if (tg?.showAlert) tg.showAlert(message); else alert(message);
}));

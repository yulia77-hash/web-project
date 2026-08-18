(() => {
  const root = document.documentElement;
  const main = document.querySelector("main.concept");
  if (!main) return;

  const legacy = { cinematic: "film", kinetic: "studio", premium: "journal", original: "film" };
  const versions = [
    { id: "film", label: "Film", title: "Cinematic stories" },
    { id: "studio", label: "Studio", title: "Commercial system" },
    { id: "journal", label: "Journal", title: "Quiet editorial" },
  ];
  const storageKey = "ap-site-version-v3";
  const heroImage = main.querySelector(".c-hero-image img")?.src || "";
  const workImages = [...main.querySelectorAll(".c-work-image img")].map((item) => item.src);
  const images = [heroImage, ...workImages].filter(Boolean);
  const image = (index) => images[index % images.length] || "";
  const heroAssets = { film: "hero-film.jpg", studio: "hero-studio.jpg", journal: "hero-journal.jpg" };

  const chatTrigger = main.querySelector(".chat-trigger");
  const cookieBanner = main.querySelector(".cookie-banner");
  if (chatTrigger) document.body.append(chatTrigger);
  if (cookieBanner) document.body.append(cookieBanner);

  const legalLinks = `<a href="privacy.html">Политика конфиденциальности</a><a href="consent.html">Согласие на обработку ПД</a><a href="cookies.html">Политика cookies</a><a href="offer.html">Условия оказания услуг</a>`;

  const filmTemplate = () => `
    <header class="film-nav"><a class="film-logo" href="#film-top">ALISA PAVLOVA</a><nav><a href="#film-stories">Истории</a><a href="#film-method">Режиссура</a><a href="#film-contact">Контакт</a></nav><a class="film-nav-cta" href="#film-contact">Предложить историю ↗</a></header>
    <section class="film-hero" id="film-top"><img src="${heroAssets.film}" alt="Кинематографичная fashion-съёмка Алисы Павловой"><div class="film-grain"></div><div class="film-hero-copy ap-reveal"><span>Fashion campaigns · Moscow / Europe</span><h1>Кадры, которые<br>остаются <i>после</i><br>кампании.</h1><p>Снимаю fashion-истории с драматургией: от первого референса до финальной последовательности кадров.</p><div class="film-actions"><a href="#film-stories">Смотреть истории</a><a href="#film-contact">Обсудить campaign</a></div></div><span class="film-counter">SCENE 01 / 04</span></section>
    <section class="film-intro ap-reveal"><span>ALISA / DIRECTOR’S NOTE</span><blockquote>«Мне важно не просто показать коллекцию, а создать ощущение мира, в котором она существует».</blockquote><p>Campaign · Editorial · Beauty film stills<br>4–5 лет в коммерческой fashion-фотографии</p></section>
    <section class="film-stories" id="film-stories"><div class="film-section-head ap-reveal"><span>01 / Selected stories</span><h2>История строится<br>в последовательности.</h2><div class="film-arrows"><button data-film-move="prev" aria-label="Предыдущая история">←</button><button data-film-move="next" aria-label="Следующая история">→</button></div></div><div class="film-track">
      ${[[1,"NOCTURNE / Campaign","Ночная кампания о движении ткани и внутреннем напряжении."],[2,"CHROME SKIN / Beauty","Свет как материал: холодный блеск, кожа и точная графика."],[3,"OBJECTS OF DESIRE / Jewelry","Украшения становятся героями короткой визуальной драмы."],[4,"AFTERIMAGE / Editorial","Редакционная серия о памяти цвета и жеста."]].map(([img,title,text],index)=>`<article class="film-story ap-reveal"><button data-story="${index}" aria-label="Открыть историю ${title}"><img src="${image(img)}" alt="${title}"><span>0${index+1}</span><div><h3>${title}</h3><p>${text}</p><b>Открыть историю ↗</b></div></button></article>`).join("")}
    </div></section>
    <section class="film-method" id="film-method"><div class="film-section-head ap-reveal"><span>02 / Direction</span><h2>Съёмка как<br>короткий метр.</h2></div><div class="film-scenes"><article class="ap-reveal"><span>PRE-PRODUCTION</span><h3>Собираю драматургию</h3><p>Сценарная логика, кастинг, локация, свет и ритм кадров до съёмочного дня.</p></article><article class="ap-reveal"><span>ON SET</span><h3>Режиссирую движение</h3><p>Работаю с моделью и командой так, чтобы постановка оставалась живой.</p></article><article class="ap-reveal"><span>POST</span><h3>Монтирую серию</h3><p>Отбор, цвет и последовательность превращают материал в цельную историю бренда.</p></article></div></section>
    <section class="film-offer ap-reveal"><div><span>CAMPAIGN DIRECTION</span><h2>Одна идея.<br>Один визуальный мир.</h2></div><div><p>Концепция, мудборд, команда, съёмочный день и 12 финальных кадров с high-end ретушью.</p><strong>от 180 000 ₽</strong><a href="#film-contact">Запросить treatment ↗</a></div></section>
    <section class="film-contact" id="film-contact"><div class="ap-reveal"><span>03 / New story</span><h2>Какую историю<br>мы снимаем?</h2><p>Пришлите задачу или презентацию бренда. В ответ — вопросы по существу и следующий шаг.</p></div><form class="ap-project-form ap-reveal"><label>Имя / бренд<input required name="name"></label><label>Контакт<input required name="contact"></label><label>О чём кампания<textarea required rows="4" name="brief"></textarea></label><label class="ap-consent"><input required type="checkbox"><span>Даю <a href="consent.html">согласие на обработку данных</a></span></label><button>Получить режиссёрский отклик ↗</button></form></section>
    <footer class="film-footer"><strong>ALISA PAVLOVA</strong><div><a href="mailto:hello@alisapavlova.photo">hello@alisapavlova.photo</a><a href="tel:+79990002626">+7 999 000-26-26</a></div><div>${legalLinks}</div><small>Учебный демонстрационный проект · Москва · 2026</small></footer>`;

  const studioTemplate = () => `
    <header class="studio-nav"><a href="#studio-top" class="studio-logo">AP / STUDIO</a><nav><a href="#studio-services">Задачи</a><a href="#studio-calc">Калькулятор</a><a href="#studio-process">Процесс</a><a href="#studio-order">Заказать</a></nav><a class="studio-nav-cta" href="#studio-calc">Рассчитать съёмку</a></header>
    <section class="studio-hero" id="studio-top"><div class="studio-hero-copy ap-reveal"><span>COMMERCIAL FASHION PRODUCTION</span><h1>Контент для брендов,<br>который работает<br>в каталоге и рекламе.</h1><p>Предсказуемый продакшн, единая визуальная система и готовые форматы для e-commerce, social и paid media.</p><div><a href="#studio-calc">Рассчитать бюджет</a><a href="#studio-services">Выбрать задачу</a></div></div><figure><img src="${heroAssets.studio}" alt="Коммерческая fashion-съёмка"><figcaption><b>48h</b><span>на предварительную смету</span><b>3 формата</b><span>web · social · ads</span></figcaption></figure></section>
    <section class="studio-proof"><span>CATALOG</span><span>CAMPAIGN</span><span>BEAUTY</span><span>JEWELRY</span><strong>Москва · Европа · Worldwide</strong></section>
    <section class="studio-services" id="studio-services"><header class="studio-section-head ap-reveal"><span>01 / Business tasks</span><h2>Выберите задачу.<br>Получите рабочий формат.</h2></header><div class="studio-filter" role="group" aria-label="Фильтр услуг"><button data-service="all" aria-pressed="true">Все</button><button data-service="catalog">E-commerce</button><button data-service="campaign">Campaign</button><button data-service="launch">Launch</button></div><div class="studio-service-grid"><article data-service-card="catalog" class="ap-reveal"><span>01</span><h3>Обновить каталог</h3><p>Потоковая съёмка без визуального шума: карточки товара, лукбук, маркетплейсы.</p><b>от 95 000 ₽</b><a href="#studio-calc">Собрать расчёт →</a></article><article data-service-card="campaign" class="ap-reveal"><span>02</span><h3>Запустить кампанию</h3><p>Ключевой визуал, серия адаптаций и материалы для рекламных размещений.</p><b>от 180 000 ₽</b><a href="#studio-calc">Собрать расчёт →</a></article><article data-service-card="launch" class="ap-reveal"><span>03</span><h3>Вывести продукт</h3><p>Beauty или jewelry-серия с макро-точностью, high-end ретушью и digital-кропами.</p><b>от 140 000 ₽</b><a href="#studio-calc">Собрать расчёт →</a></article></div></section>
    <section class="studio-calc" id="studio-calc"><header class="studio-section-head ap-reveal"><span>02 / Estimate</span><h2>Соберите съёмочный день.</h2><p>Расчёт учебный и показывает логику сметы. Финальная стоимость фиксируется после брифа.</p></header><div class="studio-calc-grid"><form id="studio-calculator"><label>Направление<select name="direction"><option value="catalog">Каталог</option><option value="campaign">Campaign</option><option value="beauty">Beauty</option><option value="jewelry">Jewelry</option></select></label><label>Часы<input name="hours" type="range" min="2" max="12" value="6"><output data-hours>6 часов</output></label><label>Уровень продакшна<select name="production"><option value="client">Команда клиента</option><option value="coordination">Координация Алисы</option><option value="full">Под ключ</option></select></label><label class="studio-check"><input name="concept" type="checkbox"><span>Разработка концепции</span></label><label class="studio-check"><input name="urgent" type="checkbox"><span>Срочная подготовка</span></label></form><aside><span>ОРИЕНТИР БЮДЖЕТА</span><output id="studio-total">от 115 000 ₽</output><ul><li>Съёмка и световая схема</li><li>Базовый отбор и цвет</li><li>Сроки и объём уточняются</li></ul><button data-to-order>Зафиксировать конфигурацию ↗</button></aside></div></section>
    <section class="studio-process" id="studio-process"><header class="studio-section-head ap-reveal"><span>03 / Workflow</span><h2>Процесс без неопределённости.</h2></header><ol><li class="ap-reveal"><b>01</b><h3>Бриф</h3><p>Задача, каналы, объём, сроки.</p></li><li class="ap-reveal"><b>02</b><h3>Смета</h3><p>Команда, локация, техника, права.</p></li><li class="ap-reveal"><b>03</b><h3>Съёмка</h3><p>Тайминг и контроль результата.</p></li><li class="ap-reveal"><b>04</b><h3>Передача</h3><p>Форматы для согласованных площадок.</p></li></ol></section>
    <section class="studio-order" id="studio-order"><div class="ap-reveal"><span>04 / Order</span><h2>Получить точную смету.</h2><p>Опишите продукт, количество образов и предполагаемые каналы размещения.</p></div><form class="ap-project-form ap-reveal"><label>Компания<input required name="name"></label><label>Email / Telegram<input required name="contact"></label><label>Задача<textarea required rows="4" name="brief"></textarea></label><label class="ap-consent"><input required type="checkbox"><span>Даю <a href="consent.html">согласие на обработку данных</a></span></label><button>Отправить коммерческий бриф ↗</button></form></section>
    <footer class="studio-footer"><strong>AP / COMMERCIAL STUDIO</strong><div>${legalLinks}</div><small>Демонстрационные цены и реквизиты · Учебный проект 2026</small></footer>`;

  const journalTemplate = () => `
    <div class="journal-progress" aria-hidden="true"><i></i></div><header class="journal-nav"><a href="#journal-top">ALISA PAVLOVA</a><span>Independent fashion image-maker</span><button data-journal-menu aria-expanded="false">INDEX +</button></header><aside class="journal-index" hidden><a href="#journal-issues">Номера</a><a href="#journal-manifesto">Манифест</a><a href="#journal-notes">Заметки</a><a href="#journal-inquiry">Личное обращение</a></aside>
    <section class="journal-hero" id="journal-top"><div class="journal-hero-copy ap-reveal"><span>ISSUE Nº 01 — MOSCOW / EUROPE</span><h1>Редакционный взгляд<br>для брендов<br><i>с характером.</i></h1><p>Алиса Павлова снимает изображения, в которых точность коммерческой задачи встречается с тишиной журнального кадра.</p><a href="#journal-issues">Открыть журнал работ ↓</a></div><figure><img src="${heroAssets.journal}" alt="Редакционная fashion-фотография"><figcaption>Portrait of an idea, 2026</figcaption></figure></section>
    <section class="journal-lead ap-reveal"><span>EDITOR’S LETTER</span><p>Не громче. Точнее. Не больше кадров. Больше смысла в каждом.</p></section>
    <section class="journal-issues" id="journal-issues"><header><span>01 / Selected issues</span><h2>Три номера.<br>Три состояния.</h2></header><article class="journal-issue ap-reveal"><img src="${image(1)}" alt="Editorial Ash and Silk"><div><span>ISSUE 01 / CAMPAIGN</span><h3>Ash & Silk</h3><p>Исследование хрупкости и силы в новой кампании российского бренда.</p><button data-journal-open="0">Читать визуальную заметку ↗</button></div></article><article class="journal-issue ap-reveal"><img src="${image(4)}" alt="Editorial Small Objects"><div><span>ISSUE 02 / JEWELRY</span><h3>Small Objects</h3><p>Украшение как личный архив: свет, следы касания и почти документальная близость.</p><button data-journal-open="1">Читать визуальную заметку ↗</button></div></article><article class="journal-issue ap-reveal"><img src="${image(2)}" alt="Editorial New Skin"><div><span>ISSUE 03 / BEAUTY</span><h3>New Skin</h3><p>Beauty-серия о текстуре, несовершенстве и современной форме роскоши.</p><button data-journal-open="2">Читать визуальную заметку ↗</button></div></article></section>
    <section class="journal-manifesto" id="journal-manifesto"><span>02 / Manifesto</span><blockquote class="ap-reveal">«Коммерческий кадр может продавать, не теряя собственного голоса».</blockquote><div><p>Работа начинается с разговора о ценностях бренда, а не с перечня референсов.</p><p>Концепция выстраивается вокруг одной ясной мысли и переводится в свет, кастинг, пространство и жест.</p></div></section>
    <section class="journal-notes" id="journal-notes"><header><span>03 / Backstage notes</span><h2>Что остаётся<br>за кадром.</h2></header><div><details class="ap-reveal"><summary><span>01</span>Как рождается визуальная концепция</summary><p>Интервью с брендом, смысловая карта, визуальные противоречия и один главный тезис будущей серии.</p></details><details class="ap-reveal"><summary><span>02</span>Почему кастинг меняет всё</summary><p>Ищу не «типаж», а человека, чья пластика поддерживает характер коллекции.</p></details><details class="ap-reveal"><summary><span>03</span>Свет как часть голоса бренда</summary><p>Световая схема не повторяется автоматически: она вытекает из материала, среды и задачи.</p></details></div></section>
    <section class="journal-collab ap-reveal"><span>PRIVATE COMMISSION</span><h2>Арт-дирекшн и съёмка<br>для одного выбранного проекта.</h2><p>Каждый месяц беру ограниченное количество проектов с полной разработкой визуального языка.</p><a href="#journal-inquiry">Запросить личное обсуждение ↗</a></section>
    <section class="journal-inquiry" id="journal-inquiry"><div><span>04 / Private inquiry</span><h2>Начнём<br>с разговора.</h2><p>Расскажите не только о формате, но и о том, какое ощущение должен оставить будущий кадр.</p></div><form class="ap-project-form"><label>Ваше имя<input required name="name"></label><label>Как связаться<input required name="contact"></label><label>О проекте и его настроении<textarea required rows="5" name="brief"></textarea></label><label class="ap-consent"><input required type="checkbox"><span>Даю <a href="consent.html">согласие на обработку данных</a></span></label><button>Отправить личное обращение ↗</button></form></section>
    <footer class="journal-footer"><div><strong>ALISA<br>PAVLOVA</strong><p>Fashion photographer<br>Moscow · Europe · Worldwide</p></div><div>${legalLinks}</div><small>Учебная симуляция персонального сайта · 2026</small></footer>`;

  const templates = { film: filmTemplate, studio: studioTemplate, journal: journalTemplate };
  const popupCopy = {
    film: { eyebrow: "Новая история", title: "Предложите<br>кампанию.", text: "Пришлите идею или презентацию бренда — отвечу режиссёрским взглядом и следующим шагом.", label: "Описать будущую историю", href: "#film-contact" },
    studio: { eyebrow: "Нужна съёмка?", title: "Получите<br>точную смету.", text: "Соберите параметры в калькуляторе, а затем отправьте коммерческий бриф на уточнение.", label: "Перейти к расчёту", href: "#studio-calc" },
    journal: { eyebrow: "Private inquiry", title: "Начнём<br>с разговора.", text: "Расскажите о бренде и ощущении, которое должен оставить будущий кадр.", label: "Написать личное обращение", href: "#journal-inquiry" },
  };
  let currentVersion = "film";
  let revealObserver;
  let journalScrollHandler;
  const switcher = document.createElement("button");
  switcher.id = "ap-theme-switch";
  switcher.type = "button";
  switcher.setAttribute("aria-label", "Открыть следующую версию сайта");
  switcher.setAttribute("aria-live", "polite");
  switcher.innerHTML = '<span class="ap-theme-dot" aria-hidden="true"></span><span class="ap-theme-label">Film</span><span class="ap-theme-count">01 / 03</span>';
  document.body.append(switcher);

  const setupReveal = () => {
    revealObserver?.disconnect();
    revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); }), { threshold: .1 });
    main.querySelectorAll(".ap-reveal").forEach((element) => revealObserver.observe(element));
  };
  const setupForms = () => main.querySelectorAll(".ap-project-form").forEach((form) => form.addEventListener("submit", (event) => { event.preventDefault(); form.innerHTML = '<div class="ap-form-success"><b>Запрос принят.</b><span>Это учебная демонстрация — данные никуда не отправляются.</span></div>'; }));

  const syncGlobalPopup = () => {
    const popup = document.querySelector(".project-popup");
    const copy = popupCopy[currentVersion];
    if (!popup || !copy) return;
    popup.querySelector(":scope > div > span").textContent = copy.eyebrow;
    popup.querySelector(":scope > div > h2").innerHTML = copy.title;
    popup.querySelector(":scope > div > p").textContent = copy.text;
    const link = popup.querySelector(":scope > div > a");
    link.href = copy.href;
    link.innerHTML = `${copy.label} <b>↗</b>`;
  };

  const setupFilm = () => {
    const track = main.querySelector(".film-track");
    main.querySelector(".film-arrows")?.addEventListener("click", (event) => { const direction = event.target.closest("button")?.dataset.filmMove; if (direction) track.scrollBy({ left: track.clientWidth * (direction === "next" ? .72 : -.72), behavior: "smooth" }); });
    const stories = [["NOCTURNE","Campaign","История построена вокруг напряжения между архитектурной формой и живым движением ткани."],["CHROME SKIN","Beauty","Холодный свет подчёркивает поверхность продукта, не превращая кожу в пластиковый объект."],["OBJECTS OF DESIRE","Jewelry","Макро-деталь, жест и тень складываются в интимный портрет украшения."],["AFTERIMAGE","Editorial","Цвет работает как память: остаётся в восприятии уже после того, как кадр исчезает."]];
    main.querySelectorAll("[data-story]").forEach((button) => button.addEventListener("click", () => { const story = stories[Number(button.dataset.story)]; const modal = document.createElement("div"); modal.className = "ap-story-modal"; modal.innerHTML = `<article><button data-close aria-label="Закрыть">×</button><span>${story[1]} / Visual note</span><h2>${story[0]}</h2><p>${story[2]}</p><a href="#film-contact">Обсудить похожую задачу ↗</a></article>`; document.body.append(modal); modal.addEventListener("click", (event) => { if (event.target === modal || event.target.closest("[data-close]") || event.target.closest("a")) modal.remove(); }); }));
  };

  const setupStudio = () => {
    main.querySelector(".studio-filter")?.addEventListener("click", (event) => { const selected = event.target.closest("button")?.dataset.service; if (!selected) return; main.querySelectorAll(".studio-filter button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.service === selected))); main.querySelectorAll("[data-service-card]").forEach((card) => card.hidden = selected !== "all" && card.dataset.serviceCard !== selected); });
    const form = main.querySelector("#studio-calculator");
    const total = main.querySelector("#studio-total");
    const hoursOutput = main.querySelector("[data-hours]");
    const prices = { catalog: 95000, campaign: 180000, beauty: 140000, jewelry: 140000 };
    const calculate = () => { const data = new FormData(form); const hours = Number(data.get("hours")); let amount = prices[data.get("direction")] + Math.max(0, hours - 4) * 9000; if (data.get("production") === "coordination") amount += 35000; if (data.get("production") === "full") amount += 75000; if (data.get("concept")) amount += 45000; if (data.get("urgent")) amount *= 1.2; total.textContent = `от ${new Intl.NumberFormat("ru-RU").format(Math.ceil(amount / 5000) * 5000)} ₽`; hoursOutput.textContent = `${hours} ${hours >= 2 && hours <= 4 ? "часа" : "часов"}`; };
    form?.addEventListener("input", calculate); form?.addEventListener("change", calculate); calculate();
    main.querySelector("[data-to-order]")?.addEventListener("click", () => main.querySelector("#studio-order")?.scrollIntoView({ behavior: "smooth" }));
  };

  const setupJournal = () => {
    const menu = main.querySelector("[data-journal-menu]");
    const index = main.querySelector(".journal-index");
    menu?.addEventListener("click", () => { index.hidden = !index.hidden; menu.setAttribute("aria-expanded", String(!index.hidden)); menu.textContent = index.hidden ? "INDEX +" : "INDEX −"; });
    index?.addEventListener("click", () => { index.hidden = true; menu.textContent = "INDEX +"; menu.setAttribute("aria-expanded", "false"); });
    journalScrollHandler = () => { const max = document.documentElement.scrollHeight - innerHeight; const progress = max > 0 ? Math.min(100, scrollY / max * 100) : 0; main.querySelector(".journal-progress i")?.style.setProperty("width", `${progress}%`); };
    addEventListener("scroll", journalScrollHandler, { passive: true }); journalScrollHandler();
    main.querySelectorAll("[data-journal-open]").forEach((button) => button.addEventListener("click", () => button.closest("article")?.classList.toggle("is-reading")));
  };

  const render = (version, updateUrl = true) => {
    if (journalScrollHandler) removeEventListener("scroll", journalScrollHandler);
    journalScrollHandler = null;
    currentVersion = versions.some((item) => item.id === version) ? version : "film";
    root.dataset.theme = currentVersion;
    main.className = `concept ap-site ap-${currentVersion}`;
    main.innerHTML = templates[currentVersion]();
    const index = versions.findIndex((item) => item.id === currentVersion);
    switcher.querySelector(".ap-theme-label").textContent = versions[index].label;
    switcher.querySelector(".ap-theme-count").textContent = `0${index + 1} / 03`;
    switcher.title = `${versions[index].title}. Нажмите, чтобы открыть следующую версию.`;
    try { localStorage.setItem(storageKey, currentVersion); } catch (_) {}
    if (updateUrl) { const url = new URL(location.href); if (currentVersion === "film") url.searchParams.delete("theme"); else url.searchParams.set("theme", currentVersion); history.replaceState(null, "", url); }
    setupReveal(); setupForms();
    syncGlobalPopup();
    if (currentVersion === "film") setupFilm();
    if (currentVersion === "studio") setupStudio();
    if (currentVersion === "journal") setupJournal();
    scrollTo({ top: 0, behavior: "auto" });
  };

  switcher.addEventListener("click", () => { const index = versions.findIndex((item) => item.id === currentVersion); render(versions[(index + 1) % versions.length].id); });
  const query = new URLSearchParams(location.search).get("theme");
  let saved = "film";
  try { saved = localStorage.getItem(storageKey) || "film"; } catch (_) {}
  render(legacy[query] || query || legacy[saved] || saved || "film", Boolean(query));
})();

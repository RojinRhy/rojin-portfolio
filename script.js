const translations = {
    en: {
        "nav-home": "Home",
        "nav-contact": "Contact",
        "nav-resume": "Resume",
        "nav-aboutme": "About Me",
        "job-title": "Front-end Developer <br><br> Digital Marketer <br><br> Former Android Developer",
        "scroll-text": "Scroll<br>Down",
        "intro-heading": "Hello,<br>I'm Rojin!",
        "about-me-text": "I'm a front-end developer and digital marketer who enjoys combining creativity and strategy. I'm passionate about understanding people and designing digital experiences that are engaging for them.",
        "contact-heading": "Contact",
        "education-heading": "Education",
        "edu-2025": 'Accepted in the cybersecurity program at <a href="https://www.unipd.it/en">UniPD</a>',
        "edu-2020": 'Studied computer science at <a href="https://srb.iau.ir/en">IAU Science and Research Branch</a><br>Graduated with a GPA 17.8',
        "edu-2022": 'Accepted in the computer engineering program at <a href="https://www.concordia.ca/">Concordia University</a>',
        "experience-heading": "Experience",
        "exp-2026": 'Finished <a class="freecodecamp" href="https://www.freecodecamp.org/learn">FreeCodeCamp</a> Front-end Development Course<br>Finished Google Certificate Digital Marketing Course',
        "exp-2024": "Working as an online English tutor",
        "exp-2023": "Worked as an Android developer at HashStudio Co.",
        "skill-heading": "Technical skills",
        "coding-heading": "Coding skills",
        "general-heading": "General skills",
        "language-heading": "Languages",
        "lang-english": "English",
        "lang-italian": "Italian",
        "lang-persian-name": "Persian",
        "lang-level-en": "Fluent - C1",
        "lang-level-it": "B1",
        "lang-level-fa": "Native",
        "activity-heading": "Activities",
        "act-2026": 'FreeCodeCamp Front-end Development Course<br><a href="images/Digital-Marketing-1-English.png" target="_blank" rel="noopener">Google Digital Marketing Course</a>',
        "act-2025": "Padua Admission",
        "act-2022a": "Android Development",
        "act-2022b": "Concordia Admission",
        "act-2020": "CS50 Course",
        "project-heading": "Projects",
        "project-portfolio-text": "Portfolio",
        "project-marketing-text": "Marketing",
        "project-calculator-text": "Calculator"
    },
    fa: {
        "nav-home": "خانه",
        "nav-contact": "تماس",
        "nav-resume": "رزومه",
        "nav-aboutme": "درباره من",
        "job-title": "توسعه‌دهنده فرانت‌اند <br><br> بازاریاب دیجیتال <br><br> توسعه‌دهنده سابق اندروید",
        "scroll-text": "بفرمایید<br>پایین",
        "intro-heading": "،سلام<br>من روژین هستم",
        "about-me-text": "من یه توسعه‌دهنده فرانت‌اند و بازاریاب دیجیتال هستم که ترکیب خلاقیت و استراتژی رو دوست دارم. علاقه‌مندم آدمارو رو بشناسم و تجربه‌های دیجیتالی جذاب براشون طراحی کنم",
        "contact-heading": "برای ارتباط با من",
        "education-heading": "تحصیلات",
        "edu-2025": 'پذیرفته‌شده در رشته امنیت سایبری در <a href="https://www.unipd.it/en">دانشگاه پادوا</a>',
        "edu-2020": 'تحصیل در رشته علوم کامپیوتر در <a href="https://srb.iau.ir/en">واحد علوم و تحقیقات دانشگاه آزاد</a><br>فارغ‌التحصیل با معدل ۱۷.۸',
        "edu-2022": 'پذیرفته‌شده در رشته مهندسی کامپیوتر در <a href="https://www.concordia.ca/">دانشگاه کنکوردیا</a>',
        "experience-heading": "سوابق کاری",
        "exp-2026": 'دوره توسعه فرانت‌اند <a class="freecodecamp" href="https://www.freecodecamp.org/learn">فری کد کمپ</a> رو به پایان رسوندم<br>دوره مدرک بازاریابی دیجیتال گوگل رو به پایان رسوندم',
        "exp-2024": "فعالیت به عنوان مدرس آنلاین زبان انگلیسی",
        "exp-2023": "به عنوان توسعه‌دهنده اندروید در شرکت هش استودیو فعالیت کردم",
        "skill-heading": "مهارت‌های فنی",
        "coding-heading": "مهارت‌های برنامه‌نویسی",
        "general-heading": "مهارت‌های عمومی",
        "language-heading": "زبان‌ها",
        "lang-english": "انگلیسی",
        "lang-italian": "ایتالیایی",
        "lang-persian-name": "فارسی",
        "lang-level-en": "مسلط - C1",
        "lang-level-it": "B1",
        "lang-level-fa": "زبان اول",
        "activity-heading": "فعالیت‌ها",
        "act-2026": 'FreeCodeCamp دوره فرانت‌اند<br><a href="images/Digital-Marketing-1-English.png" target="_blank" rel="noopener">دوره بازاریابی دیجیتال گوگل</a>',
        "act-2025": "پذیرش دانشگاه پادوا",
        "act-2022a": "توسعه اندروید",
        "act-2022b": "پذیرش دانشگاه کنکوردیا",
        "act-2020": "CS50 دوره",
        "project-heading": "پروژه‌ها",
        "project-portfolio-text": "پورتفولیو",
        "project-marketing-text": "بازاریابی",
        "project-calculator-text": "ماشین‌حساب"
    }
};

let currentLang = "en";

function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.documentElement.setAttribute("lang", lang);
}

const langToggle = document.getElementById("langToggle");

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fa" : "en";

    langToggle.setAttribute("aria-checked", String(currentLang === "fa"));
    langToggle.setAttribute(
        "aria-label",
        currentLang === "en" ? "Switch to Persian" : "Switch to English"
    );

    applyLanguage(currentLang);
});
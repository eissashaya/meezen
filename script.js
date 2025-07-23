const skillContent = {
  html: `<h3>HTML5</h3><p>HTML هي اللغة الأساسية لإنشاء هيكل صفحات الويب.</p><ul><li>التعامل مع العناصر الأساسية (div, header, footer)</li><li>إدراج الوسائط المتعددة: صور، فيديوهات، صوت</li><li>النماذج وإدخال البيانات</li><li>استخدام العناصر الدلالية لتحسين السيو</li></ul>`,
  css: `<h3>CSS3</h3><p>CSS مسؤولة عن تنسيق شكل صفحات الويب.</p><ul><li>الألوان، الخطوط، الهوامش، والخلفيات</li><li>النماذج المرنة باستخدام Flexbox وGrid</li><li>التحولات (transitions) والأنيميشن</li><li>وسائل جعل الموقع متجاوب</li></ul>`,
  js: `<h3>JavaScript</h3><p>لغة برمجة تجعل صفحات الويب تفاعلية وديناميكية.</p><ul><li>المتغيرات، الشروط، الحلقات</li><li>DOM والتعامل مع الأحداث</li><li>جلب البيانات من API</li><li>مفاهيم البرمجة الكائنية</li></ul>`,
  responsive: `<h3>تصميم متجاوب</h3><p>تصميم مواقع تعمل بكفاءة على جميع أحجام الشاشات.</p><ul><li>Media Queries</li><li>التصميم Mobile First</li><li>الوحدات النسبية والتكيف مع الأجهزة</li></ul>`,
  performance: `<h3>تحسين الأداء</h3><p>تقنيات لتسريع تحميل المواقع وتحسين تجربة المستخدم.</p><ul><li>ضغط الصور والملفات</li><li>التحميل الكسول للعناصر</li><li>تقليل عدد الطلبات الخارجية</li></ul>`,
  design: `<h3>تصميم عصري</h3><p>إنشاء واجهات بصرية جذابة وسهلة الاستخدام.</p><ul><li>مبادئ تجربة المستخدم (UX)</li><li>تناسق الألوان والخطوط والمساحات</li><li>الاهتمام بالتفاصيل الصغيرة التي تصنع الفرق</li></ul>`
};

document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("click", () => {
    const skill = card.getAttribute("data-skill");
    document.getElementById("skill-content").innerHTML = skillContent[skill];
    document.getElementById("skill-details").classList.remove("hidden");
  });
});

function closeSkill() {
  document.getElementById("skill-details").classList.add("hidden");
}


document.addEventListener("click", (e) => {
  const details = document.getElementById("skill-details");
  const content = document.getElementById("skill-content");

  if (!details.classList.contains("hidden") && !details.contains(e.target) && !e.target.closest(".skill-card")) {
    closeSkill();
  }
});

function closeSkill() {
  document.getElementById("skill-details").classList.add("hidden");
  document.querySelector(".skills-grid").classList.remove("blur-background");
}

document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("click", () => {
    const skill = card.getAttribute("data-skill");
    document.getElementById("skill-content").innerHTML = skillContent[skill];
    document.getElementById("skill-details").classList.remove("hidden");
    document.querySelector(".skills-grid").classList.add("blur-background");
  });
});


const phrases = [ "م/ مازن عبد المعز","770452036","712433463","مبرمج", "مصمم واجهات", "مطور ويب", "محب للتقنية"];
const typingElement = document.querySelector(".typing");
let i = 0, j = 0, current = "", isDeleting = false;

function typeLoop() {
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      current = phrases[i].slice(0, j++);
      typingElement.textContent = current;
    } else if (isDeleting && j > 0) {
      current = phrases[i].slice(0, j--);
      typingElement.textContent = current;
    }

    if (j === phrases[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }

    setTimeout(typeLoop, isDeleting ? 70 : 200);
  }
}
typeLoop();

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 1000 });
});



// ظهور الفوتر تدريجياً عند اقترابه من العرض
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".main-footer");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  if (footer) {
    observer.observe(footer);
  }
});

// زر العودة للأعلى
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// عرض رسالة ترحيبية بعد 2 ثانية من تحميل الصفحة
window.addEventListener("load", () => {
  setTimeout(() => {
    const popup = document.getElementById("welcomePopup");
    if (popup) popup.classList.remove("hidden");
  }, 2000);
});

function closeWelcome() {
  document.getElementById("welcomePopup").classList.add("hidden");
}


function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// عند تحميل الصفحة، تحقق من التفضيل المحفوظ:
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});

function toggleDarkMode() {
  const body = document.body;
  const icon = document.querySelector(".dark-mode-btn i");
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }

  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
}


// تشغيل القائمة عند النقر على الأيقونة
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const nav = document.getElementById("navLinks");

  menuIcon.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});

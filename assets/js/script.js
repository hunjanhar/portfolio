function app() {
  return {
    dark: false,
    mm: false,
    sc: false,
    s: 'hero',

    init() {
      this.dark = localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.$watch('dark', v => localStorage.setItem('theme', v ? 'dark' : 'light'));
      window.addEventListener('scroll', () => {
        this.sc = window.scrollY > 20;
        this.updateSection();
      }, { passive: true });
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
      document.getElementById('yr').textContent = new Date().getFullYear();
    },

    updateSection() {
      const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 60;
      if (atBottom) { 
        this.s = 'contact'; 
        return; 
      }
      const ids = ['hero', 'about', 'resume', 'services', 'projects', 'certificates', 'contact']; 
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) { 
          this.s = id; 
        }
      }
    },
  }
}

const form = document.getElementById('contact-form');
const result = document.getElementById('result');
const button = document.getElementById('submit-button');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    button.textContent = "Sending...";
    button.disabled = true;

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait...";
    
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "<strong>Message sent successfully! Thank you.</strong>";
        result.className = "mt-4 text-center transition-all duration-300 text-green-500 text-lg font-bold p-4 border border-green-500/20 rounded-xl bg-green-500/10";
        form.reset();
      } else {
        result.innerHTML = json.message || "Something went wrong!";
        result.className = "mt-4 text-center text-red-500";
      }
    })
    .catch(error => {
      result.innerHTML = error.message || "Something went wrong!";
      result.className = "mt-4 text-center text-red-500";
    })
    .finally(() => {
      button.textContent = "Send message →";
      button.disabled = false;
      setTimeout(() => {
        result.innerHTML = "";
        result.className = "mt-4 text-center transition-all duration-300";
      }, 5000);
    });
});
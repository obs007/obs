// Dynamic publication loading
const publications = [
    {
        title: "Ru(III) Complexes for Glioma Therapy",
        journal: "J. Med. Chem.",
        year: 2023,
        filter: "bbb",
        link: "#"
    },
    // Add more publications
];

function loadPublications(filter = 'all') {
    const container = document.querySelector('.publications-container');
    container.innerHTML = publications
        .filter(pub => filter === 'all' || pub.filter === filter)
        .map(pub => `
            <div class="publication-card">
                <h4>${pub.title}</h4>
                <p>${pub.journal} (${pub.year})</p>
                <a href="${pub.link}" class="pub-link">Read Paper</a>
            </div>
        `).join('');
}

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        loadPublications(btn.dataset.filter);
    });
});

// Initial load
loadPublications();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form submission logic
});
const images = [
    { url: 'https://picsum.photos/400/300?random=1', category: 'nature', title: 'Mountain View' },
    { url: 'https://picsum.photos/400/300?random=2', category: 'city', title: 'City Lights' },
    { url: 'https://picsum.photos/400/300?random=3', category: 'animals', title: 'Wildlife' },
    { url: 'https://picsum.photos/400/300?random=4', category: 'nature', title: 'Forest Path' },
    { url: 'https://picsum.photos/400/300?random=5', category: 'food', title: 'Delicious Meal' },
    { url: 'https://picsum.photos/400/300?random=6', category: 'city', title: 'Urban Street' },
    { url: 'https://picsum.photos/400/300?random=7', category: 'animals', title: 'Pet Portrait' },
    { url: 'https://picsum.photos/400/300?random=8', category: 'nature', title: 'Ocean Waves' },
    { url: 'https://picsum.photos/400/300?random=9', category: 'food', title: 'Fresh Fruits' },
    { url: 'https://picsum.photos/400/300?random=10', category: 'city', title: 'Architecture' },
    { url: 'https://picsum.photos/400/300?random=11', category: 'animals', title: 'Bird Watching' },
    { url: 'https://picsum.photos/400/300?random=12', category: 'food', title: 'Dessert Time' }
];

const gallery = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');

function displayImages(filter) {
    gallery.innerHTML = '';
    const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);
    
    filteredImages.forEach(img => {
        const imgCard = document.createElement('div');
        imgCard.className = 'gallery-item';
        imgCard.innerHTML = `
            <img src="${img.url}" alt="${img.title}">
            <div class="overlay">
                <h3>${img.title}</h3>
                <span class="category">${img.category}</span>
            </div>
        `;
        gallery.appendChild(imgCard);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        displayImages(btn.dataset.filter);
    });
});

displayImages('all');

const filters = document.querySelectorAll('.filter-button');
const gallery = document.querySelector('.gallery');

filters.forEach((filter) => {
  filter.addEventListener('click', (event) => {
    const filterValue = event.target.getAttribute('data-filter');
    gallery.childNodes.forEach((item) => {
      if (item.nodeType === 1) {
        const itemClasses = item.classList;
        if (filterValue === 'all' || itemClasses.contains(filterValue)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      }
    });
  });
});

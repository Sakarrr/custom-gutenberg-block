document.addEventListener('DOMContentLoaded', function () {
    let splide;
    const sliderInterval = 3000;

    if (document.querySelector('.block-splide')) {
        splide = new Splide('.block-splide', {
            type: 'slide',
            perPage: 1,
            pagination: false,
            autoplay: blockAttributes.autoplay,
            interval: sliderInterval,
            arrows: false,
        }).mount();

        splide.on('active', function (newIndex) {
            openAccordionByIndex(newIndex.index);
        });

        function openAccordionByIndex(index) {
            const accordionTitles = document.querySelectorAll('.accordion-title');
            accordionTitles.forEach((title, i) => {
                const content = title.nextElementSibling;
                if (i === index) {
                    title.classList.add('open');
                    title.classList.add('active');
                    title.style.setProperty('--animation-duration', `${sliderInterval / 1000}s`);
                    content.style.display = 'block';
                } else {
                    title.classList.remove('open');
                    title.classList.remove('active');
                    title.style.removeProperty('--animation-duration');
                    content.style.display = 'none';
                }
            });
        }

        // Initialize by opening the first accordion
        openAccordionByIndex(0);
    }

    const accordions = document.querySelectorAll('.accordion-title');

    accordions.forEach((accordion, index) => {
        accordion.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isOpen = this.classList.contains('open');

            // Close all accordions
            document.querySelectorAll('.accordion-title.open').forEach(openAccordion => {
                openAccordion.classList.remove('open');
                openAccordion.nextElementSibling.style.display = 'none';
            });

            // Toggle the clicked accordion
            if (!isOpen) {
                this.classList.add('open');
                this.classList.add('active');
                this.style.setProperty('--animation-duration', `${sliderInterval / 1000}s`);
                content.style.display = 'block';
            }

            // Sync Splide slider with accordion
            if(index <3 ){
                splide.go(index);
            }
        });
    });
});
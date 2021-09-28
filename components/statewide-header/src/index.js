/* sticky header / hiding official header on scroll */
(function () {

	var doc = document.documentElement;
	var w = window;

	var prevScroll = w.scrollY || doc.scrollTop;
	var curScroll;
	var direction = 0;
	var prevDirection = 0;

	var headerOfficial = document.querySelector('.official-header');
	var headerEntire = document.querySelector('header');

	var checkScroll = function () {

		/*
		** Find the direction of scroll
		** 0 - initial, 1 - up, 2 - down
		*/

		curScroll = w.scrollY || doc.scrollTop;
		if (curScroll > prevScroll) {
			//scrolled up
			direction = 2;
		}
		else if (curScroll < prevScroll) {
			//scrolled down
			direction = 1;
		}

		if (direction !== prevDirection) {
			toggleHeader(direction, curScroll);
		}

		prevScroll = curScroll;
	};

	var toggleHeader = function (direction, curScroll) {
		if (direction === 2 && curScroll > 40) {
			// Scrolling up
			headerEntire.classList.add('scrolled');
			headerOfficial.classList.add('is-hidden');
			prevDirection = direction;
		}
		else if (direction === 1 && curScroll < 40) {
			// Scrolling down
			headerEntire.classList.remove('scrolled');
			headerOfficial.classList.remove('is-hidden');
			prevDirection = direction;
		}
	};

	window.addEventListener('scroll', checkScroll);

})();

const panels = document.querySelectorAll('.panel');

		panels.forEach(panel => {
			panel.addEventListener('mouseenter', () => {
				panels.forEach(p => p.classList.remove('active'));
				panel.classList.add('active');
			});

			panel.addEventListener('mouseleave', () => {
				panel.classList.remove('active');
			});
		});
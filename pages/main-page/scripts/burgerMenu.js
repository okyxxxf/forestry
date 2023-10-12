	const menu = document.createElement('div');
  const header = document.querySelector('.header');
	menu.className = 'burger-menu';
	menu.innerHTML = `
    <div class="burger-menu__wrapper p regular">
    	<ul class="burger-menu__nav">
    		<li class="burger-menu__element"><a href="#" class="p none-decor">Главная</a></li>
        <li class="burger-menu__element" tabindex="1">
          <div class="element__wrapper">
            Продукция и услуги
            <svg class="nest-icon" xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
              <path d="M0.30898 14.7062C0.719546 15.0979 1.38148 15.0979 1.79205 14.7062L8.75492 8.06355C9.08169 7.7518 9.0817 7.2482 8.75492 6.93645L1.79205 0.293764C1.38148 -0.097922 0.719548 -0.0979221 0.308981 0.293764C-0.101585 0.685451 -0.101585 1.31695 0.308981 1.70863L6.37531 7.504L0.300602 13.2994C-0.101585 13.6831 -0.101586 14.3225 0.30898 14.7062Z" fill="#DCDCDC"/>
            </svg>
          </div>
          <ul class="burger-menu__nav_nest">
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Древесина в круглом виде</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Дрова</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Колотые дрова</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Посадочный материал</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Пиломатериалы</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Побочное использование</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Услуги</a></li>
          </ul>
        </li>
        <li class="burger-menu__element" tabindex="1">
          <div class="element__wrapper">
            О лесхозе
            <svg class="nest-icon" xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
              <path d="M0.30898 14.7062C0.719546 15.0979 1.38148 15.0979 1.79205 14.7062L8.75492 8.06355C9.08169 7.7518 9.0817 7.2482 8.75492 6.93645L1.79205 0.293764C1.38148 -0.097922 0.719548 -0.0979221 0.308981 0.293764C-0.101585 0.685451 -0.101585 1.31695 0.308981 1.70863L6.37531 7.504L0.300602 13.2994C-0.101585 13.6831 -0.101586 14.3225 0.30898 14.7062Z" fill="#DCDCDC"/>
            </svg>
          </div>
          <ul class="burger-menu__nav_nest">
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Структура</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Руководство</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Новости</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Вакансии</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Охота и отдых</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Геральдика</a></li>
          </ul>
        </li>
        <li class="burger-menu__element" tabindex="1">
          <div class="element__wrapper">
            Обращения
            <svg class="nest-icon" xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
              <path d="M0.30898 14.7062C0.719546 15.0979 1.38148 15.0979 1.79205 14.7062L8.75492 8.06355C9.08169 7.7518 9.0817 7.2482 8.75492 6.93645L1.79205 0.293764C1.38148 -0.097922 0.719548 -0.0979221 0.308981 0.293764C-0.101585 0.685451 -0.101585 1.31695 0.308981 1.70863L6.37531 7.504L0.300602 13.2994C-0.101585 13.6831 -0.101586 14.3225 0.30898 14.7062Z" fill="#DCDCDC"/>
            </svg>
          </div>
          <ul class="burger-menu__nav_nest">
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Личный прием</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Порядок рассмотрения обращений</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">обращения.бел</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Прямые телефонные линии</a></li>
            <li class="burger-menu__element_nest burger-menu__element"><a class="p none-decor" href="#">Наименование и местонахождение вышестояшего органа</a></li>
          </ul>
        </li>
        <li class="burger-menu__element"><a href="#" class="p none-decor">Контакты</a></li>
        <li class="burger-menu__element"><a href="#" class="p none-decor">Административные процедуры</a></li>
      </ul>
    </div>
	`

	const burgerMenuButton = document.querySelector('.burger-menu-icon');
	let isOpenBurgerMenu = false;

	burgerMenuButton.addEventListener('click', () => {
		isOpenBurgerMenu = !isOpenBurgerMenu;
		burgerMenuButton.classList.toggle('open');
		change();
	});

	const change = () => {
    menu.remove();
		if (isOpenBurgerMenu) header.append(menu);
	};

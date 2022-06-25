    /**
     * Функция test(selector, count) находит элементы по селектору
     * и сравнивает их число с count.
     *
     * Иными словами, вызовы ниже проверяют,
     * что число элементов по селектору - правильное
     **/
	  test('input', 3); // далее вместо '...' вставьте правильные селекторы

	  // Выбрать input типа checkbox
	  test('input[type="checkbox"]', 2);
 
	  // Выбрать input типа checkbox, НЕ отмеченный
	  test('input[type="checkbox"]:not(:checked)', 1);
 
	  // Найти все элементы с id=message или message-*
	  test('[id|="message"]', 6);
 
	  // Найти все элементы с id=message-*
	  test('[id^="message-"]', 5);
 
	  // Найти все ссылки с расширением href="...zip"
	  test('a[href$=".zip"]', 1);
 
	  // Найти все элементы с data-action, содержащим delete в списке (через пробел)
	  test('[data-action~="delete"]', 2);
 
	  // Найти все элементы, у которых ЕСТЬ атрибут data-action,
	  // но он НЕ содержит delete в списке (через пробел)
	  test('[data-action]:not([data-action~="delete"])', 1);
 
	  // Выбрать все чётные элементы списка #messages
	  test('#messages li:nth-child(2n)', 3);
 
	  // Выбрать один элемент сразу за заголовком h3#widget-title
	  // на том же уровне вложенности
	  test('h3#widget-title + *', 1);
 
	  // Выбрать все ссылки, следующие за заголовком h3#widget-title
	  // на том же уровне вложенности
	  test('h3#widget-title ~ a', 2);
 
	  // Выбрать ссылку внутри последнего элемента списка #messages
	  test('#messages li:last-child a', 1);
 
 
	  function test(selector, count) {
		 if (selector === '...') return;
 
		 var elems = document.querySelectorAll(selector);
		 var ok = (elems.length == count);
 
		 if (!ok) alert(selector + ": " + elems.length + " != " + count);
	  }
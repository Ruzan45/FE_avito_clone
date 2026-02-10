function Rubrikator(){
  return (
    <div className="rubricator-content">
                <div className="rubricator-content-left">
                    <div className="r-c-category r-c-l-active" data-c-r-left="honey">
                        <img src="./images/visual-menu/honey2.png" alt="Домашний мёд" />
                        <div>
                            <p>Мёд</p><i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="r-c-category" data-c-r-left="eggs">
                        <img src="./images/visual-menu/eggs.png" alt="купить домашние яйца" />
                        <div>
                            <p>Домашние яйца</p><i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="r-c-category" data-c-r-left="meat">
                        <img src="./images/visual-menu/meat2.png" alt="Купить мясо, говядину, свинину, конину, курицу" />
                        <div>
                            <p>Мясная продукция</p><i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="r-c-category" data-c-r-left="vegetables">
                        <img src="./images/visual-menu/vegetables.png" alt="Купить картошку, морковь, свеклу, зелень" />
                        <div>
                            <p>Овощи</p><i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="r-c-category" data-c-r-left="fruits">
                        <img src="./images/visual-menu/fruits2.png" alt="Купить яблоки, груши, клубнику, малину" />
                        <div>
                            <p>Фрукты, ягоды</p><i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="r-c-category" data-c-r-left="milk">
                        <img src="./images/visual-menu/milk2.png" alt="купить домашнее молоко, творог, сметану" />
                        <div>
                            <p>Молочные продукты</p><i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="r-c-category" data-c-r-left="fish">
                        <img src="./images/visual-menu/fish2.png" alt="Купить рыбу, язь, карасей" />
                        <div>
                            <p>Рыба, икра</p><i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="r-c-category" data-c-r-left="fabricates">
                        <img src="./images/visual-menu/fabricates2.png" alt="Купить пельмени, котлеты" />
                        <div>
                            <p>Полуфабрикаты</p><i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="r-c-category" data-c-r-left="pickles">
                        <img src="./images/visual-menu/pickles3.png" alt="Купить солёные огурцы, помидоры" />
                        <div>
                            <p>Соления, компоты</p><i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="r-c-category" data-c-r-left="animals">
                        <img src="./images/visual-menu/animals2.png" alt="Купить корову, лошадь, барана, овцу" />
                        <div>
                            <p>Животные</p><i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="r-c-category" data-c-r-left="seendling">
                        <img src="./images/visual-menu/seendling.png" alt="Купить корову, лошадь, барана, овцу" />
                        <div>
                            <p>Рассада</p><i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="rubricator-content-right">
                    <div className="r-c-r-active" data-c-r-right="honey">
                        <div className="r-c-r-catname"><a href="/tyumen/honey"><h2>Мёд </h2><h2><i className="fa fa-chevron-right" aria-hidden="true"></i></h2></a></div>
                        <div className="r-c-r-podcategory">
                            <ul>
                                <li><a href=""><h5>Гречишный</h5></a></li>
                                <li><a href=""><h5>Одуванчиковый</h5></a></li>
                                <li><a href=""><h5>Разноцветковый</h5></a></li>
                                <li><a href=""><h5>Подсолнечный</h5></a></li>
                                <li><a href=""><h5>Другой</h5></a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-c-r-right="eggs" style="display: none;"> 
                        <div className="r-c-r-catname"><a href="/tyumen/eggs"><h2>Домашние яйца <i className="fa fa-chevron-right" aria-hidden="true"></i></h2></a></div>
                        <div className="r-c-r-podcategory">
                            <ul>
                                <li><a href=""><h5>Куриные</h5></a></li>
                                <li><a href=""><h5>Страусиные</h5></a></li>
                                <li><a href=""><h5>Перепелиные</h5></a></li>
                                <li><a href=""><h5>Другие</h5></a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-c-r-right="meat" style="display: none;">
                        <div className="r-c-r-catname"><a href="/tyumen/meat"><h2>Мясная продукция </h2><h2><i className="fa fa-chevron-right" aria-hidden="true"></i></h2></a></div>
                        <div className="r-c-r-podcategory">
                            <ul>
                                <li><a href=""><h5>Мясо птицы</h5></a></li>
                                <li><a href=""><h5>Свинина</h5></a></li>
                                <li><a href=""><h5>Говядина</h5></a></li>
                                <li><a href=""><h5>Конина</h5></a></li>
                                <li><a href=""><h5>Крольчатина</h5></a></li>
                                <li><a href=""><h5>Другое мясо</h5></a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-c-r-right="vegetables" style="display: none;">
                        <div className="r-c-r-catname"><a href="/tyumen/vegetables"><h2>Овощи </h2><h2><i className="fa fa-chevron-right" aria-hidden="true"></i></h2></a></div>
                        <div className="r-c-r-podcategory">
                            <ul>
                                <li><a href=""><h5>Картофель</h5></a></li>
                                <li><a href=""><h5>Морковь</h5></a></li>
                                <li><a href=""><h5>Капуста</h5></a></li>
                                <li><a href=""><h5>Свекла</h5></a></li>
                                <li><a href=""><h5>Лук</h5></a></li>
                                <li><a href=""><h5>Чеснок</h5></a></li>
                                <li><a href=""><h5>Перец</h5></a></li>
                                <li><a href=""><h5>Помидоры</h5></a></li>
                                <li><a href=""><h5>Огурцы</h5></a></li>
                                <li><a href=""><h5>Кукуруза</h5></a></li>
                                <li><a href=""><h5>Другие овощи</h5></a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-c-r-right="fruits" style="display: none;">
                        <div className="r-c-r-catname"><a href="/tyumen/fruits"><h2>Фрукты, ягоды </h2><h2><i className="fa fa-chevron-right" aria-hidden="true"></i></h2></a></div>
                        <div className="r-c-r-podcategory">
                            <ul>
                                <li><a href=""><h5>Яблоки</h5></a></li>
                                <li><a href=""><h5>Смородина</h5></a></li>
                                <li><a href=""><h5>Груша</h5></a></li>
                                <li><a href=""><h5>Вишня</h5></a></li>
                                <li><a href=""><h5>Земляника</h5></a></li>
                                <li><a href=""><h5>Сливы</h5></a></li>
                                <li><a href=""><h5>Абрикосы</h5></a></li>
                                <li><a href=""><h5>Клубника</h5></a></li>

                            </ul>
                        </div>
                    </div>
                    <div data-c-r-right="milk" style="display: none;">
                        <div className="r-c-r-catname"><a href="/tyumen/milk"><h2>Молочные продукты </h2><h2><i className="fa fa-chevron-right" aria-hidden="true"></i></h2></a></div>
                        <div className="r-c-r-podcategory">
                            <ul>
                                <li><a href=""><h5>Молоко</h5></a></li>
                                <li><a href=""><h5>Сметана</h5></a></li>
                                <li><a href=""><h5>Творог</h5></a></li>
                                <li><a href=""><h5>Сыр</h5></a></li>
                                <li><a href=""><h5>Другая продукция</h5></a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-c-r-right="fish" style="display: none;">
                        <div className="r-c-r-catname"><a href="/tyumen/fish"><h2>Рыба, икра </h2><h2><i className="fa fa-chevron-right" aria-hidden="true"></i></h2></a></div>
                        <div className="r-c-r-podcategory">
                            <ul>
                                <li><a href=""><h5>Рыба</h5></a></li>
                                <li><a href=""><h5>Икра</h5></a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-c-r-right="fabricates" style="display: none;">
                        <div className="r-c-r-catname"><a href="/tyumen/fabricates"><h2>Полуфабрикаты </h2><h2><i className="fa fa-chevron-right" aria-hidden="true"></i></h2></a></div>
                        <div className="r-c-r-podcategory">
                            <ul>
                                <li><a href=""><h5>Пельмени</h5></a></li>
                                <li><a href=""><h5>Манты</h5></a></li>
                                <li><a href=""><h5>Котлеты</h5></a></li>
                                <li><a href=""><h5>Другие</h5></a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-c-r-right="pickles" style="display: none;">
                        <div className="r-c-r-catname"><a href="/tyumen/pickles"><h2>Соления, компоты </h2><h2><i className="fa fa-chevron-right" aria-hidden="true"></i></h2></a></div>
                        <div className="r-c-r-podcategory">
                            <ul>
                                <li><a href=""><h5>Соления</h5></a></li>
                                <li><a href=""><h5>Компоты</h5></a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-c-r-right="animals" style="display: none;">
                        <div className="r-c-r-catname"><a href="/tyumen/animals"><h2>Животные </h2><h2><i className="fa fa-chevron-right" aria-hidden="true"></i></h2></a></div>
                        <div className="r-c-r-podcategory">
                            <ul>
                                <li><a href=""><h5>Овцы и козы</h5></a></li>
                                <li><a href=""><h5>Коробы / Бычки</h5></a></li>
                                <li><a href=""><h5>Лошади</h5></a></li>
                                <li><a href=""><h5>Поросята</h5></a></li>
                                <li><a href=""><h5>Другие</h5></a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-c-r-right="seendling" style="display: none;">
                        <div className="r-c-r-catname"><a href="/tyumen/seendling"><h2>Рассада </h2><h2><i className="fa fa-chevron-right" aria-hidden="true"></i></h2></a></div>
                        <div className="r-c-r-podcategory">
                            <ul>
                                <li><a href=""><h5>Цветочные</h5></a></li>
                                <li><a href=""><h5>Плодовых деревьев</h5></a></li>
                                <li><a href=""><h5>Разноцветковый</h5></a></li>
                                <li><a href=""><h5>Подсолнечный</h5></a></li>
                                <li><a href=""><h5>Другой</h5></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
  )
}
export default Rubrikator;
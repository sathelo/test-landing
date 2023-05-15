!function(){var t,e={124:function(t,e,i){i.p=`${window.ASSETS_PATH}/`},705:function(t,e,i){"use strict";i(124);var a=i(144),s={name:"popup-block",props:{data:{type:Object,required:!0}},data(){return{monthNames:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],frameCards:[{title:"0 ₽",subtitle:"Обслуживание без скрытых условий"},{title:"2%",subtitle:"Кешбэк в популярных категориях"},{title:"до 30%",subtitle:"Дополнительный кешбэк у партнёров"},{title:"3 дня",subtitle:"Срок зачисления кешбэка"}],footerCards:[{text:"Бесплатные платежи и переводы по номеру телефона в другие банки (до 100 000 ₽/мес.)"},{text:"0 ₽ комиссия за оплату ЖКУ"},{text:"Накопительный счёт с % за ежедневный остаток"},{text:"Удобная оплата с помощью сервисов Samsung Pay или Mir Pay (для Android)"},{text:"16 000 банкоматов, в которых можно снимать наличные без комиссии"}]}},mounted(){document.body.style.overflow="hidden"},destroyed(){document.body.style.overflow=""},methods:{closeModal(){this.$emit("closeModal")},clickHandler(t){console.log(t)}}},n=i(900),o=(0,n.Z)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal.apply(null,arguments)}}},[e("div",{staticClass:"popup-inner"},[e("div",{staticClass:"popup-close btn btn--outline",on:{click:t.closeModal}},[e("img",{staticClass:"popup-close__img",attrs:{src:t.getStaticUrl("closed-ico.svg"),alt:"close-modal"}})]),t._v(" "),e("div",{staticClass:"popup-header"},[e("div",{staticClass:"popup-header__info"},[e("div",{staticClass:"popup-header__date"},[t._v("\n            "+t._s(t.data.date.getDate())+" "+t._s(t.monthNames[t.data.date.getMonth()].toUpperCase())+"\n          ")]),t._v(" "),e("div",{staticClass:"popup-header__title"},[t._v(t._s(t.data.title))]),t._v(" "),e("div",{staticClass:"popup-header__subtitle"},[t._v(t._s(t.data.subtitle))]),t._v(" "),e("a",{staticClass:"popup-header__btn btn btn--primary",attrs:{href:t.data.link,target:"_blank"}},[t._v("Посмотреть фильм")])]),t._v(" "),e("img",{staticClass:"popup-header__img",attrs:{src:t.getStaticUrl(t.data.img),alt:"popup-header-photo"}})]),t._v(" "),e("div",{staticClass:"popup-main"},[e("div",{staticClass:"popup-main__container"},[e("div",{staticClass:"popup-main__info popup-main-info"},[e("div",{staticClass:"popup-main-info__title"},[t._v("Дебетовая карта ВТБ")]),t._v(" "),e("div",{staticClass:"popup-main-info__subtitle"},[t._v("\n              Оформите прямо сейчас бесплатную картус кешбэком 2% в топ-категориях\n            ")]),t._v(" "),e("div",{staticClass:"popup-main-info__btn"},[e("a",{staticClass:"popup-main-info__design btn btn--primary",attrs:{href:"https://online.vtb.ru/debit-card/step1/multicard-ready?code=media_kinopoisk_dbdk&utm_source=kinopoisk&utm_medium=media&utm_campaign=media_dbdk_kinopoisk_link_button_issue_card_cpc_rf_p1_feb_apr\n",target:"_blank"},on:{click:t.clickHandler}},[t._v("\n                Оформить карту\n              ")]),t._v(" "),e("a",{staticClass:"popup-main-info__more btn btn--ghost",attrs:{href:"https://www.vtb.promo/daily?code=media_kinopoisk_dbdk&utm_source=kinopoisk&utm_medium=media&utm_campaign=media_dbdk_kinopoisk_link_button_more_cpc_rf_p1_feb_apr\n",target:"_blank"},on:{click:t.clickHandler}},[t._v("Подробнее")])])]),t._v(" "),e("img",{staticClass:"popup-main-info__img",attrs:{src:t.getStaticUrl("card.png"),alt:"popup-main-photo"}})]),t._v(" "),e("div",{staticClass:"popup-main__cards popup-main-cards"},t._l(t.frameCards,(function(i,a){return e("div",{key:a,staticClass:"popup-main-cards__card popup-main-cards-card"},[e("div",{staticClass:"popup-main-cards-card__title"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"popup-main-cards-card__subtitle"},[t._v(t._s(i.subtitle))])])})),0)]),t._v(" "),e("div",{staticClass:"popup-footer"},[e("div",{staticClass:"popup-footer__title"},[t._v("С картой ВТБ вам доступно")]),t._v(" "),e("div",{staticClass:"popup-footer__cards popup-footer-cards"},t._l(t.footerCards,(function(i,a){return e("div",{key:a,staticClass:"popup-footer-cards__card popup-footer-cards-card"},[e("div",{staticClass:"popup-footer-cards-card__title"},[t._v(t._s(i.text))])])})),0)])])])}),[],!1,null,null,null),l=o.exports,r={name:"calendar-block",data(){return{infoModal:Object,isModal:!1,isActive:!1,monthNames:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],currentDate:"",title:"Праздник каждый день",subtitle:"День шепота, День спонтанности, День рождения видеомагнитофона – окунитесь в календарь ежедневных поводов улыбнуться, а решение повседневных задач доверьте банку ВТБ.",dates:[{date:new Date(2023,2,13),title:"День диеты",subtitle:"Конечно, мысли о правильном питании не покидают нас каждый день: мы постоянно призываем себя к порядку, ругаем за невыдержанность и, поедая тортик, приговариваем, что вот этот — точно в последний раз. День диеты определенно может стать рубежом, точкой отсчета. Прямо сегодня осознаем, что весна наступила и теперь свои масштабные аппетиты и расстройства пищевого поведения уже не скроешь за пуховиками и свитерами. Включаем комедию «Я худеюraquo;. Приобретаем полезные продукты при помощи бесплатной дебетовой карты ВТБ с кешбэком 2% в популярных категориях и до 30% за покупки у партнеров банка.",img:"13_02.png",link:"https://www.kinopoisk.ru/film/842037/"},{date:new Date(2023,2,14),title:"День рождения видеомагнитофона",subtitle:"Первый видеомагнитофон появился именно в этот день 1956 года, модель VR-1000 была представлена американской компанией Ampex. Революционное изобретение заслужило «Эмми» и на долгие годы стало новым средством записи и воспроизведения изображения на экране (до этого была только кинопленка). Отечественные зрители, особенно те, кому за сорок, помнят: в конце 1980-х — начале 1990-х такой аппарат был предметом роскоши: люди ходили в гости, чтобы посмотреть кино на видеомагнитофоне, а нередко и набивались в открывшиеся повсюду видеосалоны. Покупаем подписку на Кинопоиске при помощи бесплатной дебетовой карты ВТБ и пересматриваем культового «Брата», особенно сцену, где Данила Багров приносит своей возлюбленной, водительнице трамвая Свете, видеомагнитофон, чтобы вместе посмотреть концерт любимых рокеров.",img:"14_02.png",link:"https://www.kinopoisk.ru/film/41519/"},{date:new Date(2023,2,15),title:"День рождения эскалатора",subtitle:"Первый эскалатор запатентовал мичиганец Натан Эймс в 1859 году, но в действии свое изобретение увидеть не успел — умер через год. Покататься на первом эскалаторе можно было спустя 35 лет в нью-йоркском парке Кони-Айленд. В СССР эскалатор появился в 1938-м, а сегодня уже сложно представить без него жизнь ленивого и неспортивного человека. Смотрим «Я шагаю по Москве», где Никита Михалков поет знаменитую песню, забегая на эскалатор столичного метрополитена. Идем кататься на эскалаторах, оплатив проезд бесплатной дебетовой картой ВТБ, тем более кешбэк в популярной категории «Транспорт» составляет 2%.",img:"15_02.png",link:"https://www.kinopoisk.ru/film/42398/"},{date:new Date(2023,2,16),title:"День спонтанности",subtitle:"В переводе с латыни spontaneous означает «произвольный». Многие сравнивают это качество с необдуманностью и импульсивностью, которые приводят к просчетам, но психологи не согласны: спонтанность для них — не просто сиюминутное действие и порыв, а настоящее умение человека быть самим собой. Спонтанность хвалил Оскар Уайльд, называя «подготовленным искусством», а Брюс Ли считал залогом победы в бою. Смотрим «Эйс Вентуру: Розыск домашних животных», герой которого научит нас выпускать своего внутреннего ребенка наружу. Безжалостно тратим деньги в магазинах партнеров ВТБ, расплачиваясь бесплатной дебетовой картой банка с кешбэком до 30%.",img:"16_02.png",link:"https://www.kinopoisk.ru/film/2868/"},{date:new Date(2023,2,17),title:"День шепота",subtitle:"Никто толком не помнит, как именно начали отмечать этот праздник — видимо, инициатива обсуждалась слишком тихо, чтобы стать достоянием общественности. Но важность праздника от этого ничуть не снижается: говорить шепотом — значит, тайно, доверительно, вкрадчиво — бывает важно с друзьями, родными и даже незнакомыми людьми, это влияет на ваши отношения. Смотрим по этому поводу «Тихое место», где герои совсем с трудом коммуницировали, чтобы не навлекать на себя гнев острослышащих монстров. Шепнем, что дебетовая карта ВТБ идеальна для повседневного использования: бесплатное обслуживание, кешбэк до 30% у партнеров, 2% кешбэка в популярных категориях, а также платежи и переводы без комиссии.",img:"17_02.png",link:"https://www.kinopoisk.ru/film/1044906/"},{date:new Date(2023,2,18),title:"День абсолютно невероятных детей",subtitle:"Напоминать ребенку, что он особенный, талантливый и уникальный, можно и нужно не только в третий четверг марта, а гораздо чаще. Педагоги и психологи убеждены: поощрение достижений непременно повлечет за собой новые достижения. Смотрим фильм «Одаренная» о девочке с математическим талантом и выбираем секции и кружки для своих любимых чад. Все, что поможет раскрыть их талант, можно оплатить бесплатной дебетовой картой ВТБ с возможностью платежей и переводов по номеру телефона без комиссии.",img:"18_02.png",link:"https://www.kinopoisk.ru/film/929348/"},{date:new Date(2023,2,19),title:"Первый день без шапки",subtitle:"Первое тепло, первые лучи солнца, приближение весны. Сегодня можно не реагировать на фразу родителей «Шапку надень» — уши и так не отморозишь. Но похолодать еще может, простудиться несложно, так что не убирайте головной убор очень уж далеко, носите с собой. Подойдет не ушанка, а более легкий весенний вариант, например, как у героя фильма «Леон». Кстати, эту же черную шапочку герои Жана Рено носят и в «Голубой бездне», и в «Ронине». Приобрести такую же можно при помощи бесплатной дебетовой карты ВТБ: вам еще и начислят кешбэк до 30% за покупки.",img:"19_02.png",link:"https://www.kinopoisk.ru/film/389/"},{date:new Date(2023,2,20),title:"День счастья",subtitle:"Как известно, преследовать счастье можно довольно долго, но сегодня точно можно остановиться и признаться в себе, что ты его наконец обрел. Если это не так, то берем время до следующего 20 марта и подведем итоги через год. А пока смотрим «В погоне за счастьем» с Уиллом Смитом и пользуемся всеми преимуществами бесплатной дебетовой карты ВТБ: деньги — важный инструмент для достижения абсолютной гармонии с собой.",img:"20_02.png",link:"https://www.kinopoisk.ru/film/104938/"},{date:new Date(2023,2,21),title:"День поэзии",subtitle:"Этот праздник пытались отмечать на протяжении многих лет и в разные даты, но по-настоящему официальным он стал лишь в 1999-м благодаря ЮНЕСКО. Тогда же День поэзии заметили и в России — устраивались поэтические вечера в музеях и театрах. Фильм на сегодня — «Патерсон» Джима Джармуша, история водителя автобуса, который писал стихи, потому что видел поэзию в будничном. Кстати, если окажетесь в автобусе, оплатите проезд бесплатной дебетовой картой ВТБ с кешбэком 2% в категории «Транспорт» и приглядитесь к водителю: вдруг он балуется хокку или складывает вирши?",img:"21_02.png",link:"https://www.kinopoisk.ru/film/954059/"},{date:new Date(2023,2,22),title:"Международный день таксиста",subtitle:"Прибудут быстро на вызов, повезут коротким или вашим любимым маршрутом, расскажут о своей жизни и жизни города или просто красноречиво помолчат: таксист — это давно не просто водитель машины, которая доставит тебя из точки А в точку Б, но ярчайший представитель городской культуры. Смотрим экшен-комедию «Такси» о том, как умение быстро и виртуозно ездить привело героя Сами Насери в полицию, и помним: оплачивать поездки можно бесплатной дебетовой картой ВТБ, получая кешбэк 2%.",img:"22_02.png",link:"https://www.kinopoisk.ru/film/14349/"},{date:new Date(2023,2,23),title:"День ОК!",subtitle:"Принято считать, что в этот день в 1839 году в газете «Бостонское утро» впервые опубликовали фразу «окей». С тех пор выражение, означающее, что всё хорошо, стало международным: его употребляют все, вне зависимости от национальной, языковой и географической принадлежности. Фильм на сегодня — «Окей, Лекси!», о голосовой помощнице, которая вмешивается в жизнь своего хозяина. Задача на сегодня: завести бесплатную дебетовую карту ВТБ, которая, в отличие от виртуальной киногероини, будет здорово помогать вам в повседневных делах.",img:"23_02.png",link:"https://www.kinopoisk.ru/film/1228236/"},{date:new Date(2023,2,24),title:"День вверх тормашками",subtitle:"Если бы такого дня не было, то его точно стоило бы придумать: в этот праздник принято фотографироваться стоя на голове и вверх ногами. Если кто-то на такую асану не способен, то можно просто перевернуть снимок, в очередной раз напомнив себе и окружающим, что мир не идеален и часто все бывает не так, как хочется, а наоборот. Впрочем, иногда кажется, что такой праздник можно отмечать не один день, а круглый год. Смотрим романтическую комедию, которая так и называется — «Верх тормашками» и вспоминаем про бесплатную дебетовую карту ВТБ, с которой все может встать на свои места и пройти как надо.",img:"24_02.png",link:"https://www.kinopoisk.ru/film/1540/"},{date:new Date(2023,2,25),title:"День чтений произведений Джона Толкина",subtitle:"Написано у мэтра много, так что в этот день можно просто начать читать и растянуть удовольствие на дни, месяцы и даже годы вперед. Дата выбрана неслучайно: по сюжету «Властелина колец» именно 25 марта пал Саурон — чем не повод для ознакомления с прозой гения? Сопроводить чтение можно просмотром трилогии про «Хоббита» и оформлением бесплатной дебетовой карты ВТБ: с ее возможностями все кольца мира доступны и никакие злые волшебники не страшны.",img:"25_02.png",link:"https://www.kinopoisk.ru/film/278522/"},{date:new Date(2023,2,26),title:"День одиночества",subtitle:"Это совсем не значит, что сегодня вам нужно расстаться с возлюбленными, перессориться с друзьями и на всякий случай выставить родственников из квартиры вон, чтобы в одиночку побродить по комнатам. Но это определенно день для того, чтобы заглянуть в себя, перезагрузить собственные мысли, перебрать приоритеты и обрести внутреннюю гармонию. Посмотрите фильм с Томом Хэнксом «Изгой» о том, как многому может научить одиночество, и запишите на листок то, что с этого дня будет важным для вас: люди, ощущения, принципы, наконец вещи. Среди последних, кстати, не забудьте упомянуть бесплатную дебетовую карту ВТБ, которая поможет вам легко решить повседневные бытовые вопросы.",img:"26_02.png",link:"https://www.kinopoisk.ru/film/627/"},{date:new Date(2023,2,27),title:"День театра",subtitle:"Этот праздник учредили в 1961 году по инициативе делегатов IX конгресса Международного института театра (МИТ) при ЮНЕСКО. С тех пор в мире этот день отмечают все, кто имеет хоть какое-нибудь отношения к театру, от актеров и постановщиков до декораторов, гардеробщиков и билетеров. В этом году праздник приходится на понедельник, когда в большинстве театров выходной. Но это не повод не прикоснуться к искусству: погружаемся в закулисную жизнь с кинокомедией Виктора Шамирова «Упражнения в прекрасном» — о том, как труппа гастролеров ездит по городам и весям с костюмной антрепризой, выясняя отношения в антрактах. А на выходные все же планируем поход на спектакль, приобретая билеты при помощи бесплатной дебетовой карты ВТБ с кешбэком до 30% за покупки, а также переводами без комиссии.",img:"27_02.png",link:"https://www.kinopoisk.ru/film/521647/"},{date:new Date(2023,2,28),title:"День рождения стиральной машины",subtitle:"Первая стиральная машина была запатентована 28 марта 1797 года и выглядела как простой деревянный бак с вращающийся рамой, но куда более удобный, чем стиральная доска. Однако не спешите посвящать сегодняшний день стирке. Лучше посмотрите фантастическую комедию «Всё везде и сразу», героиня которой, владелица прачечной, умудрилась оказаться в параллельных мирах то киноактрисой, то мастером кунг-фу. И подумать о покупке новой стиральной машины, оплатить которую можно бесплатной дебетовой картой ВТБ с выгодной программой лояльности «Мультибонус».",img:"28_02.png",link:"https://www.kinopoisk.ru/film/1322324/"},{date:new Date(2023,2,29),title:"День самопознания",subtitle:"Только не надо думать, что самопознание — это непременно попытка испытать себя, узнать, сколько дней без выходных ты сможешь работать и получится ли, например, отказаться от сна и еды. Вовсе нет: это время для осмысления себя, определения своих потребностей, установки новых целей. С этим прекрасно справляется героиня фильма «Ешь, молись, люби», которая в какой-то момент решает делать то, что ей хочется, и всем своим примером рекомендует. Смотрим кино и помним, что бесплатная дебетовая карта ВТБ — ваш ежедневный помощник в вопросах самопознания: с ней выгодно делать покупки с кешбэком до 30% у партнеров, без комиссии переводить деньги и оплачивать ЖКУ, наконец удовлетворить собственные капризы.",img:"29_02.png",link:"https://www.kinopoisk.ru/film/454522/"},{date:new Date(2023,2,30),title:"День спичечного кораблестроения",subtitle:"Рассказывают, что созданием миниатюрных копий крейсеров и фрегатов люди увлекались на протяжении тысяч лет — археологи при раскопках находили очень древние поделки. Поэтому без такого праздника не обойтись, как и без хобби. Даже если вам неинтересно клеить судна из спичек, то непременно найдётся что-то другое, что позволит замедлиться, отвлечься и выразить себя. Сегодня смотрим фантастику «Тайну железной двери», ее герой, школьник Толя, кораблей не мастерил, зато нашёл спичкам совсем неожиданное применение — стал с их помощью выполнять желания. Кстати, на такое способна и бесплатная дебетовая карта ВТБ, с ее достоинствами возможно невозможное.",img:"30_02.png",link:"https://www.kinopoisk.ru/film/42177/"},{date:new Date(2023,2,31),title:"День Эйфелевой башни",subtitle:"Достопримечательность французской столицы, символ романтики и любви, центр скопления туристов. «Железная дама» и «безобразный скелет» — для тех, кто ее недолюбливает. Ее официальное открытие случилось 31 марта 1889-го. Изначально планировалось, что башня будет временной конструкцией и станет всего лишь аркой входа на Всемирную парижскую выставку, но потом решили не сносить. О том, как мучительно ее возводили, смотрим байопик «Эйфель», — дела бы у Гюстава Эйфеля шли гораздо быстрее, если бы он был обладателем бесплатной дебетовой карты ВТБ с кешбэком за покупки и удобным совершением платежей по QR-коду через приложение ВТБ Онлайн.",img:"31_02.png",link:"https://www.kinopoisk.ru/film/1294875/"},{date:new Date(2023,3,1),title:"День птиц",subtitle:"Экологический праздник, призванный беречь птиц, масштабно отмечали еще в СССР: юные натуралисты вешали скворечники и кормушки. Сейчас в России про этот день и благосостояние пернатых не забывают орнитологи. А мы, вместе с Альфредом Хичкоком и самым знаменитым фильмом про птиц, спешим напомнить о том, что птички могут быть не так безобидны, но лучше с ними искать общий язык, чем враждовать. Приобрести фильм для просмотра можно при помощи бесплатной дебетовой карты ВТБ с кешбэком за покупки. Еще один совет на сегодня: раздобудьте кормушку.",img:"1_03.png",link:"https://www.kinopoisk.ru/film/559/"},{date:new Date(2023,3,2),title:"Международный день детской книги",subtitle:"Скромный, но важный праздник, возникший в день рождения Ханса Кристиана Андерсена. В этот день принято говорить о необходимости детской литературы, о ее участии в формировании интеллектуального и духовного нового поколения и отмечать избранных авторов за вклад в книгоиздание. Сегодня самое время пополнить домашнюю библиотеку новыми книгами, оплатив их при помощи бесплатной дебетовой карты ВТБ с кешбэком за покупки в разных категориях. А вечером смотрим «Прощай, Кристофер Робин» — драму о непростых отношениях Алана Милна и его сына, ставшего героем рассказов о Винни Пухе.",img:"2_03.png",link:"https://www.kinopoisk.ru/film/993579/"},{date:new Date(2023,3,3),title:"День водяного",subtitle:"Считается, что в этот день еще один этап наступления весны: если приблизиться к рекам и другим водоемам, то можно увидеть, как с треском ломается лед и вода выходит из берегов. В народе говорят, что все это не обходится без участия сказочного героя Водяного (он же Водопол, он же Переплут). Радуемся весне и смотрим «Аквамена» — фантастический боевик про еще одного жителя водной стихии, только из вселенной Marvel. А еще идем в магазин обновлять гардероб: рекомендуем завести бесплатную дебетовую карту ВТБ с кешбэком до 30% за покупки у партнеров — так шопинг окажется выгодным.",img:"3_03.png",link:"https://www.kinopoisk.ru/film/470178/"},{date:new Date(2023,3,4),title:"Международный день настройщиков фортепиано",subtitle:"Праздник тех, кто умеют обслуживать музыкальный инструмент, лишь с виду ориентирован на специалистов столь узкого профиля. На деле же он касается даже тех, кто к клавишам никогда не прикасался: этот день посвящен добрым и чутким людям, которые умеют слушать, слышать и быть бережными. Смотрим комедийную драму «Зеленая книга» о небезопасном путешествии пианиста и его телохранителя по южным штатам США, ставшую триумфатором «Оскара»-2019. И подумываем о том, чтобы записаться на уроки фортепианной игры и приобрести инструмент с помощью бесплатной дебетовой карты ВТБ с кешбэком до 30% на покупки у партнеров.",img:"4_03.png",link:"https://www.kinopoisk.ru/film/1108577/"},{date:new Date(2023,3,5),title:"День брюк клёш",subtitle:"Вообще-то фасон брюк типа «колокол» (по-французски «клёш») носили моряки, но мы-то, конечно, первым делом вспоминаем модников, рок-музыкантов, любителей ретро. В этот день смотрим драму «Лихорадка субботнего вечера» и обращаем внимание на знаменитую прогулку героя Джона Траволты под музыку Bee Gees в начальных титрах: так по-пижонски вышагивать могут красавчики, короли танцпола и владельцы бесплатной дебетовой карты ВТБ, наличие которой любому придаст уверенности в своих возможностях.",img:"5_03.png",link:"https://www.kinopoisk.ru/film/8132/"},{date:new Date(2023,3,6),title:"День боев на подушках",subtitle:"Отмечают этот праздник по всему миру — по-настоящему колошматят друг друга подушками. Есть, конечно, неписанные правила: наносить легкие удары, быть предупредительным и осторожным. О том, как эти правила нарушаются, смотрим в комедии «Цыпочка» — в сцене, где герой Роба Шнайдера эффектно раскидывает подружек подушками по комнате. Кстати, если ваши подушки изрядно потреплют в поединках, то купить новые можно при помощи бесплатной дебетовой карты ВТБ — кешбэк до 30% у партнеров сделают покупки неощутимыми для семейного бюджета.",img:"6_03.png",link:"https://www.kinopoisk.ru/film/314/"},{date:new Date(2023,3,7),title:"Всемирный день здоровья",subtitle:"Праздник, призванный напомнить про заботу о себе, своем физическом и ментальном здоровье и о важности его профилактики. В этот день делаем зарядку, употребляем полезную пищу, соблюдаем режим и смотрим фильм «Аритмия» — о том, как медики, расставшись, не могут друг без друга жить. Но заботимся о себе не только сегодня, но и в будущем: приобрести запас витаминчиков, карту в фитнес-клуб и путевку в теплые края на грядущий отпуск можно при помощи бесплатной дебетовой карты ВТБ — с кешбэком в самых популярных категориях и до 30% за покупки у партнеров вы своих трат почти не заметите.",img:"7_03.png",link:"https://www.kinopoisk.ru/film/992605/"},{date:new Date(2023,3,8),title:"День российской анимации",subtitle:"Все мы любим мультфильмы, каждый из нас смотрел их в детстве, многие смотрят и сейчас, а некоторые даже мечтали бы научиться их делать. Сегодня посвятим вечер отечественной анимации, выбираем из «Смешариков», шедевров «Союзмультфильма» или полнометражных историй о Кощее, Иван Царевиче и Сером Волке или Трех богатырях. Кстати, если вы все же решите отправиться на курс по анимации, то оплатить его можно с помощью бесплатной дебетовой карты ВТБ: все пройдет легко, выгодно и волшебно, как в вашем любимом мультике.",img:"8_03.png",link:"https://www.kinopoisk.ru/series/256124/"},{date:new Date(2023,3,9),title:"День восходящего солнца в шкафной стране",subtitle:"Еще один праздник, напоминающий о приходе весны: зимняя одежда убирается подальше в шкаф, вместо нее можно достать более легкую. Сегодня — удачное время для обновок: на шопинг отправляемся с бесплатной дебетовой картой ВТБ, среди многочисленных достоинств которой — кешбэк до 30% за покупки у партнеров и 2% на самое необходимое в популярных категориях (супермаркеты, рестораны и транспорт). А вечером смотрим «Хроники Нарнии», где шкаф оказался переходом в целое сказочное государство.",img:"9_03.png",link:"https://www.kinopoisk.ru/film/48162/"},{date:new Date(2023,3,10),title:"День составления загадочных словарей",subtitle:"Обычно в этот день рекомендуется завести собственный словарик и заносить туда необычные, странные и редкие слова, в которые вы, тем не менее, вкладываете больше смысла, чем кто-либо другой. Покупаем для этого ежедневник с помощью бесплатной дебетовой карты ВТБ, а вечером смотрим «Игры разумов» — драму об оксфордском профессоре и заключенном из психиатрической клиники: вместе они составляют первый в мире словарь английского языка, который сегодня не кажется нам уже таким загадочным.",img:"10_03.png",link:"https://www.kinopoisk.ru/film/996027/"},{date:new Date(2023,4,10),title:"",subtitle:"",img:"",link:""}],footer:{text:"Доходность до 8,3% годовых в рублях по вкладу «Ценность достижений» для владельцев пакетов «Привилегия-Мультикарта», «Привилегия New», «Прайм New», «Прайм+» достигается за счёт начисления эффективной ставки 8,3% годовых (эффективная ставка — минимальная гарантированная ставка при условии выбора способа уплаты процентов, уплаченные проценты капитализируются) с учётом капитализации процентов на срок 370 дней. Минимальная сумма вклада и минимальный размер неснижаемого остатка — 2 500 000 ₽. При открытии вклада на срок 370 дней эффективная ставка — 8,3% годовых, номинальная — 8%  годовых. Пополнение предусмотрено на новые денежные средства, частичные снятия суммы вклада предусмотрены в пределах неснижаемого остатка. Продление договора не предусмотрено. При досрочном расторжении вклада проценты по вкладу уплачиваются по ставке вклада «до востребования», действующей в банке на момент досрочного востребования вклада. Условие капитализации процентов при досрочном расторжении вклада не применяется.\u2028Вклад «Ценность достижений» доступен для открытия только на новые денежные средства.",links:[{line:"Генеральная лицензия Банка России № 1000",link:""},{line:"Политика конфиденциальности",link:""}]}}},beforeMount(){this.currentDate=new Date},methods:{clickDate(t){this.isActive!==t?this.isActive=t:this.isActive=!1},hasHidden(t){return this.currentDate-t<=0},hasActive(t){return this.isActive===t},clickMore(t){this.isModal=!this.isModal,this.isActive=!this.isActive,this.infoModal=t},closeModal(){this.isModal=!this.isModal}}},d=(0,n.Z)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"calendar"},[e("div",{staticClass:"calendar__container"},[e("a",{attrs:{href:"https://www.vtb.promo/daily?code=media_kinopoisk_dbdk&utm_source=kinopoisk&utm_medium=media&utm_campaign=media_dbdk_kinopoisk_link_logo_cpc_rf_p1_feb_apr\n",target:"_blank"}},[e("img",{staticClass:"calendar__logo",attrs:{src:t.getStaticUrl("logo.svg"),alt:"calendar-logo"}})]),t._v(" "),e("div",{staticClass:"calendar__photo"}),t._v(" "),e("div",{staticClass:"calendar-main"},[e("div",{staticClass:"calendar-main__title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"calendar-main__subtitle"},[t._v(t._s(t.subtitle))])]),t._v(" "),e("div",{staticClass:"calendar-dates"},[e("div",{staticClass:"calendar-dates-inner"},t._l(t.dates,(function(i,a){return e("div",{key:a,staticClass:"calendar-dates__container"},[e("div",{staticClass:"calendar-dates__btn calendar-dates-btn",class:{"btn--hidden":t.hasHidden(i.date),"btn--active":t.hasActive(a)},on:{click:function(e){!t.hasHidden(i.date)&&t.clickDate(a)}}},[t.hasHidden(i.date)?e("img",{staticClass:"calendar-dates-btn__img",attrs:{src:t.getStaticUrl("closed.svg"),alt:"calendar-dates-btn-closed"}}):t._e(),t._v(" "),e("div",{staticClass:"calendar-dates-btn__info"},[e("div",{staticClass:"calendar-dates-btn__date"},[t._v(t._s(i.date.getDate()))]),t._v(" "),e("div",{staticClass:"calendar-dates-btn__month"},[t._v("\n                    "+t._s(t.monthNames[i.date.getMonth()].toLowerCase())+"\n                  ")])]),t._v(" "),t.hasActive(a)?e("div",{staticClass:"calendar-dates-btn--more",on:{click:function(e){return e.stopPropagation(),t.clickMore(i)}}},[e("img",{attrs:{src:t.getStaticUrl("arrow-right.svg"),alt:"calendar-dates-btn-arrow-right"}})]):t._e()])])})),0)]),t._v(" "),e("div",{staticClass:"calendar-footer"},[e("div",{staticClass:"calendar-footer__text"},[t._v(t._s(t.footer.text))]),t._v(" "),e("div",{staticClass:"calendar-footer__nav calendar-footer-nav"},[t._l(t.footer.links,(function(i,a){return e("a",{key:a,staticClass:"calendar-footer-nav__link btn--underlining",attrs:{href:i.link,target:"_blank"}},[t._v("\n              "+t._s(i.line)+"\n            ")])})),t._v(" "),e("div",{staticClass:"calendar-footer-nav__rating"},[t._v("18+")])],2)])]),t._v(" "),e("div",{staticClass:"calendar-present"},[e("img",{staticClass:"calendar-present__photo",attrs:{src:t.getStaticUrl("presentBig.png"),alt:"presentBig-photo"}}),t._v(" "),e("img",{staticClass:"calendar-present__photo",attrs:{src:t.getStaticUrl("presentSmall.png"),alt:"presentBig-photo"}})])]),t._v(" "),t.isModal?e("popup-block",{attrs:{data:t.infoModal},on:{closeModal:t.closeModal}}):t._e()],1)}),[],!1,null,null,null).exports;a.ZP.component("popup-block",l),a.ZP.component("calendar-block",d);var p=i(278),c=i.n(p),u={desktopOnly:"(min-width: 1024px)",tablet:"(max-width: 1023px)",mobile:"(max-width: 599px)",mobileSmall:"(max-width: 359px)"},_={name:"page-main"},m={components:{PageMain:(0,n.Z)(_,(function(){var t=this._self._c;return t("div",{staticClass:"page-main"},[t("calendar-block")],1)}),[],!1,null,null,null).exports},created(){this.onWindowResize(),window.addEventListener("resize",this.onWindowResize)},destroyed(){window.removeEventListener("resize",this.onWindowResize)},methods:{onWindowResize(){this.$store.commit("setLessVars",u)}}},w=(0,n.Z)(m,(function(){var t=this._self._c;return t("div",{staticClass:"app"},[t("page-main")],1)}),[],!1,null,null,null).exports,k=i(629);function v(t){return JSON.parse(JSON.stringify(t))}function g(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}a.ZP.use(k.ZP);var h=new k.ZP.Store({state:{bunker:{},windowWidth:0,windowHeight:0,lessVars:null,serverTime:null,user:null},mutations:{setBunker(t,e){t.bunker=v(e)},setServerTime(t,e){t.serverTime=e},setUser(t,e){t.user=v(e)},setLessVars(t,e){t.lessVars=v(e)},setWindowSize(t,e){let{width:i,height:a}=e;t.windowWidth=i,t.windowHeight=a}},getters:{isAuthorized(t){return!!t.user.isAuthorized},hasSubscription(t){return!!t.user.integrations?.items?.some((t=>"yandex"===t.service&&t.subscription))},currentYear(t){return new Date(1e3*t.serverTime).getFullYear()},isDesktopOnly(t){return!!window.matchMedia(t.cssVars.desktopOnly).matches},isTablet(t){return!!window.matchMedia(t.cssVars.tablet).matches},isMobile(t){return!!window.matchMedia(t.cssVars.mobile).matches},isMobileSmall(t){return!!window.matchMedia(t.cssVars.mobileSmall).matches}}});a.ZP.mixin({methods:{reachGoal:function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.ym&&window.ym(null,"reachGoal",t,e)},getStaticUrl:function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=`${window.ASSETS_PATH}/static/${t}`;return e?`url(${i})`:i},bem(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=[t];for(const[a,s]of Object.entries(e))!0===s?i.push(`${t}_${g(a)}`):(s||0===s)&&i.push(`${t}_${g(a)}_${g(s)}`);return i.join(" ")}}}),h.commit("setBunker",window.BUNKER),h.commit("setServerTime",window.SERVER_TIME),window.USER&&h.commit("setUser",function(t){const e=new URL(window.location.href).searchParams.get("_subscription");return e?(t=>({id:12345678,displayName:"TestUser",firstName:"Иван",lastName:"Иванов",messagesCount:0,img:{x1:"https://avatars.mds.yandex.net/get-kino-vod-users-avatar/27708/21213-11.jpg/40x40",x2:"https://avatars.mds.yandex.net/get-kino-vod-users-avatar/27708/21213-11.jpg/80x80"},integrations:{items:[{service:"yandex",subscription:t,uid:0x403baa155014e,login:"test@example.com",name:"test@example.com",email:"test@example.com",billingFeatures:[]}],stats:{total:1,limit:10,offset:0}},isAuthorized:!0}))("1"===e):t}(window.USER)),a.ZP.config.productionTip=!1,new a.ZP({el:"#app",store:h,router:c(),render:t=>t(w)})},278:function(){}},i={};function a(t){var s=i[t];if(void 0!==s)return s.exports;var n=i[t]={exports:{}};return e[t](n,n.exports,a),n.exports}a.m=e,t=[],a.O=function(e,i,s,n){if(!i){var o=1/0;for(p=0;p<t.length;p++){i=t[p][0],s=t[p][1],n=t[p][2];for(var l=!0,r=0;r<i.length;r++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](i[r])}))?i.splice(r--,1):(l=!1,n<o&&(o=n));if(l){t.splice(p--,1);var d=s();void 0!==d&&(e=d)}}return e}n=n||0;for(var p=t.length;p>0&&t[p-1][2]>n;p--)t[p]=t[p-1];t[p]=[i,s,n]},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="../",function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,n,o=i[0],l=i[1],r=i[2],d=0;if(o.some((function(e){return 0!==t[e]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(r)var p=r(a)}for(e&&e(i);d<o.length;d++)n=o[d],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(p)},i=self.webpackChunk=self.webpackChunk||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var s=a.O(void 0,[736],(function(){return a(705)}));s=a.O(s)}();
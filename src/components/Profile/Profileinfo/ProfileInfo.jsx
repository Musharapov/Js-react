import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={s.content}>
        <div>
            <img
                src='https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/731c4031-7389-44f4-8c15-f9f4e3b0ed90/300x450'/>
            <button>О фильме
                Год производства
                2021
                Страна
                США
                Жанр
                фантастика, боевик, приключения, фэнтези
                слова
                Слоган
                «The Multiverse Unleashed»
                Режиссер
                Джон Уоттс
                Сценарий
                Крис МакКенна, Эрик Соммерс, Стэн Ли, ...
                Продюсер
                Виктория Алонсо, Ави Арад, Митчелл Белл, ...
                Оператор
                Мауро Фиоре
                Композитор
                Майкл Джаккино
                Художник
                Arnela Connell, Даррен Гилфорд, Лорен Абиунесс, ...
            </button>
        </div>
    <div>
        Человек-паук: Нет пути домой (2021)
    </div>

</div>
)
}

export default ProfileInfo;
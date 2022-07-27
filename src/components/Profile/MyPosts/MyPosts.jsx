import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div>
      Написать коментарий
      <div>
        <textarea></textarea>
        <button>Отправить</button>

      </div>
      <div className={s.posts}>
        <Post message='Здорова. Что делаешь' likesCount="Ренат"/>
        <Post message="Хай бухаю с Равилем" likesCount="Тимур"/>
        <Post message="Го учить реакт" likesCount="Ренат"/>
        <Post message="Сейчас иду" likesCount="Тимур"/>
        <Post message="Меня эти post заебали не х не получается" likesCount="Ренат"/>
        <Post message="Сейчас посмотрю отпишу" likesCount="Тимур"/>
      </div>
    </div>
  )

}

export default MyPosts;
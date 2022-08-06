import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
 let posts= [
     {id: 1, message: 'Здорова. Что делаешь', likesCount:112},
     {id: 2, message: 'Хай бухаю с Равилем', likesCount:112},
 ]
    let postsElements = posts.map(p =><Post message= {p.message} likesCount={p.likesCount}/>)

  return (
    <div>
      Написать коментарий
      <div>
        <textarea></textarea>
        <button>Отправить</button>

      </div>
      <div className={s.posts}>
          {postsElements}
        <Post message="Го учить реакт" likesCount="Ренат"/>
        <Post message="Сейчас иду" likesCount="Тимур"/>
        <Post message="Меня эти post заебали не х не получается" likesCount="Ренат"/>
        <Post message="Сейчас посмотрю отпишу" likesCount="Тимур"/>
      </div>
    </div>
  )

}

export default MyPosts;
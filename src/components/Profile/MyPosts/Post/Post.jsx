import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  console.log(props.message);

  return (
    <div className={s.item}>
      <img src='https://st.kp.yandex.net/images/movies/awardMtv.png'/>
      {props.message}
          <div>
        <span>Имя:</span> {props.likesCount}
      </div>
    </div>

  )

}

export default Post;
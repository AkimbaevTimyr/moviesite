import React, {FC} from 'react'
import styles from "./style.module.css"
import {Link} from 'react-router-dom'
import { getTvShowsById } from '../../store/actions/TvShowActionCreator';
import { useAppDispatch } from '../../hooks/redux';
import { getMoviesById } from '../../store/actions/MovieActionCreator';

interface FilmItemProps {
    id: number;
    img: string | null;
    title: string;
    vote_average: number;
    release_date: string;
    type: string;
}

const FilmItem: FC<FilmItemProps> = ({id,img, title, vote_average, release_date, type}) => {
    const dispatch = useAppDispatch()
    const click = () =>{
        if(type == 'фильм'){
            dispatch(getMoviesById(id))
        }else{
            dispatch(getTvShowsById(id))
        }
    }
  return (
    <div className={styles.item}>
        <div onClick={()=> click()} className={styles.img}>
            {img == null ? (<img src='https://st.kp.yandex.net/images/film_big/4781063.jpg'/>) : (<Link  to={type == 'фильм' ? `/movie/${id}` : `/tv/${id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${img}`}
                    />
                </Link>)}
            <p className={styles.rating}>{vote_average.toFixed(1)}</p>
        </div>
        <div className={styles.descr}>
            <div className={styles.header}>
                {title}
            </div>
            <div className={styles.year}>
                {release_date?.substring(0,4)}, {type}
            </div>
        </div>
    </div>    
  )
}

export default FilmItem
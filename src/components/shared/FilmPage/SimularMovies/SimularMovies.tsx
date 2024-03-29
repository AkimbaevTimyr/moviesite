import React, { FC, memo } from 'react'
import { useGetSimularQuery } from '../../../../services/MovieService'
import { IMovie } from '../../../../types/MoviesTypes';
import FilmItem from '../../FilmItem/FilmItem'
import styles from './style.module.css'

interface SimularMoviesProps {
    id: string | undefined;
    header: string;
    name: string | null;
}

const SimularMovies: FC<SimularMoviesProps> = memo(({ id, header, name }) => {
    const { data, isLoading, isError } = useGetSimularQuery({ id: Number(id), name })
    return (
        <div className={styles.items}>
            <div className={styles.header}>
                {header}
            </div>
            <div className={styles.simularMovies}>
                {data?.results.slice(0, 4).map((el: IMovie) => (
                    <FilmItem key={el.id} id={el.id} img={el.poster_path} title={el.title || el.name} vote_average={el.vote_average} release_date={el.release_date || el.first_air_date} type={name} />
                ))}
            </div>
        </div>
    )
})

export default SimularMovies
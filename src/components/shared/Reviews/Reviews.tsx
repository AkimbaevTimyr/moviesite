import React, { FC } from 'react'
import { useGetReviewsQuery } from '../../../services/MovieService'
import ReviewsItem from './ReviewsItem';
import styles from './style.module.css'

interface ReviewsProps {
    id: string | undefined;
    type: string;
}

const Reviews: FC<ReviewsProps> = ({id, type}) => {
    const {data, isLoading, error} = useGetReviewsQuery({type, id})
    console.log(data?.results)
    return (
       <div className={styles.container}>
            <div className={styles.header}>Отзывы зрителей</div>
            {data?.results.map((el: any) => (
                <ReviewsItem content={el.content} author={el.author} created_at={el.created_at} />
            ))}
        </div>
    )
}

export default Reviews
import React,{ FC } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import Loading from '../../shared/UI/Loading/Loading'
import PersonalFilms from './PersonalFilms/PersonalFilms'
import PersonalSeries from './PersonalSeries/PersonalSeries'
import UpcomingPremiers from './UpcomingPremires/UpcomingPremiers'
import styles from './style.module.css'

const Main: FC = () => {
  const { isLoading } = useAppSelector(state => state.movies)
  if (isLoading) {
    return <Loading />
  }
  return (
    <div data-testid='main-page' className={styles.main}>
      <PersonalFilms />
      <PersonalSeries />
      <UpcomingPremiers />
    </div>
  )
}



export default Main
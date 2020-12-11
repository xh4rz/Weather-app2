import React from 'react'
import Forecast from './Forecast'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
	{ hour: 18, state:"sunny", temperature:17, weekDay:"Jueves" },
	{ hour: 6, state:"cloud", temperature:18, weekDay:"Viernes" },
	{ hour: 12, state:"fog", temperature:18, weekDay:"Viernes" },
	{ hour: 18, state:"cloudy", temperature:19, weekDay:"Viernes" },
	{ hour: 14, state:"rain", temperature:17, weekDay:"Sábado" },
	{ hour: 20, state:"rain", temperature:17, weekDay:"Sábado" },
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)
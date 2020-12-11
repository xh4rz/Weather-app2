import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    { hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
    { hour: 6, state: "cloud", temperature: 18, weekDay: "Viernes" },
    { hour: 12, state: "fog", temperature: 18, weekDay: "Viernes" },
    { hour: 18, state: "cloudy", temperature: 19, weekDay: "Viernes" },
    { hour: 14, state: "rain", temperature: 17, weekDay: "Sábado" },
    { hour: 20, state: "rain", temperature: 17, weekDay: "Sábado" },
]

test('Forecast render', async () => {
    // ¿Cómo encontrar los items?
    // findAllByTestId nos va a permitir encontrar cada item con esa marca
    const { findAllByTestId } = render(
        <Forecast
            forecastItemList={forecastItemList} />)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(6)

})

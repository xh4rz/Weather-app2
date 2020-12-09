import React from 'react'
import CityList from './CityList'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "Buenos Aires", country: "Argentina"},
    { city: "Bogotá", country: "Colombia"},
    { city: "Madrid", country: "España"},
    { city: "Ciudad de México", country: "México"},
]

export const CityListExample = () => <CityList cities = {cities} />
import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

//TDD
test("Weaher render sunny", async () => {
    // AAA Arrange Act Assert
    const { findByRole } = render(<Weather temperature={10} state="sunny"/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})
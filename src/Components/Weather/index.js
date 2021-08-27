import React from 'react'

export default function Weather({ weather, city }) {
    return (
        <div>
            <p class="h2">This is the current weather of {city}:</p>
        </div>
    )
}

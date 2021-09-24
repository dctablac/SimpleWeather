// Temperature conversion functions

// Format temp for display
export function formatTemp(temp, unit='K') {
    if (unit === 'K') {
        return `${kelvinToFahrenheit(temp)}<sup>o</sup> F`
    } else if (unit === 'F') {
        return `${celsiusToFahrenheit(temp)}<sup>o</sup>${unit}`;
    } else { // 'C'
        return `${fahrenheitToCelsius(temp)}<sup>o</sup>${unit}`;
    }
}

function kelvinToFahrenheit(kTemp) {
    return Math.round(((kTemp - 273.15) * (9/5)) + 32)
}

function fahrenheitToCelsius(fTemp) {
    return Math.round((fTemp - 32) * 5/9)
}

function celsiusToFahrenheit(cTemp) {
    return Math.round(((9/5) * cTemp) + 32) 
}
import React from 'react';

export default function MoonInfo({ astroInfo, currentData }) {

    const moonPhase = [
        {
            title: 'Third Quarter',
            icon: <img src="data:image/png;base64,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"></img>
        },
        {
            title: 'Waning Gibbous',
            icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAGXUlEQVRoge2aXWwU1xXHf+fush8mEExqkzZ5qAQkJVJatSiVLL420Lp1C32IQp9IhKoI2whHoSRqE0QziWlpA7IimyRbq62iNA8NiDxUTQmElKXkQwgQpZESAaaq1EYpDtQBHK+967mnD7uL1/Z+zMyupVTK/+nunXPu/P8zd849596Fz/HZgtRroOWduxrDjK8CXabKXQILgWaF2fkbfQpcUviHCO+L1bc0rsdSzzqf1OP+NQlp6+qNprND96vKgyKsAUI+h3AR3hD4fSw878DBvofHgnIJJKRla088NjLcaYVtAl/Kd48B74pyVI383QrnrIb/k3bnDzcy1OCasW9Z5GmBu8oM+yHCHtI2mXrRGZ1xIas6n2oTlT5yUwfgjAhJjdp91aZJy9aeeCQ9/AeBH1QwGxB0y9Hkk4f88PIsJLHRiUlMehTpzHedVdHHj73ws9dB1Os46zY5DddM6F1Bv1rRUPW5eKRxm9fp5knImod+vsANu68BS4FRRZ6QW92+lOOMe/GfisRmZxHWnAFuqmJ6MoJdezjpDFYbs6qQRIfzZTBvAIuAAYxdn3re+Zs3ypXGfWonyHYPphfAtqaSzj8rGZlKF1d0/aIJzOvAItBTEeyyeogACNvoboX/ejBdDOZIYrNzayWjskISG51YKDt+ELgTOJnNxFZ7ecVecaT/p1eBpEfzhVjzx7au3mg5g7JCJCY95L6JAXdW+Ptv/+4n1/1RrQ418rIP83vS2U/2lLtY8hvJh9g/A6MY21Kv6VQKiY6nT5F7YJ5gjHznL8/vODytf2pHy9aeeH6dQJTtMykCAJH9fsyt1b2lptg0IbGR4U5yi91Z/aLtDc7QG9TqX326LE5nrnZM7ZwkpK2rN6rCjwFU9PGg64QfDOuCUwojvpxEH536ViYJSWeH7gduA87kVuyZx+n+9qwoJ3y63T6SGbqvuGOSEFV5EECEpJ+0o1ao8J5vJ5ENxT9vCFneuasxn4qPadTuq52edxi46NdHoLWty5lbNEYOuaKIEMo79Sp2vLNS30KAcDobWln4MTG11C4HEEjVzswf1A0kBFE7XYgiS/Kts7USC4DLQZzUyFcK7RtCBBYDuCFzvnZePpFhOJCfckehWfRGuAUgPuZeqpmYT+RL2yBr1vxCozj83gQw91rAp1M7Pg3gMz1q/b+jWMgwwLW5VcvPmcLsAD7XCo2i8JuLHOloaEHtnPwhsdGJAeEArlcKjQkhwgBAyLV3lHCYUbhzInMCOQoXCs2J8Cu8n299rUZevhEay9wSxE+VDwrtom9E3gZQ4d5aifmFhGRhdasSfsjxQntCSNRNAS7QsrxzV2PN7PxAAwnJxme5N4qyG0LyieIRIBrW8R/WgZ5n2IntV+9QDh/sc0pELUCEl/JW7aB1O3KoBoHK26elnSbtwEwSEgvPOwB8CHz93vadbTWx84j1652Iwjd9uv276Yp9tbhjkpCDfQ+PIewBUNFfJhwnSGz3hcH5ZqlAgx8fVXlm/34nU9w3PUVJ2yQwANzNR+aRmlh6gAirfLqca4jc3D+1c5qQ1IvOqKBbcndh5+pNzjeCUfQGRdb7M5ctpY4aSiaNR5NPHkL1OSBqjdnX2uE0ByVaCSs3dy8R1PODUuhLvbDjSKlrZbPfeKRxG3ASWJhBXlv2o18FSyMqQKxuqG5VMOZE8xX7WPnLFZDY5HwBY94ityN/OoL9Xr125BOPOPN01FyUouKoAi6GxkPL3vzN9rJFX8V6JNXvXAb7XeACsDSDeade34yOmse8iFDlvAmZNZVEgMejt9YOpzmD+RNwDzCmIjuG3eZnT/e3Z73RnoyV7d2LjdEzaJUaRDjhhsPrjvc98XG1MT1ViIeTzmB81rwVwF4gKqrPzDGXTic6utf6zQBaH9g924geqCJCFXqbLtuVXkRAgOPp1Zu7W63VveR3XYCzivw6lnVfOfRbp+JR2rpNTsN1Y14B1lYwO4fIlnLRqRwC5VNtXb3RdOZqB6KPArcDKGQEToC8Kcp7Ku75UCjy0fzBzPWPb6NBx+TbotJNLnCUwr9UZXdD5Ob+IP+AqPkvHCOZofsQ2SDQiv9ydRzlEMLLTVfsq1PTDj+oW4bb1uXMHcnIKgMrVGQJuePsJoU5+RtdBwYRBlT5QJDj2Uzk2EycTX6OzwL+B5EDNnZJcvCpAAAAAElFTkSuQmCC"></img>
        },
        {
            title: 'Full Moon',
            icon: <img src="data:image/png;base64,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"></img>
        },
        {
            title: 'Waxing Gibbous',
            icon: <img src="data:image/png;base64,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"></img>
        },
        {
            title: 'First Quarter',
            icon: <img src="data:image/png;base64,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"></img>
        },
        {
            title: 'Waxing Crescent',
            icon: <img src="data:image/png;base64,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"></img>
        },
        {
            title: 'New Moon',
            icon: <img src="data:image/png;base64,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"></img>
        },
        {
            title: 'Waning Crescent',
            icon: <img src="data:image/png;base64,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"></img>
        },
        {
            title: 'Last Quarter',
            icon: <img src="data:image/png;base64,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"></img>
        }
    ]

    function getMoonPhase(phase) {
        let moonPhaseIcon = moonPhase.find(m => m.title === phase)
        return moonPhaseIcon.icon
    }

    return <div className={currentData['is_day'] ? 'moonInfo-container' : 'moonInfo-container night-border'}>
        <span className='moonrise-moonset-title'>Moonrise</span>
        <div className='moon-rise'>
            <img className='moon-icon' src="https://cdn-user-icons.flaticon.com/55925/55925575/1643832041416.svg?token=exp=1643832947~hmac=c44a102951b0f591b8fb1d9fd57502ef" alt="" />
            <span className='moonrise-moonset-time'>{astroInfo.moonrise}</span>
        </div>

        <span className='moonrise-moonset-title'>Moonset</span>
        <div className='moon-set'>
            <img className='moon-icon' src="https://cdn-user-icons.flaticon.com/55925/55925575/1643832169161.svg?token=exp=1643833072~hmac=c1080f64778bcb7fdf0b2f718346deb2" alt="" />
            <span className='moonrise-moonset-time'>{astroInfo.moonset}</span>
        </div>
        <span className='moonrise-moonset-title'> Moon Phase</span>
        <div className='moon-phase'>
            {getMoonPhase(astroInfo['moon_phase'])}
            {astroInfo['moon_phase']}

        </div>
    </div>
}

import data from '../data.json' assert {type: 'json'};

const Data = data

const weekly = document.querySelector('.weekly')
const daily = document.querySelector('.daily')
const monthly = document.querySelector('.monthly')

const ranges = [weekly, daily, monthly]

weekly.addEventListener('click', function () {
    timeRange('weekly', 'Last Week - ')
})

daily.addEventListener('click', function () {
    timeRange('daily', 'Yesterday - ')
})

monthly.addEventListener('click', function () {
    timeRange('monthly', 'Last Month - ')
})


function timeRange(timeframe, text) {
    Data.forEach(element => {
        let current = element.timeframes[timeframe].current
        let previous = element.timeframes[timeframe].previous
        let cardName = element.title.toLowerCase()

        let oldCurrent = document.querySelector(`.${cardName} .current`)
        let oldPrevious = document.querySelector(`.${cardName} .previous`)

        if (current <= 1) {
            oldCurrent.textContent = current + 'hr'
        } else {
            oldCurrent.textContent = current + 'hrs'
        }

        if (previous <= 1) {
            oldPrevious.textContent = text + previous + 'hr'
        } else {
            oldPrevious.textContent = text + previous + 'hrs'
        }

        ranges.forEach((range) => {
            range.classList.remove('selected')
        })
        
        document.querySelector(`.${timeframe}`).classList.add('selected')
    });
}

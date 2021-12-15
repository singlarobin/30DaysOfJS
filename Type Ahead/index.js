const suggestionList = document.querySelector('.suggestion');
const inputSearch = document.querySelector('input[type="text"]');
const cities = [];

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const fetchCities = () => {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => cities.push(...data));
}

const findMatches = (matchWord, cities) => {
    const regex = new RegExp(matchWord, 'gi');
    return cities.filter(place => place.city.match(regex) || place.state.match(regex));
}

const numberWithCommas = num => {
    num = num.toString();
    let pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(num))
        num = num.replace(pattern, "$1,$2");
    return num;
}


const handleInputChange = e => {
    const matchedArray = findMatches(e.target.value, cities);
    console.log(matchedArray);
    const html = matchedArray.map(place => {
        const regex = new RegExp(e.target.value, 'gi');
        const city = place.city.replace(regex, `<span class='highlight'>${e.target.value}</span>`);
        const state = place.state.replace(regex, `<span class='highlight'>${e.target.value}</span>`);
        const population = numberWithCommas(place.population)
        return `<li>
            <span>${city}, ${state}</span>
            <span class='population'>${population}</span>
        </li>`
    }).join('');
    suggestionList.innerHTML = html;
}

fetchCities();
inputSearch.addEventListener('input', handleInputChange);
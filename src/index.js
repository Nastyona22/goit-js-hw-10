import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { previewMarkupCountries, fullMarkup } from './markupCountries'

const DEBOUNCE_DELAY = 300;

const refs = {
    inputQuery: document.querySelector("#search-box"),
    countryList: document.querySelector('.country-list'),
};


const searchCountry = event => {
    event.preventDefault();

    const country_typed = event.target.value;
    
    
    const country = country_typed.trim().toLowerCase();
    console.log(country);
   
    if (!country) {
        refs.countryList.innerHTML = " ";
        return;
    }
    fetchCountries(country)
        .then(data => {
            if (data.length === 1) {
                onSuccess(data);
            } else if (data.length >= 2 && data.length <= 10) {
                console.log(data.length);
               countryList(data);
            } else Notify.info(`Too many matches found. Please enter a more specific name.`)
        })  
        .catch(onError);
 
}

function onSuccess(data) {
    const markup = fullMarkup(data[0]);
    refs.countryList.innerHTML = markup;
}

function countryList(data) {
    refs.countryList.innerHTML = ' ';
    data.map(country => {
        const markup = previewMarkupCountries(country);
        refs.countryList.insertAdjacentHTML("beforeend",markup);
    });
}

function onError(error) {
    Notify.warning('Oops, there is no country with that name')
    console.log(error.message);
    refs.countryList.innerHTML = '';
}


refs.inputQuery.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));


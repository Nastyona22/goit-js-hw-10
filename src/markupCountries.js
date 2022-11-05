function previewMarkupCountries({ name, flags }) {
    return`
     <li class="js-country-main-info">
        <img src="${flags.svg}" class ="js-country-flag"  width="30px" height= "20px" alt="flaf of country"/>
        <p class="js-country__name"> ${name.official}</p>
    </li>`
    
}



function fullMarkup({ name, capital, population, flags, languages }) {
    const valueLang = Object.values(languages).join(', ');
  

    return /*html*/ `
    <li class="js-country-main-info">
        <img src="${flags.svg}" class ="js-country-flag" width="45px" height="30px" alt="flaf of country"/>
        <p class="js-country__name"> ${name.official}</p>
    </li>

    <li class="js-country-descr">
        <p class="capital"><span class="js-country-descr__title">Capital:</span>  ${capital}</p>
        <p class="population"><span class="js-country-descr__title">Population:</span>  ${population}</p>
        <p class="languages"><span class="js-country-descr__title">Languages:</span> ${valueLang}</p>
    </li>`
};
         
   
export { previewMarkupCountries, fullMarkup };
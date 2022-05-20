const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  //   console.log(countries);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
  //   console.log(country[0]);
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
};

// Orginal Method

// const getCountryHTML = (country) => {
//   return `
//     <div class = "my__country">
//     <h2>
//     Country Name :${country.name.common}, & Official Name is : ${country.name.official}
//     </h2>
//     <img src = "${country.flags.svg}" >
//     </div>
//     `;
// };

// //Method 01(Destructuring Method)
// const getCountryHTML = (country) => {
//   const { name, flags, continents, area, region } = country;

//   //   That Means I am Declaring a variable (name,flags,area etc) which's Value is the Value of Country Object.

//   //   console.log(name);
//   //   console.log(country);

//   return `
//     <div class = "my__country">
//     <h2>
//     Country Name :${name.common}
//     </h2>
//     <h3>
//     Official Name is : ${name.official}
//     </h3>

//     <p> Continent : ${continents}</p>

//     <h4> Area : ${area}</h4>

//     <h4> Region : ${region}</h4>

//     <img src = "${flags.svg}" >
//     </div>
//     `;
// };

//Method 02
const getCountryHTML = ({ name, flags, continents, area, region }) => {
  //   console.log(name);
  //   console.log(country);

  return ` 
      <div class = "my__country">
      <h2>
      Country Name :${name.common}
      </h2>
      <h3>
      Official Name is : ${name.official}
      </h3>
  
      <p> Continent : ${continents}</p>
  
      <h4> Area : ${area}</h4>
  
      <h4> Region : ${region}</h4>
      
      <img src = "${flags.svg}" > 

      
      </div> 
      `;
};

loadCountries();

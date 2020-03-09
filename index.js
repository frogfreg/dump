axios
  .get("https://swapi.co/api/planets/")
  .then(({ data }) => {
    for (let planet of data.results) {
      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  .then(({ data }) => {
    for (let planet of data.results) {
      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  .catch(e => {
    console.log("something went wrong");
    console.log(e);
  });

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", () => {
//   console.log("first request worked!");
//   const data = JSON.parse(firstReq.responseText);
//   const filmUrl = data.results[0].films[0];
//   const filmReq = new XMLHttpRequest();
//   filmReq.addEventListener("load", () => {
//     console.log("Second request worked");
//     const filmData = JSON.parse(filmReq.responseText);
//     console.log(filmData.title);
//   });
//   filmReq.addEventListener("error", e => {
//     console.log("error!", e);
//   });
//   filmReq.open("GET", filmUrl);
//   filmReq.send();
// });
// firstReq.addEventListener("error", () => {
//   console.log("it failed!");
// });
// firstReq.open("GET", "https://swapi.co/api/planets/");
// firstReq.send();
// console.log("request sent!");
// const printData = data => {
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   const nextPageURL = data.next;
//   return fetch(nextPageURL);
// };

// const prom = fetch("https://swapi.co/api/planets/")
//   .then(response => {
//     return response.json();
//   })
//   .then(printData)
//   .then(response => {
//     return response.json();
//   })
//   .then(printData)
//   .then(response => {
//     return response.json();
//   })
//   .then(printData)
//   .catch(err => {
//     console.log("something went wrong");
//     console.log(err);
//   });

createAutocomplete({
  root: document.querySelector(".autocomplete"),
  renderOption: (movie) => {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `<img src="${imgSrc}"/>${movie.Title} (${movie.Year})`;
  },
  onOptionSelect: (movie) => {
    onMovieSelect(movie);
  },
  inputValue: (movie) => {
    return movie.Title;
  },
  fetchData: async (searchTerm) => {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "2f075259",
        s: searchTerm,
      },
    });
    if (response.data.Error) {
      return [];
    }

    return response.data.Search;
  },
});

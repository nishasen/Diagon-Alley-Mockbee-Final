export const setSearchBar = (state) => {
    let searchBar = "";
    switch(state.theme) {
      case "gryffindor": return "gryffindor-search";
      case "hufflepuff": return "hufflepuff-search";
      case "ravenclaw": return "ravenclaw-search";
      case "slytherin": return "slytherin-search";
      default: return searchBar;
    }
  }
const setHouseTitle = (state) => {
    const houseTitle = ""
    switch(state.theme) {
      case "gryffindor": return "gryffindor-title";
      case "hufflepuff": return "hufflepuff-title";
      case "ravenclaw": return "ravenclaw-title";
      case "slytherin": return "slytherin-title";
      default: return houseTitle;
    }
}

export { setHouseTitle };
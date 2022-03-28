export const changeHeaderColor = (state) => {
    let headerColor = ""
    switch(state.theme) {
      case "gryffindor": return "gryffindor-header";
      case "hufflepuff": return "hufflepuff-header";
      case "ravenclaw": return "ravenclaw-header";
      case "slytherin": return "slytherin-header";
      default: return headerColor;
    }
  }
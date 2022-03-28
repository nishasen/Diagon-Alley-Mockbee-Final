export const setButtonColor = (state) => {
    let buttonColor = "";
    switch(state.theme) {
      case "gryffindor": return "gryffindor-button";
      case "hufflepuff": return "hufflepuff-button";
      case "ravenclaw": return "ravenclaw-button";
      case "slytherin": return "slytherin-button";
      default: return buttonColor;
    }
  }
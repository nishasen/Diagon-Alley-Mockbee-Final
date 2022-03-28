export const setIconButton = (state) => {
    const iconButton = {}
    switch(state.theme) {
      case "gryffindor": return {...iconButton, iconColor: "gryffindor-icon", badgeColor: "gryffindor-badge"};
      case "hufflepuff": return {...iconButton, iconColor: "hufflepuff-icon", badgeColor: "hufflepuff-badge"};
      case "ravenclaw": return {...iconButton, iconColor: "ravenclaw-icon", badgeColor: "ravenclaw-badge"};
      case "slytherin": return {...iconButton, iconColor: "slytherin-icon", badgeColor: "slytherin-badge"};
      default: return iconButton;
    }
  } 
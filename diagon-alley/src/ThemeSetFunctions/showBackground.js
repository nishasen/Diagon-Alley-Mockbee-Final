import GryffindorBG from '../Assets/BackgroundLogo/GryffindorBG.png';
import HufflepuffBG from '../Assets/BackgroundLogo/HufflepuffBG.png';
import RavenclawBG from '../Assets/BackgroundLogo/RavenclawBG.png';
import SlytherinBG from '../Assets/BackgroundLogo/SlytherinBG.png';

export const showBackground = (state) => {
    let background = {}
    switch(state.theme) {
      case "gryffindor": return {...background, bgImage: GryffindorBG, bgColor: "gryffindor-bg"};
      case "hufflepuff": return {...background, bgImage: HufflepuffBG, bgColor: "hufflepuff-bg"};
      case "ravenclaw": return {...background, bgImage: RavenclawBG, bgColor: "ravenclaw-bg"};
      case "slytherin": return {...background, bgImage: SlytherinBG, bgColor: "slytherin-bg"};
      default: return background;
    }
  }
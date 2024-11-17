import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock as clock1,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faClock as clock2 } from "@fortawesome/free-regular-svg-icons";

const recipeIcons = [
  {
    id: 1,
    text: "prep time",
    icon: <FontAwesomeIcon icon={clock1} className="fas" />,
    prefix: "min.",
  },
  {
    id: 2,
    text: "cook time",
    icon: <FontAwesomeIcon icon={clock2} className="fas" />,
    prefix: "min.",
  },
  {
    id: 3,
    text: "servings",
    icon: <FontAwesomeIcon icon={faUserFriends} className="fas" />,
    prefix: "servings",
  },
];

export default recipeIcons;

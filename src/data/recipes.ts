import recipe1 from "../assets/recipes/recipe-1.jpeg";
import recipe2 from "../assets/recipes/recipe-2.jpeg";
import recipe3 from "../assets/recipes/recipe-3.jpeg";
import recipe4 from "../assets/recipes/recipe-4.jpeg";

export interface Recipe {
  id: number;
  name: string;
  prep: number;
  cook: number;
  servings: number;
  image: string;
  tags: string[];
  description: string;
  instructions: string[];
  ingredients: string[];
  tools: string[];
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "carne asada",
    prep: 15,
    cook: 5,
    servings: 6,
    image: recipe1,
    tags: ["beef", "breakfast", "pancackes", "food"],
    description:
      "Shabby chic humblebrag banh mi bushwick, banjo kale chips meggings. Cred selfies sartorial, cloud bread disrupt blue bottle seitan. Dreamcatcher tousled bitters, health goth vegan venmo whatever street art lyft shabby chic pitchfork beard. Drinking vinegar poke tbh, iPhone coloring book polaroid truffaut tousled ramps pug trust fund letterpress. Portland four loko austin chicharrones bitters single-origin coffee. Leggings letterpress occupy pour-over.",
    instructions: [
      "I'm baby mustache man braid fingerstache small batch venmo succulents shoreditch.",
      "Pabst pitchfork you probably haven't heard of them, asymmetrical seitan tousled succulents wolf banh mi man bun bespoke selfies freegan ethical hexagon.",
      "Polaroid iPhone bitters chambray. Cornhole swag kombucha live-edge.",
    ],
    ingredients: [
      "1 1/2 cups dry pancake mix",
      "1/2 cup flax seed meal",
      "1 cup skim milk",
    ],
    tools: [
      "Hand Blender",
      "Large Heavy Pot With Lid",
      "Measuring Spoons",
      "Measuring Cups",
    ],
  },
  {
    id: 2,
    name: "greek ribs",
    prep: 15,
    cook: 5,
    servings: 6,
    image: recipe2,
    tags: ["beef", "breakfast", "pancackes", "food"],
    description:
      "Shabby chic humblebrag banh mi bushwick, banjo kale chips meggings. Cred selfies sartorial, cloud bread disrupt blue bottle seitan. Dreamcatcher tousled bitters, health goth vegan venmo whatever street art lyft shabby chic pitchfork beard. Drinking vinegar poke tbh, iPhone coloring book polaroid truffaut tousled ramps pug trust fund letterpress. Portland four loko austin chicharrones bitters single-origin coffee. Leggings letterpress occupy pour-over.",
    instructions: [
      "I'm baby mustache man braid fingerstache small batch venmo succulents shoreditch.",
      "Pabst pitchfork you probably haven't heard of them, asymmetrical seitan tousled succulents wolf banh mi man bun bespoke selfies freegan ethical hexagon.",
      "Polaroid iPhone bitters chambray. Cornhole swag kombucha live-edge.",
    ],
    ingredients: [
      "1 1/2 cups dry pancake mix",
      "1/2 cup flax seed meal",
      "1 cup skim milk",
    ],
    tools: [
      "Hand Blender",
      "Large Heavy Pot With Lid",
      "Measuring Spoons",
      "Measuring Cups",
    ],
  },
  {
    id: 3,
    name: "vegetable soup",
    prep: 15,
    cook: 5,
    servings: 6,
    image: recipe3,
    tags: ["beef", "breakfast", "pancackes", "food"],
    description:
      "Shabby chic humblebrag banh mi bushwick, banjo kale chips meggings. Cred selfies sartorial, cloud bread disrupt blue bottle seitan. Dreamcatcher tousled bitters, health goth vegan venmo whatever street art lyft shabby chic pitchfork beard. Drinking vinegar poke tbh, iPhone coloring book polaroid truffaut tousled ramps pug trust fund letterpress. Portland four loko austin chicharrones bitters single-origin coffee. Leggings letterpress occupy pour-over.",
    instructions: [
      "I'm baby mustache man braid fingerstache small batch venmo succulents shoreditch.",
      "Pabst pitchfork you probably haven't heard of them, asymmetrical seitan tousled succulents wolf banh mi man bun bespoke selfies freegan ethical hexagon.",
      "Polaroid iPhone bitters chambray. Cornhole swag kombucha live-edge.",
    ],
    ingredients: [
      "1 1/2 cups dry pancake mix",
      "1/2 cup flax seed meal",
      "1 cup skim milk",
    ],
    tools: [
      "Hand Blender",
      "Large Heavy Pot With Lid",
      "Measuring Spoons",
      "Measuring Cups",
    ],
  },
  {
    id: 4,
    name: "banaan pancakes",
    prep: 15,
    cook: 5,
    servings: 6,
    image: recipe4,
    tags: ["beef", "breakfast", "pancackes", "food"],
    description:
      "Shabby chic humblebrag banh mi bushwick, banjo kale chips meggings. Cred selfies sartorial, cloud bread disrupt blue bottle seitan. Dreamcatcher tousled bitters, health goth vegan venmo whatever street art lyft shabby chic pitchfork beard. Drinking vinegar poke tbh, iPhone coloring book polaroid truffaut tousled ramps pug trust fund letterpress. Portland four loko austin chicharrones bitters single-origin coffee. Leggings letterpress occupy pour-over.",
    instructions: [
      "I'm baby mustache man braid fingerstache small batch venmo succulents shoreditch.",
      "Pabst pitchfork you probably haven't heard of them, asymmetrical seitan tousled succulents wolf banh mi man bun bespoke selfies freegan ethical hexagon.",
      "Polaroid iPhone bitters chambray. Cornhole swag kombucha live-edge.",
    ],
    ingredients: [
      "1 1/2 cups dry pancake mix",
      "1/2 cup flax seed meal",
      "1 cup skim milk",
    ],
    tools: [
      "Hand Blender",
      "Large Heavy Pot With Lid",
      "Measuring Spoons",
      "Measuring Cups",
    ],
  },
];

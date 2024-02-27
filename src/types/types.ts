export type Recipe = {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: [];
  winePairing: WinePairing;
  instructions: string;
  analyzedInstructions: Instructions;
  originalId: null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
};

export type Instructions = [
  {
    name: string;
    steps: InstuctionsStep[];
  }
];

export type InstuctionsStep = {
  number: number;
  step: string;
  ingredients: [
    {
      id: number;
      name: string;
      localizedName: string;
      image: string;
    },
    {
      id: number;
      name: string;
      localizedName: string;
      image: string;
    }
  ];
  equipment: [
    { id: number; name: string; localizedName: string; image: string }
  ];
};

export type ExtendedIngredient = {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
};

type WinePairing = {
  pairedWines: string[];
  pairingText: string;
  productMatches: [
    {
      id: number;
      title: string;
      description: string;
      price: string;
      imageUrl: string;
      averageRating: number;
      ratingCount: number;
      score: number;
      link: string;
    }
  ];
};

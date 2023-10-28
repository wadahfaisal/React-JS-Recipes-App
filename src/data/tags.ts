import { recipes } from "./recipes";

export let allTags = ["beef", "breakfast", "pancackes", "food"];

export const tagCount = (myTag: string) => {
  let count = 0;
  recipes.forEach((recipe) => {
    const { tags } = recipe;
    tags.find((tag) => {
      if (tag === myTag) {
        return (count += 1);
      }
    });
  });
  return count;
};

// interface Tag {
//   id: number;
//   name: string;
//   amount: number;
// }

// export const tags: Tag[] = [
//   {
//     id: 1,
//     name: "beef",
//     amount: 1,
//   },
//   {
//     id: 2,
//     name: "breakfast",
//     amount: 2,
//   },
//   {
//     id: 3,
//     name: "carrots",
//     amount: 3,
//   },
//   {
//     id: 4,
//     name: "dinner",
//     amount: 4,
//   },
//   {
//     id: 5,
//     name: "food",
//     amount: 1,
//   },
// ];

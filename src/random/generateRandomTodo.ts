import { ADJECTIVES, POST_NOUNS, PRE_NOUNS, VERBS } from "./wordLists";

const pickRandom = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

export const generateRandomTodo = (): string => {
  const verb = pickRandom(VERBS);
  const uppercaseVerb = verb.charAt(0).toUpperCase() + verb.slice(1);
  const adjective = pickRandom(ADJECTIVES);
  const preNoun = pickRandom(PRE_NOUNS);
  const postNoun = pickRandom(POST_NOUNS);

  return `${uppercaseVerb} ${adjective} ${preNoun} ${postNoun}`;
};

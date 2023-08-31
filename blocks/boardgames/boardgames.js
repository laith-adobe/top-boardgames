import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
  /* change to ul, li */
  const games = await fetch("https://main--top-boardgames--laith-adobe.hlx.page/boardgames.json")
  console.log(games);
}

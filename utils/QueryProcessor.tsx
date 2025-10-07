export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.includes("AndrewID") || query.includes("Andrew ID")) {
    return "crakab";
  }

  if (query.toLowerCase().includes("name")) {
    return "crakab1";
  }

if (query.toLowerCase().includes("What is 20 plus 4?")) {
    return "24";
  }
  return "";
}

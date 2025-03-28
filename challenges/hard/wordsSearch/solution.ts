// Brute force
function wordsSearch(grid: string[][], words: string[]): number[] {
  const wordsCounted: number[] = [];
  
  words.forEach(word => {
    let count = 0;
    
    grid.forEach((row: string[]) => {
      const regex = new RegExp(`${word}`, 'g');
      count += row.join('').match(regex)?.length || 0
    });

    grid[0].forEach((_: string, i: number) => {
      const regex = new RegExp(`${word}`, 'g');
      const column = grid.map((row: string[]) => row[i]);
      count += column.join('').match(regex)?.length || 0
    });

    wordsCounted.push(count)
  });

  // Time: O(w * r * c)
  // Space: O(r)

  return wordsCounted;
}
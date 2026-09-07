export type Choice = 'hill' | 'square';
export type Save = { choice: Choice; completedAt: number };
export const KEY = 'pocket-world:fallen-star:v1';
export function parseSave(raw: string | null): Save | null {
  if (!raw) return null;
  try {
    const s = JSON.parse(raw);
    return s && (s.choice === 'hill' || s.choice === 'square') && Number.isFinite(s.completedAt) && s.completedAt > 0
      ? { choice: s.choice, completedAt: s.completedAt } : null;
  } catch { return null; }
}
export const story = {
  hill: { title: 'A light for the quiet hours', reaction: 'Good. Quiet things deserve a view.', memory: 'You chose the hill. Mira will stay there until moonrise.', callback: 'You put it on the hill. I brought my blanket up here—I didn’t want to miss the moonrise.', evidence: 'Mira has moved her sleeping blanket to the lookout.', speaker: 'Odo' },
  square: { title: 'A light to gather around', reaction: 'Good. Now nobody has to see it alone.', memory: 'You chose the square. Mira is saving a place for everyone.', callback: 'You put it in the square. We brought stools and tea. Now we meet here every evening.', evidence: 'Three stools, a pot of tea, and fresh footprints surround the lantern.', speaker: 'Fern' }
} as const;

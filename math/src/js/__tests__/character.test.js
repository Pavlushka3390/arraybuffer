import Character from '../character';

const rangeCharacter = new Character(1, 100);

test('zero attack', () => {
  expect(rangeCharacter.attack).toBeCloseTo(0);
});

test('shoud attack = 90', () => {
  const character = new Character(100, 2);

  expect(character.attack).toBeCloseTo(90);
});

test('shoud attack = 85', () => {
  const character = new Character(100, 2);
  character.stoned = true;

  expect(character.attack).toBeCloseTo(85);
});

test('set stoned', () => {
  const character = new Character(100, 2);
  character.stoned = true;

  expect(character.stoned).toBe(true);
});

test('set attack', () => {
  const character = new Character(100, 1);

  character.attack = 1;
  expect(character.attack).toBeCloseTo(1);
});
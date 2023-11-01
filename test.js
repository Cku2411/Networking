const love = {
  1: 323,
  2: 999,
  3: 3232,
};

const newLove = Object.assign({}, love, {
  3: 88,
  5: 323,
});

const newlove2 = {
  ...love,
  ...newLove,
  2: 99999,
};



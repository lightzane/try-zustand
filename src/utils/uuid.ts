export const uuid = () => {
  const m = Math;
  const h = 16;
  const x = (c: number) => m.floor(c).toString(h);
  const u = (r: number) => ' '.repeat(r).replace(/./g, () => x(m.random() * h));

  return `${u(8)}-${u(4)}-${u(4)}-${u(4)}-${u(12)}`;
};

export function sum(values: number[]): number {
  return values.reduce((prev, cur): number => prev + cur, 0);
}

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});

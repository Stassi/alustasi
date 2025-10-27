type CompatibleSignatures<
  Arg,
  Steps extends readonly unknown[],
> = Steps extends readonly []
  ? true
  : Steps extends readonly [infer Step, ...infer RemainingSteps]
    ? Step extends (x: Arg) => infer Return
      ? RemainingSteps extends readonly unknown[]
        ? CompatibleSignatures<Return, RemainingSteps>
        : false
      : false
    : false

type TailReturn<
  Arg,
  Steps extends readonly unknown[],
> = Steps extends readonly []
  ? Arg
  : Steps extends readonly [infer Step, ...infer RemainingSteps]
    ? Step extends (x: Arg) => infer Return
      ? TailReturn<Return, RemainingSteps>
      : never
    : never

export function pipe<
  HeadArgs extends readonly unknown[],
  Return,
  RemainingSteps extends (CompatibleSignatures<
    Return,
    RemainingSteps
  > extends true
    ? unknown
    : never) &
    readonly unknown[],
>([head, ...remainingSteps]: readonly [
  (...args: HeadArgs) => Return,
  ...RemainingSteps,
]): (...args: HeadArgs) => TailReturn<Return, RemainingSteps> {
  return (...args: HeadArgs) =>
    (remainingSteps as ((x: Return) => Return)[]).reduce(
      (previousValue: Return, step: (x: Return) => Return): Return =>
        step(previousValue),
      head(...args),
    ) as TailReturn<Return, RemainingSteps>
}

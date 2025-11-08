type CompatibleSignatures<
  Arg,
  Steps extends readonly unknown[],
> = Steps extends readonly []
  ? true
  : Steps extends readonly [infer Head, ...infer RemainingSteps]
    ? Head extends (x: Arg) => infer Return
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
  : Steps extends readonly [infer Head, ...infer RemainingSteps]
    ? Head extends (x: Arg) => infer Return
      ? TailReturn<Return, RemainingSteps>
      : never
    : never

export function pipe<
  HeadArgs extends readonly unknown[],
  HeadReturn,
  Steps extends (CompatibleSignatures<HeadReturn, Steps> extends true
    ? unknown
    : never) &
    readonly unknown[],
>([head, ...steps]: readonly [(...args: HeadArgs) => HeadReturn, ...Steps]): (
  ...args: HeadArgs
) => TailReturn<HeadReturn, Steps> {
  return (...args: HeadArgs) =>
    (steps as readonly ((x: unknown) => unknown)[]).reduce<unknown>(
      (previousValue, step) => step(previousValue),
      head(...args),
    ) as TailReturn<HeadReturn, Steps>
}

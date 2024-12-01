export type PropsOf<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = React.ComponentProps<T>;

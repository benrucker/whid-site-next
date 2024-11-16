type Split<
  S extends string,
  Delim extends string
> = S extends `${infer Head}${Delim}${infer Rest}`
  ? [Head, ...Split<Rest, Delim>]
  : [S];

/**
 * A type-safe split function :^)
 */
export function split<TString extends string, TDelim extends string>(
  s: TString,
  d: TDelim
): Split<TString, TDelim> {
  return s.split(d) as Split<TString, TDelim>;
}

import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";

export function useSearchParam(param: string) {
  const searchParams = useSearchParams();

  const handleGet = React.useCallback(() => {
    searchParams.get(param);
  }, [param, searchParams]);

  const router = useRouter();
  const pathname = usePathname();

  const handleClear = React.useCallback(() => {
    router.push(
      pathname + "?" + updateQueryString(searchParams, param, undefined)
    );
  }, [param, pathname, router, searchParams]);

  const handleSet = React.useCallback(
    (newValue: string) => {
      router.push(
        pathname + "?" + updateQueryString(searchParams, param, newValue)
      );
    },
    [param, pathname, router, searchParams]
  );

  return {
    get: handleGet,
    clear: handleClear,
    set: handleSet,
  };
}

function updateQueryString(
  searchParams: ReadonlyURLSearchParams,
  name: string,
  value: string | undefined
) {
  const params = new URLSearchParams(searchParams.toString());
  if (value == null) {
    params.delete(name);
  } else {
    params.set(name, value);
  }

  return params.toString();
}

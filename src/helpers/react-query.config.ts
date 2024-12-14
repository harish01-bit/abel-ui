export const reactQueryConfig = {
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 1, // MS * SEC * MIN
    enabled: true,
    retry: false,
    manual: true,
    staleTime: Infinity,
};
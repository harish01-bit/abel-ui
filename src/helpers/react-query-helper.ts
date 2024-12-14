export const mutationHelperFun = (queryClient: any, cacheKey: string) => {
    return {
        onMutate: async (queryUpdates: any) => {
            await queryClient.cancelQueries(cacheKey);
            const previousQuery = queryClient.getQueryData(cacheKey);
            queryClient.setQueryData(cacheKey, queryUpdates);
            return { previousQuery, queryUpdates };
        },
        onError: (err: any, queryUpdates: any, context: any) => {
            queryClient.setQueryData(cacheKey, context.previousQuery);
        },
        onSettled: (updateQuery: any) => {
            queryClient.invalidateQueries(cacheKey);
        }
    };
};
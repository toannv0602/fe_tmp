export const fetchingData = async (cb, returnCatch = undefined) => {
    try {
        let response = await cb();
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        return returnCatch;
    }
};

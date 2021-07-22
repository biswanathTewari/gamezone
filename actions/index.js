export const addReview = (review) => {
    //~ action
    return {
        type : "addReview",
        payload: review,
    }
}
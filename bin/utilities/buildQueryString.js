export const bqs = (params) => {
    const allParams = new URLSearchParams(params);
    allParams.sort();
    return allParams.toString();
}
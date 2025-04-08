const CAT_ENDPOINT_UMAGE_URL = "https://cataas.com/cat/says/";


export const getCatImage = async ({fact}) => {
    const firstWord = fact.split(" ").slice(0, 3).join(" ");
    await fetch(`${CAT_ENDPOINT_UMAGE_URL}${firstWord}`);
    const url = `${CAT_ENDPOINT_UMAGE_URL}${firstWord}`;
    return url;
}
/**
 * Helper function to perform fetch requests with graphql easily.
 * Throws an error if non-positive response.
 * @param queryBody graphql query / mutation
 * @param url pointer to server which handles request
 * @returns a promise of a json response
 */
async function fetchGrabber(queryBody: {query: String} , url: string) {
    let result = await fetch(url, {
        method: "POST",
        body: JSON.stringify(queryBody),
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (result.status !== 200 && result.status !== 201) {
        console.log(result)
        throw new Error("Query illegal or could not connect to database!")
    }

    return result.json()
}

// Constants
const port = process.env.REACT_APP_BACKEND_PORT || 3001
const urlBody = process.env.REACT_APP_BACKEND_URL || "http://localhost" 
const backendURL = `${urlBody}:${port}/graphql`

export {backendURL}

export default fetchGrabber
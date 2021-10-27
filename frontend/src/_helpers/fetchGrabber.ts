async function fetchGrabber(queryBody: {query: String} , url: string) {
    let result = await fetch(url, {
        method: "POST",
        body: JSON.stringify(queryBody),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (result.status !== 200 && result.status !== 201) {
        console.log(result)
        throw new Error("Some error occured!")
    }

    return result.json()
}

const port = 3001 || process.env.REACT_APP_BACKEND_PORT
const backendURL = `http://localhost:${port}/graphql`

export {backendURL}

export default fetchGrabber
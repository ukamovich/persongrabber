async function fetchGrabber(queryBody: String) {
    let port = 3001 || process.env.REACT_APP_BACKEND_PORT
    let result = await fetch(`http://localhost:${port}/graphql`, {
        method: "POST",
        body: JSON.stringify(queryBody),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (result.status !== 200 && result.status !== 201) {
        throw new Error("Some error occured!")
    }

    return result.json()
}
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

export default fetchGrabber
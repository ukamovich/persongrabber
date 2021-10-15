async function fetchGrabber(queryBody: String, url: string) {
    let result = await fetch(url, {
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
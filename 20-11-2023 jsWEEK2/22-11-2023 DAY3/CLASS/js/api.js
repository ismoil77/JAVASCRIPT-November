let api = "http://localhost:3000/posts"





export async function getData() {
    try {
        const {data} = await axios.get(api)
    } catch (error) {
        console.log(error);
    }
}

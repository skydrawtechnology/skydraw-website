import axios from "axios";

async function getPagesData() {
    const response = await axios.get('http://localhost:3000/api/pages-route');
    return response.data;
}

const Home = async () => {
    const data = await getPagesData();

    return (
        <>
            <h1>Hello Big Bird</h1>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </>
    );
};

export default Home;

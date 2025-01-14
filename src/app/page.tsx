import { RenderBlocks } from "@/utils/RenderBlocks";
import "./global.scss"
import axios from "axios";

async function getPagesData(slug) {
    const response = await axios.get(`http://localhost:3000/api/pages?where[slug][equals]=${slug}`);
    return response.data;
}

const Home = async () => {
    const tempSlug = '/'
    const data = await getPagesData(tempSlug);

    console.log(data.docs[0].layouts, 'data')

    return (
        <>
            <RenderBlocks layouts = {data.docs[0].layouts}/>
        </>
    );
};

export default Home;

import ClientScroll from "./components/clientScroll/ClientScroll";
import getPaginatedProductData from "../actions/getPaginatedProducts";

export default async function page() {
  const data = await getPaginatedProductData( "0","5");
  return (
    <div>
          <ClientScroll list={data}/>
    </div>
  );
}



// import { Button } from "@/components/ui/button";
import ProductList from "@/components/ui/shared/product/product-list";
import sampleData from "@/db/sample-data";

const Homepage = () => {
  console.log(sampleData)
  return <><ProductList data={sampleData.products} title='Newest Arrivals' limit={4}/></>;
};
export default Homepage;

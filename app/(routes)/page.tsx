import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container"

const HomePage = async () => {

   const products = await getProducts({isFeatured: true});
  const billboard = await getBillboard("6f9c0ab9-e219-41a3-9399-101d327abd0c");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
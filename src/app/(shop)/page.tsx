export const revalidate = 60;
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";
interface Props {
  searchParams: {
    page?: number;
  }
}

export default async function Home({searchParams}:Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({page});
  if (products.length === 0){
    // aqui podriamos redirigir a una pagina de error con sugerencias de productos
    redirect('/')
  }
  return (
    <>
      <Title 
        title={"Tienda"}
        subtitle="Todos los productos"
        className="mb-2" 
      />
      <ProductGrid
      products={products}/>
      <Pagination totalPages={totalPages}/>
    </>
  );
}

import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
const seedProducts = initialData.products;
interface Props{
    params: {
        id: Category;
    }
}

function CategoryPage({params}:Props) {
    const {id} = params
    const products = seedProducts.filter(product => product.gender === id);
    // if (id === 'kids') {
    //     notFound();
    // }
    const labels: Record<Category,string> = {
        'men': 'hombres',
        'women': 'mujeres',
        'kid': 'niños',
        'unisex' : 'todos'
    }
    return (
        <>
      <Title
        title={`Articulos para ${labels[id]}`}
        className="mb-2" 
      />
      <ProductGrid
      products={products}/>
    </>
       
    );
}

export default CategoryPage;
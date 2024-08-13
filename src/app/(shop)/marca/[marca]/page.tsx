export const revalidate = 60; // 60 segundos

import { getMarcaIdByName, getPaginatedProductsByMarca } from '@/actions';
import { ButtonScroll, Pagination, ProductGrid, Title } from '@/components';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    marca: string;
  },
  searchParams: {
    page?: string; 
  }
}

export default async function BrandByPage({ params, searchParams }: Props) {
  const { marca } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  
  const marcaId = await getMarcaIdByName(marca);
  
  if (!marcaId) {
    notFound(); // Redirige a una página de "Not Found" si no existe la marca
  }

  const { products, currentPage, totalPages } = await getPaginatedProductsByMarca({ 
    page, 
    marcaId  // Aquí debes pasar el marcaId obtenido
  });

  if (products.length === 0) {
    notFound(); // Redirige a una página de "Not Found" si no hay productos
  }

  return (
    <>
      <Title
        title={`Artículos de la marca ${marca}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />
      <ButtonScroll />
      <Pagination totalPages={totalPages} />
    </>
  );
}

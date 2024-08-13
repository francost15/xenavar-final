export const revalidate = 60; // 60 segundos

import { getPaginatedProductsByCategory, getCategoryIdByName } from '@/actions';
import { ButtonScroll, Pagination, ProductGrid, Title } from '@/components';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    category: string;
  },
  searchParams: {
    page?: string; 
  }
}

export default async function CategoryByPage({ params, searchParams }: Props) {
  const { category } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const categoryId = await getCategoryIdByName(category);
  if (!categoryId) {
    notFound(); // Redirige a una página de "Not Found" si no existe la categoría
  }

  const { products, currentPage, totalPages } = await getPaginatedProductsByCategory({ 
    page, 
    categoryId
  });
  if (products.length === 0) {
    notFound(); // Redirige a una página de "Not Found" si no hay productos
  }

  return (
    <>
      <Title
        title={`Artículos en la categoría ${category}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />
      <ButtonScroll />
      <Pagination totalPages={totalPages} />
    </>
  );
}

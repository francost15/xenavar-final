export const revalidate = 0;

// https://tailwindcomponents.com/component/hoverable-table
import {getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductImage, Title } from "@/components";
import { currencyFormat } from "@/utils";
import Link from "next/link";


interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function OrdersPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page });

  return (
    <>
    
      <Title title="Mantenimiento de productos" />
      {/* Buscador de productos */}
      {/* <div className="flex items-center">
        <input
          placeholder="Buscar algun producto"
          className="px-8 py-3 transition-all border-blue-500 shadow-lg outline-none input focus:border-2 rounded-xl w-60 focus:w-64"
          name="search"
          type="search"
        />
        <IoSearchOutline size={24} className="absolute"  />
      </div> */}
      <div className="flex justify-end mb-5">
        <Link href="/admin/product/new" className="px-2 py-2 text-white transition-all bg-red-700 rounded-md hover:bg-red-800 md:px-4">
          Agregar producto
        </Link>
      </div>
        <div>
          {/* aqui filtra por gender men, women, kids */}
        </div>
      <div className="mb-10">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Imagen
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Titulo
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Precio
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Género
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Tallas
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Stock
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  <Link href={`/product/${product.slug}`}>
                    <ProductImage
                      src={ product.ProductImage[0]?.url }
                      width={80}
                      height={80}
                      alt={product.title}
                      className="object-cover w-20 h-20 rounded"
                    />
                  </Link>
                </td>
                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                  <Link
                    href={`/admin/product/${product.slug}`}
                    className="hover:underline"
                  >
                    {product.title}
                  </Link>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                  {currencyFormat(product.price)}
                </td>

                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                  {product.gender}
                </td>
                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                  {product.flavors.join(", ")}
                </td>
                <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                  {/* si es cero poner en rojo */}
                  {
                    product.inStock > 0 ? (
                      <span className="text-green-600">{product.inStock} </span>
                    ) : (
                      <span className="text-red-600">{product.inStock} </span>
                    )
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
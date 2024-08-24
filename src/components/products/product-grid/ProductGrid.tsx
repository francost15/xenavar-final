import { Product } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';

interface ProductGridProps {
  products: Product[];
}


export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {
        products.map( product => (
          <ProductGridItem
            key={ product.slug }
            product={ product }
          />
        ) )
      }

    </div>
  );
};
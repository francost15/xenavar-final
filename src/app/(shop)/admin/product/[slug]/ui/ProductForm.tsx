"use client"
import { useForm } from "react-hook-form";
import { Category, Marcas, Product, ProductImage as ProductWithImage } from "@/interfaces";
import clsx from "clsx";
import { createUpdateProduct, deleteProduct, deleteProductImage } from "@/actions";
import { useRouter } from 'next/navigation';
import { ProductImage } from '@/components';


interface Props {
  product: Partial<Product> & { ProductImage?: ProductWithImage[] };
  categories: Category[];
  marcas: Marcas[];
}

const  flavors= ["Chocolate","Fresa","Vainilla","StrawBerry","Mango","Mazapan","Coco","BlueBerry","Churro","Other"];

interface FormInputs {
  title: string;
  slug: string;
  description: string;
  price: number;
  inStock: number;
  flavors: string[];
  tags: string;
  marcaId:string;
  categoryId: string;
  images?: FileList;
}

export const ProductForm = ({ product, categories, marcas }: Props) => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isValid },
    getValues,
    setValue,
    watch,
  } = useForm<FormInputs>({
    defaultValues: {
      ...product,
      tags: product.tags?.join(", "),
      flavors: product.flavors ?? [],
      images: undefined,
    },
  });

  watch("flavors");

  const onFlavorsChanged = (flavor: string) => {
    const flavors = new Set(getValues("flavors"));
    flavors.has(flavor) ? flavors.delete(flavor) : flavors.add(flavor);
    setValue("flavors", Array.from(flavors));
  };

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();

    const { images, ...productToSave } = data;

    if (product.id) {
      formData.append("id", product.id ?? "");
    }

    formData.append("title", productToSave.title);
    formData.append("slug", productToSave.slug);
    formData.append("description", productToSave.description);
    formData.append("price", productToSave.price.toString());
    formData.append("inStock", productToSave.inStock.toString());
    formData.append("flavors", productToSave.flavors.toString());
    formData.append("tags", productToSave.tags);
    formData.append("categoryId", productToSave.categoryId);
    formData.append("marcaId", productToSave.marcaId);

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    }

    const { ok, product: updatedProduct } = await createUpdateProduct(formData);

    if (!ok) {
      alert('Producto no se pudo actualizar');
      return;
    }
    alert('Producto actualizado');
    router.replace(`/admin/products`);
  };

  const handleDeleteProduct = async () => {
    if (!product.id) {
      return;
    }

    const confirmation = confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (!confirmation) {
      return;
    }

    const { ok,message } = await deleteProduct(product.id);
    if (!ok) {
      alert('Producto no se pudo eliminar');
      console.log('Producto no se pudo eliminar:', message);
      return;
    }
    alert('Producto eliminado');
    router.replace(`/admin/products`);

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-3 px-5 mb-16 sm:px-0 sm:grid-cols-2"
    >
      {/* Textos */}
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Título</span>
          <input
            type="text"
            className="p-2 bg-gray-200 border rounded-md"
            {...register("title", { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Slug</span>
          <input
            type="text"
            className="p-2 bg-gray-200 border rounded-md"
            {...register("slug", { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Descripción</span>
          <textarea
            rows={5}
            className="p-2 bg-gray-200 border rounded-md"
            {...register("description", { required: true })}
          ></textarea>
        </div>

        <div className="flex flex-col mb-2">
          <span>Price</span>
          <input
            type="number"
            className="p-2 bg-gray-200 border rounded-md"
            {...register("price", { required: true, min: 0 })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Tags</span>
          <input
            type="text"
            className="p-2 bg-gray-200 border rounded-md"
            {...register("tags", { required: true })}
          />
        </div>
        
        <div className="flex flex-col mb-2">
          <span>Marca</span>
          <select
            className="p-2 bg-gray-200 border rounded-md"
            {...register("marcaId", { required: true })}
          >
            <option value="">[Seleccione]</option>
            {marcas.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Categoria</span>
          <select
            className="p-2 bg-gray-200 border rounded-md"
            {...register("categoryId", { required: true })}
          >
            <option value="">[Seleccione]</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Selector de tallas y fotos */}
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Inventario</span>
          <input
            type="number"
            min="0"
            className="p-2 bg-gray-200 border rounded-md"
            {...register("inStock", { required: true, min: 0 })}
          />
        </div>

        {/* As checkboxes */}
        <div className="flex flex-col">
          <span>Sabores:</span>
          <div className="flex flex-wrap">
            {flavors.map((flavors) => (
              // bg-blue-500 text-white <--- si está seleccionado
              <div
                key={flavors}
                onClick={() => onFlavorsChanged(flavors)}
                className={clsx(
                  "p-3 border cursor-pointer rounded-md mr-1 mb-2 w-auto transition-all text-center",
                  {
                    "bg-red-700 text-white": getValues("flavors").includes(flavors),
                  }
                )}
              >
                <span>{flavors}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col mb-2">
            <span>Fotos</span>
            <input
              type="file"
              {...register('images')}
              multiple
              className="p-2 bg-gray-200 border rounded-md"
              accept="image/png, image/jpeg, image/avif"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {product.ProductImage?.map((image) => (
              <div key={image.id}>
                <ProductImage
                  alt={product.title ?? ""}
                  src={image.url}
                  width={300}
                  height={300}
                  className="w-full rounded-t shadow-md"
                />

                <button
                  type="button"
                  onClick={() => deleteProductImage(image.id, image.url)}
                  className="w-full shadow-xl btn-danger rounded-b-xl"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full h-full">
        <button className="w-full btn-primary">Guardar</button>
        {/* si es nuevoproducto */}
        {product.id ? (
  <button
    type="button"
    onClick={handleDeleteProduct}
    className="w-auto rounded-md shadow-xl btn-danger"
  >
    Eliminar Producto
  </button>
) : null}
      </div>
    </form>
  );
}

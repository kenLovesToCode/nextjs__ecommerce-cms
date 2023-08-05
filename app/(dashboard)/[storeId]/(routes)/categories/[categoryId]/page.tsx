import prismadb from "@/lib/prismadb";
import CategoryForm from "./components/category-form";

const BillboardPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  //fetch category by id
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-2 space-y-4 p-8 pt-6">
        <CategoryForm initialData={category} billboards={billboards} />
      </div>
    </div>
  );
};

export default BillboardPage;

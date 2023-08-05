import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { CategoryColumn } from "./components/columns";
import { CategoryClient } from "./components/client";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategores: CategoryColumn[] = categories.map((category) => ({
    id: category.id,
    name: category.name,
    billboardLabel: category.billboard?.label ?? "None",
    createdAt: format(category.createdAt, "MMMM dd, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formattedCategores} />
      </div>
    </div>
  );
};

export default CategoriesPage;

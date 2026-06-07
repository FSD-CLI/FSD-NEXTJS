type UpdateCategoryPageProps = {
  categoryId: string;
};

export const UpdateCategoryPage = ({ categoryId }: UpdateCategoryPageProps) => {
  return (
    <div className="mx-auto max-w-2xl space-y-3">
      <h1 className="text-2xl font-bold">Update Category</h1>
      <p className="text-sm text-muted-foreground">
        Update category form is not implemented yet for category {categoryId}.
      </p>
    </div>
  );
};

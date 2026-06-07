type UpdateBrandPageProps = {
  brandId: string;
};

export const UpdateBrandPage = ({ brandId }: UpdateBrandPageProps) => {
  return (
    <div className="mx-auto max-w-2xl space-y-3">
      <h1 className="text-2xl font-bold">Update Brand</h1>
      <p className="text-sm text-muted-foreground">
        Update brand form is not implemented yet for brand {brandId}.
      </p>
    </div>
  );
};

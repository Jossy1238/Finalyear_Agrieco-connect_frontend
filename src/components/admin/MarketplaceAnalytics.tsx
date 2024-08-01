const MarketplaceAnalytics = ({
  marketplaceProducts,
}: {
  marketplaceProducts: IMarketPlace[];
}) => {
  return (
    <section className="sm:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-10">
      <div className="rounded-xl 2xl:p-10 flex items-center justify-between col-span-1 gap-2 p-5 bg-white">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold text-black">
            {marketplaceProducts.length}
          </p>
          <p className="text-primary-brown text-sm font-medium">Total</p>
          <p className="text-primary-brown text-sm font-medium">Listings</p>
        </div>
      </div>

      <div className="rounded-xl 2xl:p-10 flex items-center justify-between col-span-1 gap-2 p-5 bg-white">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold text-black">
            {Math.floor(Math.random() * marketplaceProducts.length)}
          </p>
          <p className="text-primary-brown text-sm font-medium">Active</p>
          <p className="text-primary-brown text-sm font-medium">Listings</p>
        </div>
      </div>

      <div className="rounded-xl 2xl:p-10 flex items-center justify-between col-span-1 gap-2 p-5 bg-white">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold text-black">
            {Math.floor(Math.random() * marketplaceProducts.length)}
          </p>
          <p className="text-primary-brown text-sm font-medium">New</p>
          <p className="text-primary-brown text-sm font-medium">Listings</p>
        </div>
      </div>

      <div className="rounded-xl 2xl:p-10 flex items-center justify-between col-span-1 gap-2 p-5 bg-white">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold text-black">
            {marketplaceProducts.length > 0
              ? marketplaceProducts[0].name
              : "N/A"}
          </p>
          <p className="text-primary-brown text-sm font-medium">Most Popular</p>
          <p className="text-primary-brown text-sm font-medium">Listings</p>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceAnalytics;

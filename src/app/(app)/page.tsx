import { ALL_CATEGORIES_QUERY } from "@/lib/sanity/queries/categories";
import { sanityFetch } from "@/sanity/lib/live";
export default async function Home() {
  const categories = await sanityFetch({
    query: ALL_CATEGORIES_QUERY,
  });
  console.log(categories);

  return (
    <div className="">
      {/* Featured Products Carousel */}

      {/* Page Banner */}

      {/* Category Tiles - Full width */}

      {/* Products Section */}
    </div>
  );
}

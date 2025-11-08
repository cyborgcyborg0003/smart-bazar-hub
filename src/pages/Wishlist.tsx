import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { useAuth } from '@/hooks/useAuth';
import { useWishlist } from '@/hooks/useWishlist';
import { dummyProducts } from '@/data/dummyData';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const Wishlist = () => {
  const { user } = useAuth();
  const { wishlistItems, loading } = useWishlist();

  const wishlistProducts = dummyProducts.filter(product => 
    wishlistItems.includes(product.id)
  );

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Sign in to view your wishlist</h2>
            <p className="text-muted-foreground mb-6">
              Save your favorite items for later
            </p>
            <Link to="/signin">
              <Button size="lg">Sign In</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 py-8">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
            <p className="text-muted-foreground">
              {wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'} in your wishlist
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading wishlist...</p>
            </div>
          ) : wishlistProducts.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6">
                Start adding items you love!
              </p>
              <Link to="/search">
                <Button size="lg">Browse Products</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;

import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User, Heart, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { NavLink } from './NavLink';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(35_100%_60%)]" />
            <span className="text-xl font-bold hidden sm:inline">SmartBazar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Products</NavLink>
            {!user && (
              <NavLink to="/join-seller">Become a Seller</NavLink>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/wishlist">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/orders')}>
                    Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/wishlist')}>
                    Wishlist
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/signin">
                <Button>Sign In</Button>
              </Link>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t pt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/search" onClick={() => setMobileMenuOpen(false)}>
                Products
              </NavLink>
              <NavLink to="/wishlist" onClick={() => setMobileMenuOpen(false)}>
                Wishlist
              </NavLink>
              {user ? (
                <>
                  <NavLink to="/profile" onClick={() => setMobileMenuOpen(false)}>
                    Profile
                  </NavLink>
                  <NavLink to="/orders" onClick={() => setMobileMenuOpen(false)}>
                    Orders
                  </NavLink>
                  <button
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <NavLink to="/join-seller" onClick={() => setMobileMenuOpen(false)}>
                  Become a Seller
                </NavLink>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

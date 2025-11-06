import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(35_100%_60%)]" />
              <span className="text-lg font-bold">SmartBazar</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering SMEs to reach customers nationwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Customers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/search" className="hover:text-foreground">Browse Products</Link></li>
              <li><Link to="/orders" className="hover:text-foreground">My Orders</Link></li>
              <li><Link to="/profile" className="hover:text-foreground">My Profile</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Sellers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/join-seller" className="hover:text-foreground">Join as Seller</Link></li>
              <li><Link to="/seller/dashboard" className="hover:text-foreground">Seller Dashboard</Link></li>
              <li><Link to="/seller/products" className="hover:text-foreground">Manage Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SmartBazar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

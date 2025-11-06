import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  Users,
  Package,
  Star
} from 'lucide-react';

const Analytics = () => {
  const salesData = [
    { month: 'Jan', sales: 12000, orders: 45 },
    { month: 'Feb', sales: 15000, orders: 52 },
    { month: 'Mar', sales: 18000, orders: 68 },
    { month: 'Apr', sales: 22000, orders: 78 },
    { month: 'May', sales: 25000, orders: 85 },
    { month: 'Jun', sales: 28000, orders: 92 },
  ];

  const topProducts = [
    { name: 'Premium Wireless Headphones', sales: 45, revenue: 13455 },
    { name: 'Professional Camera Kit', sales: 12, revenue: 15588 },
    { name: 'Gaming Mechanical Keyboard', sales: 38, revenue: 5662 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 py-8 bg-muted/20">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">
              Track your performance and insights
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-accent">
                        <TrendingUp className="h-4 w-4" />
                        <span>+15.3%</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">$28,450</h3>
                    <p className="text-sm text-muted-foreground">Total Revenue (30d)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <ShoppingCart className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-accent">
                        <TrendingUp className="h-4 w-4" />
                        <span>+8.2%</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">342</h3>
                    <p className="text-sm text-muted-foreground">Orders (30d)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-accent">
                        <TrendingUp className="h-4 w-4" />
                        <span>+12.5%</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">1,248</h3>
                    <p className="text-sm text-muted-foreground">Customers</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Star className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-accent">
                        <TrendingUp className="h-4 w-4" />
                        <span>+0.3</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">4.6</h3>
                    <p className="text-sm text-muted-foreground">Avg Rating</p>
                  </CardContent>
                </Card>
              </div>

              {/* Sales Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Sales Trend (Last 6 Months)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-end justify-between gap-4">
                    {salesData.map((data) => (
                      <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t-lg"
                          style={{ height: `${(data.sales / 30000) * 100}%` }}>
                        </div>
                        <span className="text-sm font-medium">{data.month}</span>
                        <span className="text-xs text-muted-foreground">${(data.sales / 1000).toFixed(0)}k</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Products */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topProducts.map((product, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Package className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.sales} units sold</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">${product.revenue.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">Revenue</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sales">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Detailed sales analytics coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <CardTitle>Product Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Product-specific analytics coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customers">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Customer analytics coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Analytics;


import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedEvents from '@/components/FeaturedEvents';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Categories />
      <FeaturedEvents />
    </div>
  );
};

export default Index;

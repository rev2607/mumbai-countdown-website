
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "We'll notify you as soon as we launch in Mumbai.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Be the First to Know
        </h2>
        <p className="text-xl mb-8 text-orange-100">
          Get notified when we start delivering delicious home-cooked meals in Mumbai
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white text-gray-800 border-0 focus:ring-2 focus:ring-orange-300"
          />
          <Button 
            type="submit"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 font-semibold"
          >
            Notify Me
          </Button>
        </form>
        
        <p className="text-sm text-orange-100 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

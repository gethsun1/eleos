import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export const GallerySection: React.FC = () => {
  const images = [
    '/gallery/eleos.jpeg',
    '/gallery/client_chat.png',
    '/gallery/client_chatII.png',
    '/gallery/clientchatII.jpg',
    '/gallery/client_chatIV.webp',
    '/gallery/success_story.png',
    '/gallery/yoga_fitness.png',
  ].filter(Boolean);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Inside Eleos</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into our compassionate environment and programs.
          </p>
        </div>

        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {images.map((src, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="overflow-hidden rounded-2xl shadow-lg group w-full">
                      <Image src={src} alt="Eleos gallery" width={800} height={600} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-[92vw] bg-transparent border-0 shadow-none p-0">
                    <div className="relative">
                      <Image src={src} alt="Eleos gallery large" width={1600} height={1066} className="w-full h-auto rounded-2xl" />
                      <div className="absolute bottom-3 right-4 text-xs text-white/80 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">Press ESC to close</div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 bg-white/80" />
          <CarouselNext className="-right-4 bg-white/80" />
        </Carousel>
      </div>
    </section>
  );
};



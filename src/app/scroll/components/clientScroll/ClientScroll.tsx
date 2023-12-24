'use client'
import getPaginatedProductData from '@/app/actions/getPaginatedProducts';
import { AlbumArtwork } from '@/components/ui/cardAlbum_artwork';
import { delay } from '@/lib/utilf/utils';
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer";
import spinner from '../../../../../public/svgs/spinner.svg'

export default function ClientScroll({ list }: any) {

    const [productList, setProductList] = useState(list);
    const currentOffset = useRef(5);
    const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            loadMoreData();
        }
    }, [inView]);

    const loadMoreData = async () => {
        await delay(3000);
        const moreData = await getPaginatedProductData(currentOffset.current.toString(), '5');
        console.log("prodList :::", productList);
        console.log('more data :::', moreData);
        currentOffset.current += 10;
        setProductList([...productList , ...moreData])
    };
  return (
    <div className="flex w-[100%] flex-wrap items-center justify-center gap-y-56 h-fit">
      {productList.map((album: any) => (
        <AlbumArtwork
          key={album.name}
          album={{
            name: `${album.title} + ${album.id}`,
            artist: album.description,
            cover: `https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600`,
          }}
          className="w-screen md:w-1/2 flex items-center flex-col "
          aspectRatio="portrait"
          width={250}
          height={330}
        />
      ))}

      <div ref={ref} className="h-20 flex items-center justify-center w-full mt-96">
          <img src={spinner.src} alt="spinner" />
      </div>
    </div>
  );
}

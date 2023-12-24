import { Button } from "@/components/ui/button"
import { AlbumArtwork } from "@/components/ui/cardAlbum_artwork";
import { getData } from "@/lib/utilf/utils";
import Link from "next/link"

type TPage = {
    searchParams: {
        offset: string,
        limit: string,
    }
}
export default async function page({
    searchParams: {
        offset, limit
    }
}: TPage) {
    const data = await getData(offset ? offset : '0', limit || '5');
    const prevOffset = offset ? parseInt(offset) - 5 : 5;
    const nextOffset = offset ? parseInt(offset) + 5 : 5;
    console.log('data:::', data)
    return (
      <div>
        <Link href={`/products?offset=${prevOffset}&limit=${limit || "5"}`}>
          <Button variant={"outline"} disabled={parseInt(offset) < 5}>
            Prev
          </Button>
        </Link>
        <Link href={`/products?offset=${nextOffset}&limit=${limit || "5"}`}>
          <Button variant={"outline"}>Next</Button>
        </Link>

        {/* {JSON.stringify(data)} */}
        <div className="flex w-[100%] flex-wrap items-center justify-center gap-y-56">
                {data.data.map(album => (
                        
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
        </div>

        {/* <div className="grid grid-cols-2">
          {data.data.map((ele: any) => {
            return (
              <AlbumArtwork
                key={ele.id}
                width={300}
                height={400}
                album={{
                  name: `${ele.title} + ${ele.id}`,
                  artist: ele.description,
                  cover: "https://picsum.photos/200",
                }}
              />
            );
            // <Button key={ele.id}>{ele.id}</Button>
          })}
        </div> */}
      </div>
    );
}

//   id: 10,
//       title: 'Bespoke Concrete Salad',
//       price: 971,
//       description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', 
//       images: [Array],
//       creationAt: '2023-12-15T06:55:00.000Z',
//       updatedAt: '2023-12-15T06:55:00.000Z',
//       category: [Object]
//     }

import Image from 'next/image';

export default function HeaderImages() {
  return (
    <div className="flex w-full">
      <div className="w-full md:w-1/3">
        <Image
          alt="Image 1"
          src="/car/2.jpg"
          layout="responsive"
          width={500}
          height={500}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="hidden md:block w-1/3">
        <Image
          alt="Image 2"
          src="/car/1.jpg"
          layout="responsive"
          width={500}
          height={500}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="hidden md:block w-1/3">
        <Image
          alt="Image 3"
          src="/car/3.jpg"
          layout="responsive"
          width={500}
          height={500}
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  );
}
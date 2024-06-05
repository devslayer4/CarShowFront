import Image from 'next/image';

export default function HeaderCarLogo() {
  return (
    <div className="flex flex-row justify-center items-center ">
        <Image src="/logoCar/4.jpg" alt="Logo 1" width={207} height={58} className="mx-0" />
        <Image src="/logoCar/5.jpg" alt="Logo 2" width={207} height={58} className="mx-0" />
        <Image src="/logoCar/6.jpg" alt="Logo 3" width={207} height={58} className="mx-0" />
        <Image src="/logoCar/7.jpg" alt="Logo 4" width={207} height={58} className="mx-0" />
        <Image src="/logoCar/8.jpg" alt="Logo 5" width={207} height={58} className="mx-0" />
        <Image src="/logoCar/9.jpg" alt="Logo 6" width={207} height={58} className="mx-0" />
      </div>
  );
}
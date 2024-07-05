import Image from "next/image";
import Logo from '@/assets/images/logo-sochi.png';
import ClaroLogo from '@/assets/images/logo-claro-sports.png';



export const Header = () => {
  return (
    <header>
      <div
        className="flex border-b-2 md:px-16 lg:px-32 xl:px-[180px] 2xl:px-56 border-red-700 py-2 fixed w-full bg-black"
      >
        <Image src={Logo} alt="Logo" width={120} height={120} />
        <div className="m-auto" />
        <Image src={ClaroLogo} alt="Logo" width={120} height={120} />
      </div>
    </header>
  )
}

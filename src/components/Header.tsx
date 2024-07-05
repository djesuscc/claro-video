import Image from "next/image"


export const Header = () => {
  return (
    <header>
      <div
        className="flex border-b-2 md:px-16 lg:px-32 xl:px-[180px] 2xl:px-56 border-red-700 py-2 fixed w-full bg-black"
      >
        <Image src={'/assets/images/logo-sochi.png'} alt="Logo" width={120} height={120} />
        <div className="m-auto" />
        <Image src={'/assets/images/logo-claro-sports.png'} alt="Logo" width={120} height={120} />
      </div>
    </header>
  )
}

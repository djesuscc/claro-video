import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";

export const Footer = () => {
  const socialMedias = [
    {
      link: '',
      icon: <Image src={'../../public/assets/images/mobli-icon.png'} alt={'mobile'} width={13} height={13} />,
      bg: '#93c5fd'
    },
    {
      link: 'https://x.com/ClaroSports',
      icon: <FaTwitter size={12} />,
       bg: '#1DA1F2'
    },
    {
      link: 'https://es-la.facebook.com/clarosports',
      icon: <FaFacebookF size={12} />,
      bg: '#3b5998',
    },
    {
      link: 'https://www.youtube.com/user/clarosports',
      icon: <TiSocialYoutubeCircular className="" />,
      bg: '#FF0000',
    }
  ]
  return (
    <div className="bg-black flex justify-center items-center py-6 px-2">
      <div className="flex-1 flex justify-center">
        <span className="text-white text-sm">
          <Link href={''}>Aviso de privacidad/Contacto</Link>
        </span>
      </div>
      <div className="flex-1 flex justify-center">
        <Image src={'../../public/assets/images/logo-sochi.png'} alt="Logo" width={100} height={100} />
      </div>
      <div className="flex-1 flex justify-center">
        <ul className="flex gap-2">
          {socialMedias.map((media) => (
            <li
              key={media.link}
              className={`h-6 w-6 flex items-center justify-center text-white cursor-pointer ${media.bg}`} style={{ background: media.bg }}
            >
              <Link href={media.link} target="_blank">
                {media.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

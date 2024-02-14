import Image from "next/image";
import Link from "next/link";

/**
 * Logo component
 *
 * @todo add styles
 * @todo add a link to the home page
 * @todo add a logo
 * @returns
 */
const Logo = () => {
  return (
    <Link href="/">
      <Image src="/W&S_Logo.png" alt="Logo" width={100} height={100} />
    </Link>
  );
};

export default Logo;

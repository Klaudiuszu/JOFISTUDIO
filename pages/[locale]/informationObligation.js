import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import { getTranslationsProps } from "next-translations";
import { namespaces } from '../../src/constants/namespaces';
import CookiesConsent from "../../src/components/CookiesConsent";
import InformationObligationDashboard from "../../src/components/InformationObligation/InformationObligationDashboard";


export { getStaticPaths } from "next-translations";

export default function InformationObligation() {
  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between xs:w xl:px-24 my-12'>
      <InformationObligationDashboard />
      </main>
      <CookiesConsent />
      <Footer />
    </>
  );
}

export const getStaticProps = async ctx => {
  const translationsProps = await getTranslationsProps(ctx, [namespaces.common])
  return {
    props: { ...translationsProps }
  }
};

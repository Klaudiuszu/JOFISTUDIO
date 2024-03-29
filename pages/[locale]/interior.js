import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import InteriorSection from "../../src/components/interiorPage/InteriorSection";
import Consultation from "../../src/components/architecturePage/Consultation";
import ProcesSection from "../../src/components/architecturePage/ProcesSection";
import { getTranslationsProps } from "next-translations";
import { namespaces } from '../../src/constants/namespaces';

export { getStaticPaths } from "next-translations";

export default function Interior() {

  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between xs:w xl:px-24 my-12'>
        <Consultation />
        <InteriorSection />
        <ProcesSection />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async ctx => {
  const translationsProps = await getTranslationsProps(ctx, [namespaces.common])
  return {
    props: {...translationsProps}
  }
};
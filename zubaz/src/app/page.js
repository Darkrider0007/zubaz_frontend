import ContentSectionTwo from "~/components/Section/Home-3/Content-2/ContentTwo";
import ContentSection from "~/components/Section/Home-3/Content/Content";
import HeroSection from "~/components/Section/Home-3/Hero/Hero";
import IntegrationSection from "~/components/Section/Common/Integration-2/IntegrationTwo";
import StateSection from "~/components/Section/Home-3/State/State";
import ServiceSection from "~/components/Section/Home-3/Service/Service";
import { HomeHeader } from "~/components/Section/Common/Header";
import Pricing from "~/components/Section/Common/Pricing";
import FAQSection from "~/components/Section/Common/FAQ/FAQSection";
import FooterSectionThree from "~/components/Section/Common/Footer-3/FooterThree";
import Template from "~/components/Section/TemplatesSecttion/Template/Template";

export default function Home() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <HeroSection />
      <ServiceSection />
      <ContentSection />
      <ContentSectionTwo />
      <StateSection />
      <Template />
      {/* <Pricing></Pricing> */}
      <IntegrationSection />
      <FAQSection></FAQSection>
      <FooterSectionThree></FooterSectionThree>
    </>
  );
}

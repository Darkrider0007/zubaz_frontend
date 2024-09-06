import Footer from "~/components/Section/Common/Footer";
import { Header } from "~/components/Section/Common/Header";
import TemplateForm from "~/components/Ui/TemplateForm/TemplateForm";

export async function generateStaticParams() {
  const templateIds = ["template1", "template2", "template3"];

  return templateIds.map((id) => ({
    templateID: id,
  }));
}

export default function TemplatePage({ params }) {
  const { templateID } = params;

  return (
    <div>
      <Header />
      <TemplateForm templateID={templateID} />
      <Footer />
    </div>
  );
}

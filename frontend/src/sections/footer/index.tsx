import { YoutubeIcon } from "@/components/icons";

const Footer = () => {
  return (
    <div className="bg-[#33443C] text-[#FAFAFA] m-5 rounded-lg px-4 pt-6 md:pt-14 xl:pt-32 pb-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 md:flex-row md:items-start justify-between mb-[72px]">
        <div>
          <p className="mb-6 leading-6">
            Fylpi Immo-online GmbHForchheimergasse 3/13, 1230 Wien, Österreich
          </p>
          <p className="mb-6 leading-6">office@fylpi.at | www.fylpi.at</p>
          <div className="flex items-center gap-2">
            <YoutubeIcon />
            <span className="leading-6">YouTube</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-end gap-10">
          <ul className="flex flex-col gap-[15px]">
            <li>Über uns</li>
            <li>Kontaktieren Sie uns</li>
            <li>Mein Konto</li>
            <li>Kaufen</li>
            <li>Mieten</li>
          </ul>
          <ul className="flex flex-col gap-[15px]">
            <li>FAQ</li>
            <li>Service rund um die Immobilie</li>
            <li>Praktische Anleitungen</li>
            <li>Wissen rund um die Immobilie</li>
            <li>Beratungsdienste</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto h-[1px] bg-[#FAFAFA] mb-6 opacity-40" />
      <div className="max-w-6xl mx-auto opacity-40 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <p>© 2024 Fylpi. Alle Rechte vorbehalten.</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
          <span>Impressum</span>
          <span>Nutzungsbedingungen</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

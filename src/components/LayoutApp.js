import { HeaderNav } from "./UI/HeaderNav";
import { GuideHelp } from "./UI/GuideHelp";
import { FooterApp } from "./UI/FooterApp";
import { HomeSection } from "./Home/HomeSection";
import { PlansSection } from "./Plans/PlansSection";
import { ContactSection } from "./Contacts/ContactSection";
import { ServiceSection } from "./Services/ServiceSection";


export const LayoutApp = () => {

    return <>

        <HeaderNav />

        <div id="home_section">
            <HomeSection />
        </div>

        <div id="services_section">
            <ServiceSection />
        </div>

        <div id="guide_section">
            <GuideHelp />
        </div>

        <div id="plans_section">
            <PlansSection />
        </div>

        <div id="contact_section">
            <ContactSection />
        </div>

        <FooterApp />

    </>;
}
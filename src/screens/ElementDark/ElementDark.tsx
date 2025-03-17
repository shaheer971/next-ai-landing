import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { DashboardOverviewSection } from "./sections/DashboardOverviewSection/DashboardOverviewSection";
import { DataWrapperSection } from "./sections/DataWrapperSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { InfoDisplaySection } from "./sections/InfoDisplaySection/InfoDisplaySection";
import { MainContainerSection } from "./sections/MainContainerSection/MainContainerSection";
import { PricingPlansSection } from "./sections/PricingPlansSection/PricingPlansSection";
import { UserEmpowermentSection } from "./sections/UserEmpowermentSection/UserEmpowermentSection";

export const ElementDark = (): JSX.Element => {
  return (
    <main className="bg-[#010205] flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-[1440px] relative">
        {/* Main container section at the top */}
        <MainContainerSection />

        {/* User empowerment section */}
        <UserEmpowermentSection />

        {/* Feature highlight section - "Empower your B2B business" */}
        <FeatureHighlightSection />

        {/* Data wrapper section */}
        <DataWrapperSection />

        {/* Info display section */}
        <InfoDisplaySection />

        {/* Dashboard overview section */}
        <DashboardOverviewSection />

        {/* Pricing plans section */}
        <PricingPlansSection />

        {/* Content wrapper section */}
        <ContentWrapperSection />

        {/* Footer section */}
        <FooterSection />
      </div>
    </main>
  );
};

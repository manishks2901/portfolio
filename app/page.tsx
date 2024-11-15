import IntroPage from "@/components/intro-page";
import MobileNavbar from "@/components/mobile-navbar";
import ProjectCarousel from "@/components/project-carousel";
import RootNavbar from "@/components/root-navbar-structure1";
import SocialMedia from "@/components/social-media";
import TalentSpace from "@/components/talent-space";

export default function Home() {
  return (
    <>
      <div className="md:m-0 ml-0 mr-9">
      <RootNavbar
          title="Manish Kumar Sharma ..."
          MainNavbarLinks={() => <div>Links</div>}
          MobileNavbar={MobileNavbar}
        />
      </div>

      <div className="md:m-0 ml-0 mr-14 sm:py-4 m-4 ">
      
        <IntroPage />
        <SocialMedia />
        <ProjectCarousel />
        <div className="h-[300px] flex justify-end items-center mt-40">
          <div className="mr-40">
            <p className="text-xl md:text-2xl font-sans font-semibold ">
              Hello I&apos; m Manish , I&apos;m a
              <b>
                <i>fullstack developer</i>
              </b>
              <br /> and I&apos;m passionate about learning new technologies{" "}
              <br /> and building new things.
            </p>
          </div>
        </div>

          <TalentSpace />
      </div>
    </>
  );
}

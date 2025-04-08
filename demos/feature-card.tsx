import { FeatureCard, FeatureCardHeader, FeatureCardMedia, FeatureCardVideo } from "@/components/ui/feature-card";

export default function FeatureCardDemo() {
    return (
        <div className="w-full flex items-center justify-center sm:p-4">
            <FeatureCard>
                <FeatureCardHeader heading="We are Solaris !" text="At Solaris we are dedicated to work hard for better future." />
                <FeatureCardMedia img="/solaris_logo/main_logo.png" heading="Image" mockupSize="w-10/12" mockupPosition="bottom-0 left-1/2 -translate-x-1/2" />
                <FeatureCardVideo video="/videos/feature-video.mp4" />
            </FeatureCard>
        </div>
    )
}

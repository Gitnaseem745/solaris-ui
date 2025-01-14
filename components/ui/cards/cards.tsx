'use client'
import AddExtension from "./add-extension";
import BentoLogin from "./bento-login";
import OrderStatusCard from "@/components/ui/cards/ecom-order-status";
import ProductCard from "@/components/ui/cards/ecom-product-card";
import CategoryCard from "@/components/ui/cards/ecom-product-category";
import SuccessCard from "@/components/ui/cards/ecom-success-card";
import ConnectCard from "@/components/ui/cards/figma-connect";
import MinShareCard from "@/components/ui/cards/min-share-card";
import MinJobCard from "./minimal-job-card";
import PremiumCard from "@/components/ui/cards/premium-card";
import ProfPricing from "./professional-pricing-card";
import PasswordResetCard from "@/components/ui/cards/reset-pass";
import { BsTranslate } from "react-icons/bs";
import { FaDiscord, FaFigma } from "react-icons/fa";

// Dummy Data
const dummyProduct = {
  images: [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150/FF0000",
  ],
  title: "Stylish Sneakers",
  rating: 4.5,
  reviews: 124,
  price: 59.99,
};

const dummyFeatures = [
    { text: "High Performance" },
    { text: "Unlimited Storage" },
    { text: "24/7 Customer Support" },
    { text: "Easy Integration" },
];

// Showcase Functions
const ShowcaseBentoLogin = () => (
    <BentoLogin />
);

const ShowcaseMinJobCard = () => (
    <MinJobCard />
);

const ShowcaseProfPricing = () => (
    <ProfPricing
        type="basic"
        title="Basic Plan"
        label="Starter"
        price={19.99}
        features={dummyFeatures}
        onStart={() => alert("Start now clicked!")}
    />
);

const ShowcaseProfPricingPopular = () => (
    <ProfPricing
        type="popular"
        title="Popular Plan"
        label="Advanced"
        price={39.99}
        features={dummyFeatures}
        onStart={() => alert("Start now clicked!")}
    />
);

const ShowcasePremiumCard = () => (
  <PremiumCard
    imgOne="/"
    imgTwo="/"
    categoryTitle="Category"
    categoryLink="/"
    buttonText="Product Details"
    buttonLink="/"
  />
);

const ShowcaseAddExtension = () => (
  <AddExtension
    Icon={BsTranslate}
    title="Language Translator"
    description="Translate your text into multiple languages easily."
    viewCount={12345}
    author={{ name: "John Doe", avatar: "/path/to/avatar.jpg" }}
    onAdd={() => alert("Extension added!")}
    className="shadow-lg"
  />
);

const ShowcaseMinShareCard = () => <MinShareCard />;

const ShowcaseConnectCard = () => (
  <ConnectCard
    onClose={() => alert('Close button clicked')}
    onCancel={() => alert('Cancel button clicked')}
    onIntegrate={() => alert('Integrate button clicked')}
    title="Connect Figma to Discord"
    description="Integrate Figma with Discord for better collaboration."
    sourceApp={{
      name: 'Figma',
      Icon: FaFigma,
    }}
    targetApp={{
      name: 'Discord',
      Icon: FaDiscord,
    }}
  />
);

const ShowcasePasswordResetCard = () => <PasswordResetCard />;

const ShowcaseOrderStatusCard = () => (
  <OrderStatusCard
    courierName="Iphone 15 Pro"
    packageId="#1L2K5"
    deliveryAddress="Rustam Nagar Sahaspur - 244411"
    warehouseLocation="Gurgaon Sector 36 - 221244"
    courierImage="/"
  />
);

const ShowcaseCategoryCard1 = () => (
  <CategoryCard
    title="Iphone 15 Pro Max"
    description="An Apple Iphone's 15 series mobile device"
    image="/"
    productCount={50}
  />
);

const ShowcaseSuccessCard = () => (
  <SuccessCard
    title="Operation Successful"
    message="Your operation was completed successfully. Thank you for your patience."
    primaryAction={{
      label: "Continue",
      onClick: () => alert("Primary action executed!"),
    }}
    secondaryAction={{
      label: "Go Back",
      onClick: () => alert("Secondary action executed!"),
    }}
  />
);

const ShowcaseProductCard = () => (
  <ProductCard
    images={dummyProduct.images}
    title={dummyProduct.title}
    rating={dummyProduct.rating}
    reviews={dummyProduct.reviews}
    price={dummyProduct.price}
  />
);

const ShowcaseCategoryCard2 = () => (
  <CategoryCard
    title="Nike Air 1 Jordan"
    productCount={44}
    image="/"
    description="Air Jordan Series Air 1 Shoes By Nike"
  />
);

export {
  ShowcaseBentoLogin,
  ShowcaseMinJobCard,
  ShowcaseProfPricing,
  ShowcaseProfPricingPopular,
  ShowcasePremiumCard,
  ShowcaseAddExtension,
  ShowcaseMinShareCard,
  ShowcaseConnectCard,
  ShowcasePasswordResetCard,
  ShowcaseOrderStatusCard,
  ShowcaseCategoryCard1,
  ShowcaseSuccessCard,
  ShowcaseProductCard,
  ShowcaseCategoryCard2,
};

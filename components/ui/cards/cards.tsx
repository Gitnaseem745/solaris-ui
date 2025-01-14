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
    "/shoe_img_1.webp",
    "/shoe_img_2.webp",
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
    />
);

const ShowcaseProfPricingPopular = () => (
    <ProfPricing
        type="popular"
        title="Popular Plan"
        label="Advanced"
        price={39.99}
        features={dummyFeatures}
    />
);

const ShowcasePremiumCard = () => (
  <PremiumCard
    imgOne="/shoe_img_3.webp"
    imgTwo="/shoe_img_4.webp"
    categoryTitle="Category"
    buttonText="Product Details"
    buttonLink="/components/cards/premium-card"
  />
);

const ShowcaseAddExtension = () => (
  <AddExtension
    Icon={BsTranslate}
    title="Language Translator"
    description="Translate your text into multiple languages easily."
    viewCount={12345}
    author={{ name: "John Doe", avatar: "/path/to/avatar.jpg" }}
    className="shadow-lg"
  />
);

const ShowcaseMinShareCard = () => <MinShareCard />;

const ShowcaseConnectCard = () => (
  <ConnectCard
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
    courierImage="/product_img.jpg"
  />
);

const ShowcaseCategoryCard1 = () => (
  <CategoryCard
    title="Iphone 15 Pro Max"
    description="An Apple Iphone's 15 series mobile device"
    image="/product_img.jpg"
    productCount={50}
  />
);

const ShowcaseSuccessCard = () => (
  <SuccessCard
    title="Operation Successful"
    message="Your operation was completed successfully. Thank you for your patience."
    primaryAction={{
      label: "Continue",
    }}
    secondaryAction={{
      label: "Go Back",
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
    image="/shoe_img_1.webp"
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

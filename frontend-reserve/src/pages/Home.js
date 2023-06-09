import React from "react";
import { Header } from "../components/header/Header";
import { SearchBus } from "../components/home-page/Find-bus/SearchBus";
import { HomeCard } from "../components/home-page/Achievements/HomeCard";
import { HomeCustomers } from "../components/home-page/Customer-reviews/HomeCustomers";
import { Footer } from "../components/footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <SearchBus />
      <HomeCard />
      <HomeCustomers />
      <Footer />
    </>
  );
};

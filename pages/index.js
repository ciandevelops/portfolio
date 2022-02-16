import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>

      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
    </div>
  );
}

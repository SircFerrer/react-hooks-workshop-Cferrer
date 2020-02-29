import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Home = () => {
  const [step, setStep] = useState(1);
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState("");
  const [filter, setFilter] = useState("");
  const handleGoHome = () => setStep(1);
  const handleNext = () => setStep(step + 1);
  const handleShare = () => {};
  const handleUploadImage = ev => {
    const files = ev.target.files;
    if (files.length) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = ev => {
        setImage(ev.target.result);
        setStep(2);
      };
    }
  };
  const getPosts = async () => {
    const res = await axios.get("http://localhost:3000/api/posts");
    setPosts(res.data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <Header
        step={step}
        handleShare={handleShare}
        handleGoHome={handleGoHome}
        handleNext={handleNext}
      />
      <Body image={image} step={step} posts={posts} setFilter={setFilter}/>
      <Footer
        step={step}
        handleGoHome={handleGoHome}
        handleUploadImage={handleUploadImage}
      />
    </>
  );
};
export default Home;

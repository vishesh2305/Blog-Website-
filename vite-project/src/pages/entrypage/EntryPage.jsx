import React from "react";
import { NonLoggedInNavbar } from "../../components/navbar1/Navbar1";
import HeroSection from '../../components/heroSection/HeroSection';
import BlogPostCard from '../../components/blogPostCard/BlogPostCard';
import Footer from "../../components/footer/Footer";

function EntryPage() {
    return(
        <>

<NonLoggedInNavbar></NonLoggedInNavbar>

<HeroSection />
<BlogPostCard />

<Footer></Footer>

        </>
    )
}

export default EntryPage;
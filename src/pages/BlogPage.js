import Title from '../components/Title';
import BlogEntry from '../components/BlogEntry';
import AboutCard from '../components/AboutCard';
import Posts from '../components/Posts';
import Lables from '../components/Lables';
import Footer from '../components/Footer';
import woodsJpg from '../components/images/woods.jpg';
import bridgeJpg from '../components/images/bridge.jpg';

function BlogPage() {
  return (
    <>
      <div className="w3-content">
        <Title />
        <div class="w3-row">
          <div class="w3-col l8 s12">
            <BlogEntry image={woodsJpg} title="TITLE HEADING" date="April 7, 2014" comments="0" />
            <hr />
            <BlogEntry image={bridgeJpg} title="BLOG ENTRY" date="April 2, 2014" comments="2" />
          </div>
          <div class="w3-col l4">
            <AboutCard />
            <hr />
            <Posts />
            <hr />
            <Lables />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;

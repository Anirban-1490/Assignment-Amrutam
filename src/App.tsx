import "./App.css";
import { Home } from "./module";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Amrutam - Authentic Ayurvedic Products for Health &amp; Beauty
        </title>
        <meta
          name="description"
          content="Explore Amrutam’s wide range of Ayurvedic products designed to enhance health and wellness for both women and men. From menstrual health to immune support, hair care, skin care - our natural formulations are crafted to restore balance and vitality. Embrace the power of Ayurveda for a healthier life."
        />
        <meta name="twitter:site" content="@amrutamofficial" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Amrutam - Authentic Ayurvedic Products for Health &amp; Beauty"
        />
        <meta
          name="twitter:description"
          content="Explore Amrutam’s wide range of Ayurvedic products designed to enhance health and wellness for both women and men. From menstrual health to immune support, hair care, skin care - our natural formulations are crafted to restore balance and vitality. Embrace the power of Ayurveda for a healthier life."
        />
      </Helmet>
      <Home />
    </>
  );
}

export default App;

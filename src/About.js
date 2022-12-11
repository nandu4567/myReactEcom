import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import styled from "styled-components";


const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "My Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
      <Wrapper className="section">
        <div className="container">
          <div className="intro-data" style={{ fontSize: "22px" }}>About Us</div> <br />
          <h3 className="common-heading">Making Commerce Better For Everyone</h3>
          <p style={{marginTop: "0px", fontSize: "22px"}}>Started in 2022, We always strive to be better and deliever quality products to customers, and now we have become the heartbeat of millions of people. We have drafted best practise guidelines and joined the government's task force on Ecommerce.</p>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
}

.common-heading{
  font-size: 22px;
}
}
}
`;

export default About;

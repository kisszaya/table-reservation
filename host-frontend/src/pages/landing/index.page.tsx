import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const Landing = () => {
  return <div>
    meow
  </div>
};

export default Landing;

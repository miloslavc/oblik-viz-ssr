import styled from 'styled-components';
import * as gtag from '../lib/gtag';
import Layout from '../layouts/layout';

export default function Home({ posts }) {
  const handleClick = () => {
    console.log('click');
    gtag.event({
      action: 'submit_form',
      category: 'Contact',
    });
  };

  return (
    <Layout>
      <Container>
        <Title>Witness your creative vision through our design</Title>
        <a href="" onClick={handleClick}>
          oblik viz
        </a>
      </Container>
    </Layout>
  );
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const posts = 'Hello Static';

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export async function getServerSideProps() {
  const posts = 'Hello Server';
  return {
    props: {
      posts,
    },
  };
}

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
`;

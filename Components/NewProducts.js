
import styled from 'styled-components';
import Center from './Center';
import ProductBox from './ProductBox';

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;  
 
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;

function NewProducts({newProducts}) {
  return (
    <Center>
    <Title>New Arrivals</Title>
        <StyledProductsGrid>
        {newProducts?.length > 0 && newProducts.map(product => (
        <ProductBox key={product._id} {...product} />
      ))}
      
    </StyledProductsGrid>


    </Center>
    
  )
}

export default NewProducts
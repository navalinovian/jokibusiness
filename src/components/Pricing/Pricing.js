import React, { useEffect, useState } from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';
import { getAllProducts } from '../frontendServices/ProductService';
import { useNavigate } from 'react-router-dom';

function Pricing() {
  let navigate = useNavigate()
  const [product, setProduct] = useState([])

  const productLogo = (product) => {
    switch (product.name) {
      case 'Starter Pack':
        return <GiRock />
      case 'Gold Rush':
        return <GiCrystalBars />
      case 'Diamond Kings':
        return <GiCutDiamond />
      default:
        break;
    }
  }

  useEffect(() => {
    getAllProducts().then((res) => {
      setProduct(res);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  const handleClick=(product)=>{
    navigate('/payment-gateway', {state:product})
  }

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            {product.map((value) => {
              const { name, price, id } = value;
              return <PricingCard key={id}>
                <PricingCardInfo>
                  <PricingCardIcon>
                    {productLogo(value)}
                  </PricingCardIcon>
                  <PricingCardPlan>{name}</PricingCardPlan>
                  <PricingCardCost>${price}</PricingCardCost>
                  <PricingCardLength>per month</PricingCardLength>
                  <PricingCardFeatures>
                    <PricingCardFeature>100 New Users</PricingCardFeature>
                    <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                    <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                  </PricingCardFeatures>
                  <Button onClick={()=>handleClick(value)}>Choose Plan</Button>
                </PricingCardInfo>
              </PricingCard>
            })}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;

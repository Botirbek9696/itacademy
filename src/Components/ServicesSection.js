import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/Web Design.jfif';
import intelligence from '../img/Artificial Intelligence.jpg';
import gamedev from '../img/game developer.jpg';
import Bgimg from '../img/640px-ISO_C++_Logo.svg.png'
import Bgimg1 from '../img/java-logo-vector.png'

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'directions'} />
                <div className="services">
                    <div className="images2">
                        <ServiceCard
                            image={design}
                            title={'Web Design'}
                            paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                        />
                    </div>
                    <div className="mid-card">
                        <div className="images2">
                            <ServiceCard
                                image={intelligence}
                                title={'Artificial Intelligence'}
                                paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                            />
                        </div>
                    </div>
                    <div className="images2">
                        <ServiceCard
                            image={gamedev}
                            title={'Game Development'}
                            paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                        />
                    </div>
                   <div className="images">
                       <ServiceCard
                           image={Bgimg}
                           title={'C++'}
                           paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                       />
                   </div>
                    <div className="images1">
                        <ServiceCard
                            image={Bgimg1}
                            title={'Java'}
                            paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                        />
                    </div>
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
      
      
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       .images{
         img {
           width: 30%;
         }
       }
      .images1{
        img {
          width: 34%;
        }
      }
      .images2{
        img{
          width: 34%;
          height: 80px;
        }
      }
      
    }
`;

export default ServicesSection;

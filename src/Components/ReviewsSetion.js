import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Addresses '}  />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        text={'14 Istiqbol ko\'chasi, Тошкент 100060'}
                    />
                    <ReviewItem 
                        text={'Toshkent, Mustaqillik shox, 29, Tashkent'}
                    />
                    
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
      color: black;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSetion;

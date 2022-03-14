import React from 'react';
import Title from "../Components/Title";
import styled from 'styled-components'
import {InnerLayout, MainLayout} from "../styles/Layouts";
import gallery from "../data/gallery";

const GalleryPage = () => {
    return (
        <MainLayout>
            <BlogsStyled>
                <Title title={'clips from academy lifes'}  />
                <InnerLayout className={'blog'}>
                    {
                        gallery.map((gallery)=>{
                            return <div key={gallery.id} className={'gallery-item'}>
                                <div className="image">
                                    <img src={gallery.image} alt=""/>
                                </div>
                            </div>
                        })
                    }
                </InnerLayout>
            </BlogsStyled>
        </MainLayout>
    );
};

const BlogsStyled = styled.div`
  .blog{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px){
      grid-template-columns: repeat(1, 1fr);
    }
    .gallery-item{
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
    }
    .image{
      width: 100%;
      overflow: hidden;
      padding-bottom: .5rem;
      img{
        width: 100%;
        height: 350px;
        object-fit: cover;
        transition: all .4s ease-in-out;
        border-radius: 10px ;
        &:hover{
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }
`

export default GalleryPage;
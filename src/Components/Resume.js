import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'To Learn'}  />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={school} title={'Frontend'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'6-month'}
                        title={'React Js'}
                        subTitle={'Required Codes'}
                        text={'Appendix\n' +
                        'Using props and state, we can create a small to-do list application. This example uses state to keep track of the current list of items as well as the text entered by the user. Although event handlers are built into the markup, they are assembled and implemented using  '}
                    />
                    <ResumeItem 
                        year={'5-month'}
                        title={'React Js'}
                        subTitle={'Required Codes'}
                        text={'React components implement a render() method that takes input and returns something for output. This example uses an XML-like syntax called JSX. The input passed to the component is available in render() via this.props.JSX is optional to work with React. React Code                 '}
                    />
                    <ResumeItem 
                        year={'4-month'}
                        title={'JavaScript'}
                        subTitle={'Required Codes'}
                        text={'JavaScript statements are commands to the browser JavaScript code is a sequence of statements JavaScript statements are separated with semicolon Multiple statement on one line is allowed JavaScript statements can be grouped together in code blocks You can break'}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Initial'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'3-month'}
                        title={'Bootstrap'}
                        subTitle={'Basic'}
                        text={'Documentation and examples for displaying inline and multiline blocks of code with Bootstrap.Wrap inline snippets of code with <code>. Be sure to escape HTML angle brackets.For example, <code>&lt;section&gt;</code> should be wrapped as inline. Bootstrap code '}
                    />
                    <ResumeItem 
                        year={'2-month'}
                        title={'CSS'}
                        subTitle={'Basic'}
                        text={'In the linked method, the style sheet is created and stored in a separate .css file. These are related (or external) styles. In an inline method, the CSS is stored directly in the HTML tag\'s style attribute, example: <div style="font-weight: bold">Bold Font</div> These are inline styles.'}
                    />
                    <ResumeItem 
                        year={'1-month'}
                        title={'HTML'}
                        subTitle={'Basic'}
                        text={'HTML tags h1, h2, h3, h4, h5, h6 are six headings showing the relative importance of the block after the heading depending on the heading level h1, h2, h3, etc. The h1 tag is the first level heading, the h2 tag is the second, the h3 tag is the third, the h6 tag is the least significant heading of all. '}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume

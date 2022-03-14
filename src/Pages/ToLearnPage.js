import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';

function ToLearnPage() {
    return (
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ToLearnPage

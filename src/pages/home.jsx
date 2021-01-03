import React from 'react';
import { OptForm } from '../components';
import JumbotronContainer from '../containers/jumbotron';
import HeaderContainer from '../containers/header';
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

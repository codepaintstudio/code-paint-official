import Header from '@/components/header';
import Cover from '@/pages/activity/components/cover';
import MainContent from '@/pages/activity/components/main-content';
import MobileHeader from '@/components/mobileheader/mobileheader';

const Activity = () => {
  return (
    <>
      <MobileHeader />
      <Header />
      <Cover />
      <MainContent />
    </>
  );
};

export default Activity;

import { Suspense } from 'react';
import VerifyContent from './VerifyContent';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Verify Account - Anantor',
    robots: {
        index: false,
        follow: false,
    },
};

export default function VerifyPage() {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <VerifyContent />
            </Suspense>
            <Footer />
        </>
    );
}

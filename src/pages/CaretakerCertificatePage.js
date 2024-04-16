import React from 'react'
import CaretakerNav from '../components/CaretakerNav'
import Footer from '../components/Footer'

import { useParams } from 'react-router-dom';
import CaretakerUploadCertificate from '../components/CaretakerUploadCertificate'
const CaretakerCertificatePage = () => {

    const { caretakerId } = useParams();
  return (
    <div>
      <header>
        <CaretakerNav/>
      </header>
      <CaretakerUploadCertificate caretakerId={caretakerId} />
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default CaretakerCertificatePage
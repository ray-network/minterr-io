import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from '@/layouts/Main'

const ExplorerBlock = ({ params }) => {
  return (
    <MainLayout>
      <div className="ray__block">
        <Helmet title={`Cardano Address Explorer`} />
        <h1>Couldn't find address</h1>
        <p>We couldn't locate the address "{params.address}"</p>
      </div>
    </MainLayout>
  )
}

export default ExplorerBlock
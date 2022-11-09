import { GetStaticProps } from "next"
import Error from 'next/error'
import React from 'react'

const NotFound = ({ errorCode }: {errorCode: number}) => {
  return <Error statusCode={errorCode} />
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      errorCode: 404
    }
  }
}

export default NotFound
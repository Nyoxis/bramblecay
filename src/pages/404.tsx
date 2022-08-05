import { GetStaticProps } from "next"
import Error from 'next/error'

const Page404 = ({ errorCode }) => {
  return <Error statusCode={errorCode} />
}

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: {
      errorCode: 404
    }
  }
}

export default Page404
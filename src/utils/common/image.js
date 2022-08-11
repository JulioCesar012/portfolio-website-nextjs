import { getStrapiMedia } from "~/../lib/media"
import NextImage from "next/image"

export const Image = ({ image, style }) => {
  const { url, alternativeText, width, height } = image.data.attributes

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
    <NextImage
      // loader={loader}
      layout="responsive"
      width={100}
      height={60}
      objectFit="cover"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  )
}
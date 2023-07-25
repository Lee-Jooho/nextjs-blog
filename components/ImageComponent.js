import Image from 'next/image';

const ImageComponent = ({fileName , height , width , altName}) => {
    return(
        <Image
            src={'/images/' + fileName}
            height={height ? height : 144}
            width={width ? width : 144}
            alt={altName ? altName : "image name"}
        />
    )
}

export default ImageComponent;
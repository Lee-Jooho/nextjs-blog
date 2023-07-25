import Script from 'next/script';

const ScriptComponent = ({src, strategy, onLoadFunc}) => {
    return (
        <Script
        src={src}
        strategy={strategy ? strategy : "lazyOnload"}
        onLoad={() =>
            onLoadFunc
        }
      />
    )
}

export default ScriptComponent;
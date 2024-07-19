import {accordion, getVimeoEmbedUrl, getYoutubeEmbedUrl} from '../utils/utils';

const SaveComponent = ({attributes}) => {
    const {image, youtubeUrl, vimeoUrl, heading, footerHeader, footerText} = attributes;

        return (
            <fragment>
                <div className={'outside-block'}>
                    <div className={'outside-block-left-content'}>
                        <div className="splide block-splide">
                            <div className="splide__track">
                                <ul className="splide__list">
                                    {image && (
                                        <li className="splide__slide">
                                            <img src={image.url} alt={image.alt}/>
                                        </li>
                                    )}
                                    {youtubeUrl && (
                                        <li className="splide__slide">
                                            <iframe
                                                title="YouTube Video"
                                                width="640"
                                                height="360"
                                                src={getYoutubeEmbedUrl(youtubeUrl)}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </li>

                                    )}
                                    {vimeoUrl && (
                                        <li className="splide__slide">
                                            <iframe
                                                src={getVimeoEmbedUrl(vimeoUrl)}
                                                width="640"
                                                height="360"
                                                frameBorder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={'outside-block-right-content'}>
                        <div className={'content-right-top'}>
                            {heading && <h1>{heading}</h1>}
                        </div>
                        <div className={'content-right-accordion'}>
                            <div className="accordion-list">
                                {accordion.map(item => (
                                    <div className="accordion" key={item.id}>
                                        <div className="accordion-title">
                                            {item.title}
                                        </div>
                                        <div className="accordion-content">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={'content-right-bottom'}>
                            {footerHeader && <h6>{footerHeader}</h6>}
                            {footerText && <p>{footerText}</p>}
                        </div>

                    </div>
                </div>
            </fragment>
        );
}

export default SaveComponent;
import {Fragment} from "react";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, MediaUploadCheck, InspectorControls } = wp.blockEditor;
const { PanelBody, Button, TextControl } = wp.components;
const { useState  } = wp.element;

import { getYoutubeEmbedUrl, getVimeoEmbedUrl, accordion } from '../utils/utils'; // Import utility functions if they are in a separate file

const EditComponent = ({ attributes, setAttributes }) => {
    const { image, youtubeUrl, vimeoUrl, heading, footerHeader, footerText } = attributes;

    const onSelectImage = (media) => {
        setAttributes({ image: { id: media.id, url: media.url, alt: media.alt } });
    };

    const onRemoveImage = () => {
        setAttributes({ image: null });
    };

    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const Accordion = ({ id, title, description, isOpen, toggleAccordion }) => {
        const onClickAccordion = () => {
            toggleAccordion(id);
        };

        return (
            <div className="accordion">
                <div className={`accordion-title ${isOpen ? 'open' : ''}`} onClick={onClickAccordion}>
                    {title}
                </div>
                {isOpen && (
                    <div className="accordion-content">
                        <p>{description}</p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <Fragment>
            <div className="splide-slider-block">
                <InspectorControls>
                    <PanelBody title={__('Slider Settings', 'gutenberg-splide-slider')}>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={['image']}
                                render={({ open }) => (
                                    <Button onClick={open} isPrimary>
                                        {__('Select Image', 'gutenberg-splide-slider')}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        {image && (
                            <div className="image-preview">
                                <img src={image.url} alt={image.alt} />
                                <Button onClick={onRemoveImage} isDestructive>
                                    {__('Remove Image', 'gutenberg-splide-slider')}
                                </Button>
                            </div>
                        )}
                        <TextControl
                            label={__('YouTube Video URL', 'gutenberg-splide-slider')}
                            value={youtubeUrl}
                            onChange={(value) => setAttributes({ youtubeUrl: value })}
                        />
                        <TextControl
                            label={__('Vimeo Video URL', 'gutenberg-splide-slider')}
                            value={vimeoUrl}
                            onChange={(value) => setAttributes({ vimeoUrl: value })}
                        />
                    </PanelBody>
                    <PanelBody title={__('Text Settings', 'gutenberg-splide-slider')} initialOpen={false}>
                        <TextControl
                            label={__('Heading', 'gutenberg-splide-slider')}
                            value={heading}
                            onChange={(value) => setAttributes({ heading: value })}
                        />
                        <TextControl
                            label={__('Footer Header', 'gutenberg-splide-slider')}
                            value={footerHeader}
                            onChange={(value) => setAttributes({ footerHeader: value })}
                        />
                        <TextControl
                            label={__('Footer Text', 'gutenberg-splide-slider')}
                            value={footerText}
                            onChange={(value) => setAttributes({ footerText: value })}
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={'outside-block'}>
                    <div className={'outside-block-left-content'}>
                        <div className="splide__track">
                            <ul className="splide__list">
                                {image && (
                                    <li className="splide__slide">
                                        <img src={image.url} alt={image.alt} />
                                    </li>
                                )}
                                {youtubeUrl && (
                                    <li className="splide__slide">
                                        <iframe
                                            title="YouTube Video"
                                            src={getYoutubeEmbedUrl(youtubeUrl)}
                                            width="640"
                                            height="360"
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
                    <div className={'outside-block-right-content'}>
                        <div className={'content-right-top'}>
                            {heading && <h1>{heading}</h1>}
                        </div>
                        <div className={'content-right-accordion'}>
                            <div className="accordion-list">
                                {accordion.map(item => (
                                    <Accordion
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        description={item.description}
                                        isOpen={openAccordion === item.id}
                                        toggleAccordion={toggleAccordion}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={'content-right-bottom'}>
                            {footerHeader && <h6>{footerHeader}</h6>}
                            {footerText && <p>{footerText}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditComponent;

export const getYoutubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
};

export const getVimeoEmbedUrl = (url) => {
    const videoId = url.split('/').pop(); // Get the last segment of the URL
    return `https://player.vimeo.com/video/${videoId}`;
};

export const accordion = [
    { id: 1, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet consectetur. Euismod ultricies sed ipsum duis at arcu sit urna proin. Erat feugiat diam pharetra nisl.' },
    { id: 2, title: 'Lorem Ipsum dolor', description: 'Lorem ipsum dolor sit amet consectetur. Euismod ultricies sed ipsum duis at arcu sit urna proin. Erat feugiat diam pharetra nisl.' },
    { id: 3, title: 'Amet consectetur', description: 'Lorem ipsum dolor sit amet consectetur. Euismod ultricies sed ipsum duis at arcu sit urna proin. Erat feugiat diam pharetra nisl.' },
    { id: 4, title: 'Tellus bibendum sapien', description: 'Lorem ipsum dolor sit amet consectetur. Euismod ultricies sed ipsum duis at arcu sit urna proin. Erat feugiat diam pharetra nisl.' },
];

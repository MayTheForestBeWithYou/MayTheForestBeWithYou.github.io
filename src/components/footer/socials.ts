interface Social {
    platform: string;
    site: string;
}

interface Socials extends Array<Social> {}

let socials: Socials = [
    {
        platform: 'github',
        site: 'https://www.github.com/MayTheForestBeWithYou',
    },
    {
        platform: 'linkedin',
        site: 'https://www.linkedin.com/in/timon-van-leeuwen',
    },
];

export { socials };

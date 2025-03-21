import { images } from '~/assets'

export const navigation = {
    navLists: ['Home', 'Service', 'Feature', 'Testimonial', 'FAQ']
}

export const carousel = {
    highlights: [
        {
            id: 1,
            title: {
                black: 'Lessons and insights',
                green: 'from 8 years'
            },
            description: 'Where to grow your business as a photographer: site or social media?',
            button: 'Register',
            image: images.carousel
        },
        {
            id: 2,
            title: {
                black: 'Lessons and insights',
                green: 'from 8 years'
            },
            description: 'Where to grow your business as a photographer: site or social media?',
            button: 'Register',
            image: images.carousel
        },
        {
            id: 3,
            title: {
                black: 'Lessons and insights',
                green: 'from 8 years'
            },
            description: 'Where to grow your business as a photographer: site or social media?',
            button: 'Register',
            image: images.carousel
        }
    ]
}

export const clients = {
    logos: [
        images.clientMarquee1,
        images.clientMarquee2,
        images.clientMarquee3,
        images.clientMarquee4,
        images.clientMarquee5,
        images.clientMarquee6,
        images.clientMarquee7
    ]
}

export const associates = {
    items: [
        {
            id: 1,
            img: images.associate1,
            title: 'Membership Organisations',
            description:
                'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            id: 2,
            img: images.associate2,
            title: 'National Associations',
            description:
                'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            id: 3,
            img: images.associate3,
            title: 'Clubs And Groups',
            description:
                'Our membership management software provides full automation of membership renewals and payments'
        }
    ]
}

export const sections = {
    firstLearnMore: {
        img: images.learnmore1,
        title: 'The unseen of spending three years at Pixelgrade',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'
    },
    secondLearnMore: {
        img: images.learnmore2,
        title: 'How to design your site footer like we did',
        description:
            'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.'
    }
}

export const ratingSection = [
    {
        id: 1,
        img: images.ratingSvg1,
        title: 'Members',
        number: 2245341
    },
    {
        id: 2,
        img: images.ratingSvg2,
        title: 'Clubs',
        number: 46328
    },
    {
        id: 3,
        img: images.ratingSvg3,
        title: 'Event Bookings',
        number: 828867
    },
    {
        id: 4,
        img: images.ratingSvg4,
        title: 'Payments',
        number: 1926436
    }
]

export const blogSection = [
    {
        id: 1,
        img: images.blogImage1,
        title: 'Creating Streamlined Safeguarding Processes with OneRen'
    },
    {
        id: 2,
        img: images.blogImage2,
        title: 'What are your safeguarding responsibilities and how can you manage them?'
    },
    {
        id: 3,
        img: images.blogImage3,
        title: 'Revamping the Membership Model with Triathlon Australia'
    }
]

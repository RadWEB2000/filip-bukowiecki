import { CgMail, CgSmartphone } from 'react-icons/cg';
import {RiFacebookFill, RiInstagramLine, RiMovie2Line, RiYoutubeFill} from 'react-icons/ri';
export const content = {
    seo:{
        title:'Filip Bukowiecki - operator kamery, montażysta filmowy, Poznań',
        image:'/assets/images/logo.png',
        description:'Jeśli szukasz osoby, która zrealizuje dla Ciebie film z wesela lub spot to nie mogłeś lepiej trafić. Postaw na profesjonalizm i zapał.'
    },
    sound:'/assets/sound/try.mp3',
    hero:{
        movie:'/assets/movie/backgroundVideo.mp4',
        h1:'Filip Bukowiecki',
        h2:` operator kamery i montażysta filmów`
    },
    about:{
        title:'Kim jestem?',
        image:'/assets/images/lusterko.jpg',
        content:`Cześć! Jestem Filip, ale co najważniejsze, jestem miłośnikiem filmów. W branży filmowej działam od 2019 roku. Przez ten czas współpracowałem z różnymi firmami (m. in. PCSS, e-xon czy 2k4k). Na co dzień mieszkam w Poznaniu, ale posiadam prawo jazdy i samochód, także dojazd do Ciebie nie stanowi problemu.`
    },
    works:{
        title:'Realizacje',
        path:'https://www.youtube.com/channel/UChK4HgsDY8p1kOQfMdAPC0A',
        content:`Dzięki współpracy z różnymi firmami, miałem okazję pracować przy przeróżnych rodzajach filmów, a co za tym idzie zdobyłem doświadczenie jako “one man army”, na planach filmowych czy podczas transmisji na żywo (zarówno jako operator jak i realizator). Wiem jak bardzo ważny w tej branży jest kontakt z klientem, dlatego uzbrojony w cierpliwość, jestem gotowy zrealizować film dla Ciebie!`,
        movies:{
            assembled:[
                'https://www.youtube.com/embed/wrd770kZnaE',
                'https://www.youtube.com/embed/r9ZVveQ9dMI',
                'https://www.youtube.com/embed/DcJ9T3N6m3M',
                'https://www.youtube.com/embed/uPTmHk9sI0U',
            ],
            recorded:[
                'https://www.youtube.com/embed/xIFhanw-e44',
                'https://www.youtube.com/embed/wqcfgE2LAV4',
                'https://www.youtube.com/embed/o8GaV5uAW0Y',
                'https://www.youtube.com/embed/uPTmHk9sI0U'
            ]
        }
    },
    offers:{
        title:'Oferty',
        cards:[
            {
                icon:<RiMovie2Line/>,
                title:'Realizacja filmów weselnych',
                content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in est quis risus varius tincidunt. Praesent vitae lectus ornare, tincidunt tellus ut, aliquam dolor. Phasellus vitae mauris metus. Fusce vel ex vitae nunc sollicitudin eleifend. Ut pellentesque nunc orci, dapibus imperdiet purus sodales nec. In eget porta urna, et tincidunt libero. Nulla interdum velit vel consectetur ultrices.`
            },
            {
                icon:<RiMovie2Line/>,
                title:'Realizacja filmów weselnych',
                content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in est quis risus varius tincidunt. Praesent vitae lectus ornare, tincidunt tellus ut, aliquam dolor. Phasellus vitae mauris metus. Fusce vel ex vitae nunc sollicitudin eleifend. Ut pellentesque nunc orci, dapibus imperdiet purus sodales nec. In eget porta urna, et tincidunt libero. Nulla interdum velit vel consectetur ultrices.`
            },
            {
                icon:<RiMovie2Line/>,
                title:'Realizacja filmów weselnych',
                content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in est quis risus varius tincidunt. Praesent vitae lectus ornare, tincidunt tellus ut, aliquam dolor. Phasellus vitae mauris metus. Fusce vel ex vitae nunc sollicitudin eleifend. Ut pellentesque nunc orci, dapibus imperdiet purus sodales nec. In eget porta urna, et tincidunt libero. Nulla interdum velit vel consectetur ultrices.`
            },
        ]
    },
    reviews:{
        title:'Opinie',
        cards:[
            {
                image:'https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                title:'Armand Górski',
                content:`Integer malesuada congue arcu. Aenean quis pellentesque ex, efficitur tincidunt magna. Aenean velit ipsum, dignissim pretium varius quis, mattis id nibh. Praesent ac ligula vitae augue dictum tincidunt. Etiam sodales pulvinar est in eleifend. Aliquam tristique, turpis eget vulputate tempus, lacus dui semper odio, eu posuere tellus eros eu tellus.`
            },
            {
                image:'https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                title:'Armand Górski',
                content:`Integer malesuada congue arcu. Aenean quis pellentesque ex, efficitur tincidunt magna. Aenean velit ipsum, dignissim pretium varius quis, mattis id nibh. Praesent ac ligula vitae augue dictum tincidunt. Etiam sodales pulvinar est in eleifend. Aliquam tristique, turpis eget vulputate tempus, lacus dui semper odio, eu posuere tellus eros eu tellus.`
            },
        ]
    },
    layout:{
        menu:[
            {
                path:'/',
                title:'start'
            },
            {
                path:'#kim-jestem',
                title:'o mnie'
            },
            {
                path:'#realizacje',
                title:'realizacje'
            },
            {
                path:'#oferty',
                title:'oferty'
            },
            {
                path:'#opinie',
                title:'opinie'
            },
            {
                path:'#kontakt',
                title:'kontakt'
            },
        ],
        socials:[
            {
                icon:<CgSmartphone/>,
                path:'tel:+48885343346',
                title:'Kontakt telefoniczny'
            },
            {
                icon:<RiFacebookFill/>,
                path:'https://www.facebook.com/filip.bukowiecki.58',
                title:'Filip Bukowiecki - Facebook'
            },
            {
                icon:<RiYoutubeFill/>,
                path:'https://www.youtube.com/channel/UChK4HgsDY8p1kOQfMdAPC0A',
                title:'Filip Bukowiecki - YouTube'
            },
            {
                icon:<RiInstagramLine/>,
                path:'https://www.instagram.com/zjadacz_seriali/',
                title:'Filip Bukowiecki - Instagram'
            },
            {
                icon:<CgMail/>,
                path:'mailto:filip.bukowiecki@gmail.com',
                title:'Kontakt e-mail'
            },
        ]
    }
}
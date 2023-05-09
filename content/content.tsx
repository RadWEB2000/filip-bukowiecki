import { CgCamera, CgMail, CgSmartphone } from 'react-icons/cg';
import {RiFacebookFill, RiInstagramLine, RiMovieLine,RiMovie2Line, RiYoutubeFill} from 'react-icons/ri';

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
                "https://www.youtube.com/embed/N5Gul_JQvUI",
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
                icon:<CgCamera/>,
                title:'Operator kamery',
                content:`Szukasz operatora, który nakręci dla Ciebie teledysk? A może wywiad, albo relację z eventu, a może nawet film fabularny? W każdym z tych rodzajów filmów mam doświadczenie. Jednak decydując się na mnie, nie decydujesz się na pierwszego lepszego filmowca. Oferuję unikalne podejście do każdego tematu i gwarantuję jakość oraz kinowe ujęcia w każdym realizowanym przeze mnie projekcie. `
            },
            {
                icon:<RiMovie2Line/>,
                title:'Montaż filmowy',
                content:`Jestem również montażystą. Na co dzień pracuję w programie Adobe Premiere Pro, także jeżeli szukasz osoby, która nada świeżego spojrzenia Twoim ujęciom, lub urzeczywistni Twoją wizję, daj znać. Usiądziemy, porozmawiamy, aby efekt końcowy był najwyższej klasy.
                To Ty jesteś szefem, to jest Twój film, więc wszystko uzgodnimy a ja dołożę wszelkich starań, aby zmontować wszystko tak jak sobie wyobraziłeś.`
            },
            {
                icon:<RiMovieLine/>,
                title:'Realizacja filmów weselnych',
                content:`Ślub to dla wielu najważniejszy dzień w życiu, dlatego też klienci chcą aby był jak najlepiej uwieczniony. Oferuję nowoczesne i oryginalne podejście. Jeżeli nie interesuje cię 3 godzinny film nagrany z jednej perspektywy, jeżeli szukasz nowoczesnego filmu, który będzie piękną pamiątką z wesela, a teledysk będzie artystycznym odzwierciedleniem waszych charakterów`
            },
        ]
    },
    reviews:{
        title:'Opinie',
        cards:[
            {
                image:'/assets/images/armand-gorny.jpg',
                title:'Armand Górny',
                content:`Z Filipem pracowałem podczas kręcenia pierwszego filmu promocyjnego dla mojej firmy. Sama współpraca przebiegała bardzo płynnie, określiłem swoje potrzeby następnie omówiliśmy projekt filmu i zabraliśmy się do pracy. Efekt przerósł moje najśmielsze oczekiwania..`
            },
            {
                image:'/assets/images/klaudia-wieczorek.jpg',
                title:'Klaudia Wieczorek',
                content:`Praca z Filipem to czysta przyjemność:) Wiedza techniczna połączona z kreatywnością i niezwykłym słuchem muzycznym. Taneczny klip był moim marzeniem, a Filip zrozumiał moją wizję, i najważniejsze - zrealizował wszystkie założenia. Poza tym niezwykle zorganizowany, co znacznie podnosi jakość pracy. Cierpliwy i otwarty na uwagi, skrupulatnie wprowadził poprawki. Efekt finalny przeszedł ZNACZNIE moje oczekiwania:) Z ręką na sercu, polecam!`
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

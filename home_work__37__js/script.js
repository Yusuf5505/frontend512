let img1="https://images.icon-icons.com/1812/PNG/96/4213457-bird-media-network-social-sparrow-tweet-twitter_115394.png";
let img2="https://images.icon-icons.com/1678/PNG/96/wondicon-ui-free-website_111210.png";
let img3="https://images.icon-icons.com/1580/PNG/96/2849826-finger-hand-interaction-interface-like-multimedia_107970.png";
let img4="https://images.icon-icons.com/3197/PNG/96/hard_hat_icon_194912.png";
let img5="https://images.icon-icons.com/1120/PNG/96/1486146612-propertyagent002_79450.png";
let img6="https://images.icon-icons.com/3246/PNG/96/handshake_icon_198379.png";
let img7="https://images.icon-icons.com/607/PNG/96/mobile-phone-2_icon-icons.com_56265.png";
let img8="https://images.icon-icons.com/1673/PNG/96/messagecircleoutline_110731.png";
let img9="https://images.icon-icons.com/38/PNG/96/carduse_card_payment_5122.png";

class Header{
constructor(image,h1){
    this.src=image;
    this.h1=h1;
    this.out='';
    
}

    render(id){
        this.out=
        `
        <img src="${this.src}">
        <h1>${this.h1}</h1>`;
        document.querySelector(`#${id}`).innerHTML=this.out
    }
}

const mas=[
    new Header(img1,"Работа в 24 часа в сутки, 7 дней в неделю, 365 дней в году"),
    new Header(img2,"Нет географичечких задач"),
    new Header(img3,`Асортимент`),
    new Header(img4,"Безопасность"),
    new Header(img5,"Сокрачение расходов на аренду и персонал"),
    new Header(img6,"Патнеркие отношение"),
    new Header(img7,"Покупатель всегда на связи"),
    new Header(img8,"комфортный выбор"),
    new Header(img9,"Удобство оплаты")
]

const renderMas=[
    'header1',
    'header2',
    'header3',
    'header4',
    'header5',
    'header6',
    'header7',
    'header8',
    'header9'
    
]

for(let i=0;i<mas.length;i++){
   mas[i].render(renderMas[i])
    }

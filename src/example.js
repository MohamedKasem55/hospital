import i18next from 'i18next';

i18next.init({
    debug:true,
    fallbackLng:'en',
    resources:{
        en:{
            translation:{
                key:'hello world',
                number:"the number is {{count}}"
            }
        },
        ar:{
            translation:{
                key:'أهلا بيك',
                number:"العدد هو {{count}} "
            }
        }
    }
})
const ret = (i18next.t('number',{count:4}));
ret

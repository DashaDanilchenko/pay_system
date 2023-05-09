export const cards = [
    {id: '45641cdsed16',
    number: 48676716716716,
    data: '14/15/12',
    balance: 20000
    },
    {id: '4564164fgrtg',
    number: 6416876716767167,
    data: '01/20/25',
    balance: 30000
    },
    {id: ' dhy74987muyt',
    number: 4526817672246587,
    data: '05/18/19',
    balance: 40000
    },
    {id: 'jjjj654hgj465',
    number: 5264164264578714,
    data: '10/29/24',
    balance: 50000
    },
]

export const counterAgent = [
    {id: 'gsdg6828418',
    number: 2651679781798166 ,
    data: '04/25/27',
    name: 'Yevtushenko Maksim Olegovich ',
    },
    {id: 'htrh4524646rtg',
    number: 5627167672173368,
    data: '07/15/28',
    name: 'Kravchenko Maria Andriivna ',
    },
    {id: 'adferf53651f14',
    number: 65136517169+9126 ,
    data: '11/25/26',
    name: 'Melnyk Roman Evgeniyovych',
    },
    {id: 'hgjfguk54167967',
    number: 5461746716767265,
    data: '09/01/29',
    name: 'Mazur Olga Egorovna',
    },
]

export function genNumber() {
    const allStr = '1234567890';
    let str = '';
    for (let i = 0; i < 16; i++) {
        let pos = Math.floor(Math.random() * allStr.length);
        str += allStr.substring(pos,pos+1);
    }
    return str;
}
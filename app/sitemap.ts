import { MetadataRoute } from 'next'

const URL_BASE = 'https://www.caiki.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {


    const routes = [
        '',           
        '#educacao',  
        '#skills',    
        '#contribuicoes',
        '#projetos',
        '#contato'
    ];

    const routesComIdiomas = routes.flatMap((route) => {

        if (route.startsWith('#')) {
            return [];
        }

        return [
            {
                url: `${URL_BASE}/pt-br${route === '' ? '' : '/' + route}`,
                lastModified: new Date(),
                alternates: {
                    languages: {
                        'en-US': `${URL_BASE}/en-us${route === '' ? '' : '/' + route}`,
                        'pt-BR': `${URL_BASE}/pt-br${route === '' ? '' : '/' + route}`,
                    },
                },
            },
            {
                url: `${URL_BASE}/en-us${route === '' ? '' : '/' + route}`,
                lastModified: new Date(),
                alternates: {
                    languages: {
                        'en-US': `${URL_BASE}/en-us${route === '' ? '' : '/' + route}`,
                        'pt-BR': `${URL_BASE}/pt-br${route === '' ? '' : '/' + route}`,
                    },
                },
            }
        ]
    });

    return [
        {
            url: `${URL_BASE}/pt-br`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    'en-US': `${URL_BASE}/en-us`,
                    'pt-BR': `${URL_BASE}/pt-br`,
                },
            },
        },
        {
            url: `${URL_BASE}/en-us`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    'en-US': `${URL_BASE}/en-us`,
                    'pt-BR': `${URL_BASE}/pt-br`,
                },
            },
        },
    ]
}
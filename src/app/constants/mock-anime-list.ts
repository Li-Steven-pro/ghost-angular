import { AnimeCardItem} from 'src/app/interface/anime-card'
import { ThemesAnime } from '../interface/anime-themes'

export const mockAnimeList : Array<ThemesAnime> = [
    {
        mal_id: 41380,
        title: [
            "100-man no Inochi no Ue ni Ore wa Tatteiru",
            "I'm Standing on a Million Lives"
        ],
        cover: "https://cdn.myanimelist.net/images/anime/1825/108800.jpg",
        year: 2020,
        season: "Fall 2020",
        themes: [
            {
                title: "Anti world",
                theme_id: "41380-00",
                type: "OP1",
                artist: null,
                mirrors: [
                    {
                        "quality": "",
                        "mirror": "https://animethemes.moe/video/100Man-OP1.webm",
                        "audio": "http://animethemes-api.herokuapp.com/api/v1/theme/41380-00/0/audio"
                    }
                ],
                notes: null,
                episodes: "1-10, 12",
                category: null
                
            },
            {
                "title": "Dear My MAJIHA Sisters",
                "theme_id": "41380-01",
                "type": "OP2",
                "artist": null,
                "mirrors": [
                    {
                        "quality": "",
                        "mirror": "https://animethemes.moe/video/100Man-OP2.webm",
                        "audio": "http://animethemes-api.herokuapp.com/api/v1/theme/41380-01/0/audio"
                    }
                ],
                "notes": null,
                "episodes": "11",
                "category": null
            },
            {
                "title": "Carpe Diem",
                "theme_id": "41380-04",
                "type": "ED V3",
                "artist": null,
                "mirrors": [
                    {
                        "quality": "",
                        "mirror": "https://animethemes.moe/video/100Man-ED1v3.webm",
                        "audio": "http://animethemes-api.herokuapp.com/api/v1/theme/41380-04/0/audio"
                    }
                ],
                "notes": null,
                "episodes": "10",
                "category": null
            },
            {
                "title": "Carpe Diem",
                "theme_id": "41380-05",
                "type": "ED V4",
                "artist": null,
                "mirrors": [
                    {
                        "quality": "",
                        "mirror": "https://animethemes.moe/video/100Man-ED1v4.webm",
                        "audio": "http://animethemes-api.herokuapp.com/api/v1/theme/41380-05/0/audio"
                    }
                ],
                "notes": null,
                "episodes": "12",
                "category": null
            }
        ]
    },
    {
        "mal_id": 6682,
        "title": [
            "11eyes",
            "11eyes -Tsumi to Batsu to Aganai no Shoujo-"
        ],
        "cover": "https://cdn.myanimelist.net/images/anime/6/73520.jpg",
        "year": 2009,
        "season": "Fall 2009",
        "themes": [
            {
                "title": "Arrival of Tears",
                "theme_id": "6682-00",
                "type": "OP",
                "artist": "Ayane",
                "mirrors": [
                    {
                        "quality": "",
                        "mirror": "https://animethemes.moe/video/11eyes-OP1.webm",
                        "audio": "http://animethemes-api.herokuapp.com/api/v1/theme/6682-00/0/audio"
                    }
                ],
                "notes": null,
                "episodes": "",
                "category": null
            },
            {
                "title": "Sequentia",
                "theme_id": "6682-01",
                "type": "ED",
                "artist": null,
                "mirrors": [
                    {
                        "quality": "",
                        "mirror": "https://animethemes.moe/video/11eyes-ED1.webm",
                        "audio": "http://animethemes-api.herokuapp.com/api/v1/theme/6682-01/0/audio"
                    }
                ],
                "notes": null,
                "episodes": "",
                "category": null
            }
        ]
    },
];
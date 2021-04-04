
export interface ThemesAnime {
    mal_id : number,
    title : Array<string>,
    cover : string,
    year : number,
    season : string,
    themes : Array<Theme>
}
export interface Theme {
    title : string,
    theme_id : string,
    type : string,
    artist : string | null,
    mirrors : Array<Mirror>,
    notes : string | null,
    episodes : string,
    category : string | null
}
export interface Mirror {
    quality : string,
    mirror : string,
    audio : string
}

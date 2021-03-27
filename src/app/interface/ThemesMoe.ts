interface ThemesMoeTheme {
    themeType: string
    themeName: string
    mirror: {
      mirrorURL: string
      priority: number
      notes: string
    }
  }
  
interface ThemesMoeAnime {
    malID: number
    name: string
    year: number
    season: string
    themes: Array<ThemesMoeTheme>
    watchStatus: number
}
  
interface ThemesAnime {
    mal_id : number,
    title : string[],
    cover : string,
    year : number,
    season : string,
    theme : Theme[]
}
interface Theme {
    title : string,
    theme_id : string,
    type : string,
    artist : string,
    mirrors : Mirror[],
    notes : string,
    episodes : string,
    category : string
}
interface Mirror {
    quality : string,
    mirror : string,
    audio : string
}
export { ThemesMoeAnime, ThemesMoeTheme, ThemesAnime, Theme , Mirror }
  
import Harry1 from '../../assets/film1.png'
import Harry2 from '../../assets/film2.png'
import Harry3 from '../../assets/film3.png'
import Harry4 from '../../assets/film4.png'
import fast1 from '../../assets/film5.png'
import fast2 from '../../assets/film6.png'

export interface Movie {
    src: string;
    title: string;
    main: string;
    runtime: string;
}

export const moviesData: Movie[] = [
    {
        src: Harry1, title: "Harry1", main: "Hieu", runtime: "90"
    },
    {
        src: Harry2, title: "Harry2", main: "HieuDay", runtime: "90"
    },
    {
        src: Harry3, title: "Harry3", main: "HieuNes", runtime: "90"
    },
    {
        src: Harry4, title: "Harry4", main: "HieuOKay", runtime: "90"
    },
    {
        src: fast1, title: "Fast1", main: "HieuIsMe", runtime: "90"
    },
    {
        src: fast2, title: "Fast2", main: "HieuLaDay", runtime: "90"
    }
]
export type ThemeTypes = {
    title: string;
    colors: {
        primary: string;
        secondary: string;
        occupied: string;
    };
    background: {
        notOccupied: string;
        occupied: string;
        main: string;
    };
    same: {
        border: {
            primary: string
        },
        colors: {
            finallyPage: string
        },
        background: {
            initialPage: '#4E84D4'
        }
    }
}

export type HoursType = {
    occupied: boolean;
    time: string;
    details: {
        name: string;
        tel: string;
    }
}

export type DatasHoursType = {
    day: string;
    hours: {
      [index: string]: HoursType,
    };
};

export interface Flight {
    origin: string,
    destination: string,
    flightNumber: number,
    depart: Date,
    arrive: Date,
    nonstop: boolean,
    snacks?: string,
};

// the question mark at the end of snacks lets it know that it is optional
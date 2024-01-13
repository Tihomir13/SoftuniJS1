function RoadRadar(speed, area) {
    let limit;

    if (area == `motorway`)
        limit = 130;
    else if (area == `interstate`)
        limit = 90;
    else if (area == `city`)
        limit = 50;
    else if (area == `residential`)
        limit = 20;

    if (speed <= limit)
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    else {
        let speedDiff = speed - limit;

        let status;

        if (speedDiff > 0 && speedDiff <= 20)
            status = `speeding`;
        else if (speedDiff > 20 && speedDiff <= 40)
            status = `excessive speeding`;
        else
            status = `reckless driving`;

        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
RoadRadar(200, 'motorway');
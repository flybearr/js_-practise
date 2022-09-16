function temp(degree, type) {
    let degreeconvert = 0;
    if (type === "degreeC") {
        degreeconvert = degree * (9 / 5) + 32;
    } else {
        degreeconvert = (degree - 32) * (5 / 9);
    }
    return degreeconvert;
}
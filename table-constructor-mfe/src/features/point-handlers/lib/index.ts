import { IPoint } from "shared/types";

function diffPoints(p1: IPoint, p2: IPoint) {
    return { x: p1.x - p2.x, y: p1.y - p2.y };
}

function addPoints(p1: IPoint, p2: IPoint) {
    return { x: p1.x + p2.x, y: p1.y + p2.y };
}

function scalePoint(p1: IPoint, scale: number) {
    return { x: p1.x / scale, y: p1.y / scale };
}

export { diffPoints, scalePoint, addPoints };

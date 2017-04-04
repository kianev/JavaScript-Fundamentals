function distanceOverTime([v1, v2, t]) {
     [v1, v2, t] = [v1, v2, t].map(Number);
     let speed1InMeters = (v1 * 1000) / 3600;
     let speed2InMeters = (v2 * 1000) / 3600;
     let dist1 = speed1InMeters * t;
     let dist2 = speed2InMeters * t;
     let diff = Math.abs(dist1 - dist2);
     console.log(diff);
}
distanceOverTime([5, -5, 40]);

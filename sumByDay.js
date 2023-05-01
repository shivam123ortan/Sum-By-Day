function sumByDay(D) {
    const D2 = {};
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for (const [dateStr, value] of Object.entries(D)) {
      const dateObj = new Date(dateStr);
      const day = days[dateObj.getUTCDay()];
      if (!(day in D2)) {
        D2[day] = value;
      } else {
        D2[day] += value;
      }
    }
    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      if (!(day in D2)) {
        const prevDay = days[(i + 6) % 7];
        const nextDay = days[(i + 1) % 7];
        const prevValue = D2[prevDay];
        const nextValue = D2[nextDay];
        const mean = Math.floor((prevValue + nextValue) / 2);
        D2[day] = mean;
      }
    }
    return D2;
}

console.log(sumByDay({'2020-01-01 ':4, '2020-01-02':4, '2020-01-03':6, '2020-01-04':8, '2020-01-05':2,
'2020-01-06':-6, '2020-01-07':2, '2020-01-08':-2}));

console.log(sumByDay({'2020-01-01':4, '2020-01-02':4, '2020-01-03':6, '2020-01-04':8, '2020-01-05':2, '2020-01-06':-6, '2020-01-07':2, '2020-01-08':-2}));

console.log(sumByDay({'2020-01-01':6, '2020-01-04':12, '2020-01-05':14, '2020-01-06':2, '2020-01-07':4}));
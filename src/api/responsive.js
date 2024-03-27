function responsive() { return {
    superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1700 },
          items: 6
        },
        tablets: {
          breakpoint: { max: 1700, min: 1400 },
          items: 5
        },
        tabletss: {
          breakpoint: { max: 1400, min: 1300 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1300, min: 700 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 700, min: 480 },
          items: 2
        },
        mobiles: {
          breakpoint: { max: 480, min: 0 },
          items: 1
        }
      };
    }
export default responsive
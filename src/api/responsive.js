function responsive() { return {
    superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1700 },
          items: 2
        },
        tablets: {
          breakpoint: { max: 1700, min: 1400 },
          items: 2
        },
        tabletss: {
          breakpoint: { max: 1400, min: 1300 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1300, min: 700 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 700, min: 480 },
          items: 2
        },
        mobiles: {
          breakpoint: { max: 480, min: 0 },
          items: 2
        }
      };
    }
export default responsive
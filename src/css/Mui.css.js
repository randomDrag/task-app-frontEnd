


const useStyle = theme => ({



    root: {
        height: '100%',
        width: '100%'
    },
    Mat_Menu: {
        height: '100vh',
        flexFlow: 'column',
        [theme.breakpoints.down('xs')]: {

            height: '100%',
            flexFlow: 'row',
            margin: "20px"

        }
    },

    Back_dashboard: {

        height: '90%',
        width: '95%',
        borderRadius: "30px",
        background: [theme.palette.primary.main],
        [theme.breakpoints.down('xs')]: {
            width: "90%",
            height: '100%',

            margin: "20px"

        }

    },
    totalTripcard: {

        height: '80%',
        width: '40%',
        borderRadius: "20px",
        background: [theme.palette.secondary.main],

        [theme.breakpoints.down('xs')]: {
            width: "60%",
            height: '70%',
            margin: "20px 0"

        }

    },
    otherTripcard: {
        height: '50%',
        width: '60%',
        borderRadius: "20px",
        background: [theme.palette.secondary.main],
        [theme.breakpoints.down('xs')]: {
            width: "55%",
            height: '80%',
            margin: "15px 10px",


        }


    },
    belowCardContainer: {
        flexFlow: 'row',
        margin: "20px",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            height: '100%',
            justifyContent: 'center',
            alignItem: 'center',
            flexFlow: "column",
            alignContent: 'center',
            margin: "0"
        }
    },
    addingPage: {
        height: '90%',
        width: '30%',
        borderRadius: "30px",
        background: [theme.palette.primary.main],
        [theme.breakpoints.down('xs')]: {
            width: "90%",
            height: '100%',

            margin: "20px"

        }
    }, table: {
        width: '700px',
    }




});

export default useStyle;